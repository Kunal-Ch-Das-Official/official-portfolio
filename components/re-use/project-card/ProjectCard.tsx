"use client";
import React from "react";
import { Card } from "@/components/user-interface/cards-ui/CardsUi";
import Image from "next/image";
import alternativeImage from "@/public/images/error-notfound/error-page-icon.webp";

export function ProjectCard({
  projectThumbnail,
  projectName,
  projectOwner,
  previewLink,
  projectImage,
}: {
  projectThumbnail?: string;
  projectName?: string;
  projectOwner?: string;
  previewLink?: string;
  projectImage?: string;
}) {
  return (
    <div className="h-[28rem] w-full flex items-center justify-center ">
      <a rel="noopener" href={`https://${previewLink}`} target={"_blank"}>
        <Card title={projectName}>
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[28rem] ">
           <div className="inline-flex items-center">
           <Image
                src={projectThumbnail || alternativeImage}
                alt={projectName || "Project Image"}
                height={50}
                width={50}
                className="mr-4 rounded-full ring-4 ring-orange-400 mb-4"
              />
               <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              {projectName}
            </h3>
           </div>
            <div className="text-base !m-0 !p-0 font-normal">
              <h5 className="inline-flex items-center">
                 <span className="text-lg font-bold text-orange-300">Own By:</span> 
                 <span className="font-semibold ml-2">{projectOwner}</span> 
                </h5>
            </div>
            <p className="text-green-100">For more information visit project page</p>
            <div className="flex flex-1 w-full h-1/2 rounded-lg mt-4 ">
              <Image
                src={projectImage || alternativeImage}
                alt={projectName || "Project Image"}
                width={400}
                height={400}
                className="h-2/3 mt-4 rounded-lg"
              />
            </div>
          </div>
        </Card>
      </a>
    </div>
  );
}
