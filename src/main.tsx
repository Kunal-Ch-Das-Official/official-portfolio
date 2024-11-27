import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.tsx";
import { Helmet } from "react-helmet";
import Error500 from "./pages/error-500/Error500.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Helmet>
      <title>Kunal Chandra Das</title>
      <meta
        name="description"
        content="I assist business owners and busy web developers in designing and developing creative websites that align with their vision and engage visitors effectively. My expertise ensures that each website not only meets aesthetic and functional requirements but also drives long-term user engagement and satisfaction. As a freelance web developer, I offer personalized solutions and dedicated support to bring your digital presence to life, tailored to your unique needs and goals."
      />
      <meta
        name="description"
        content="Personal website of Kunal Chandra Das, a software engineer and web developer 
        specializing in full-stack (MERN-stack) development, JavaScript, React, TypeScript, 
        and more. Offering expertise in system design, UX/UI design, and back office work,
         based in Kolkata, India."
      />

      <meta
        name="keywords"
        content="Kunal Chandra Das, Backoffice employee, software engineer, web developer, MERN-stack, full-stack developer, React, JavaScript, TypeScript, MongoDB, Node.js, Express.js, UX/UI design, system design, back office, Magicmind Technology, Kolkata, India"
      />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Kunal Chandra Das" />
      <meta
        property="og:description"
        content="Personal website of Kunal Chandra Das, a software engineer and web developer specializing in full-stack (MERN-stack) development, JavaScript, React, TypeScript, and more. Based in Kolkata, India."
      />
      <meta
        property="og:image"
        content="https://www.kunalchandradas.tech/public/android-chrome-512x512.png"
      />
      <meta property="og:url" content="https://www.kunalchandradas.tech" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Kunal Chandra Das" />
      <meta property="og:updated_time" content="2024-11-25T12:00:00Z" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Kunal Chandra Das" />
      <meta
        name="twitter:description"
        content="Personal website of Kunal Chandra Das, a software engineer and web developer specializing in full-stack (MERN-stack) development, JavaScript, React, TypeScript, and more. Based in Kolkata, India."
      />
      <meta
        name="twitter:image"
        content="https://www.kunalchandradas.tech/public/android-chrome-512x512.png"
      />
    </Helmet>
    <Error500>
      <App />
    </Error500>
  </StrictMode>
);
