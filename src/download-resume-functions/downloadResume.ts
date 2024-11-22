import { PDFDocument } from "pdf-lib";
import { saveAs } from "file-saver";
import React from "react";
import envConfig from "../../conf/envConfig";
import axios from "../../axios/axios";

const handleDownload = async (
  downloadingState: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    downloadingState(true);
    const response = await axios.get(envConfig.resumeUrl);
    if (response) {
      const imgUrl: string = response ? response.data[0].resumeUrl : "";

      // Fetch the image data
      const imgResponse = await fetch(imgUrl);
      const imgBytes = await imgResponse.arrayBuffer();

      // Get MIME type from response headers
      const contentType = imgResponse.headers.get("Content-Type") || "";

      // List of supported image MIME types
      const supportedImageTypes = [
        "image/png",
        "image/jpeg",
        "image/jpg",
        "image/gif",
        "image/bmp",
        "image/webp",
        "image/tiff",
        "image/svg+xml",
      ];

      // Validate if the MIME type is supported
      if (!supportedImageTypes.includes(contentType)) {
        throw new Error(
          "Unsupported image format. Supported formats are PNG, JPEG, GIF, BMP, WEBP, TIFF, and SVG."
        );
      }

      // Create a new PDF document
      const pdfDoc = await PDFDocument.create();

      // Embed the image based on its MIME type
      let img;
      if (contentType === "image/png") {
        img = await pdfDoc.embedPng(imgBytes);
      } else if (contentType === "image/jpeg" || contentType === "image/jpg") {
        img = await pdfDoc.embedJpg(imgBytes);
      } else {
        // Convert other image types to PNG if necessary
        const image = new Image();
        const url = URL.createObjectURL(
          new Blob([imgBytes], { type: contentType })
        );
        image.src = url;

        await new Promise((resolve, reject) => {
          image.onload = resolve;
          image.onerror = reject;
        });

        const canvas = document.createElement("canvas");
        const scaleFactor = 5; // Scaling factor for higher resolution
        canvas.width = image.width * scaleFactor;
        canvas.height = image.height * scaleFactor;
        const ctx = canvas.getContext("2d");

        if (!ctx) {
          throw new Error("Failed to get 2D context");
        }

        ctx.scale(scaleFactor, scaleFactor);
        ctx.drawImage(image, 0, 0);

        const imgData = canvas.toDataURL("image/png");
        img = await pdfDoc.embedPng(imgData);
        URL.revokeObjectURL(url);
      }

      // Get the dimensions of the image
      const { width: imgWidth, height: imgHeight } = img.scale(1);

      // Create a new page with the image dimensions
      const page = pdfDoc.addPage([imgWidth, imgHeight]);

      // Draw the image on the PDF
      page.drawImage(img, {
        x: 0,
        y: 0,
        width: imgWidth,
        height: imgHeight,
      });

      // Serialize the PDF to bytes
      const pdfBytes = await pdfDoc.save();

      // Save the PDF to the user's computer
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      saveAs(blob, "Kunal-Chandra-Das-Resume.pdf");
      downloadingState(false);
    } else {
      console.error("Response did not come");
      throw new Error("Unable to fetch data.");
    }
  } catch (error) {
    console.error("Error:", error);
    downloadingState(false);
  }
};

export default handleDownload;
