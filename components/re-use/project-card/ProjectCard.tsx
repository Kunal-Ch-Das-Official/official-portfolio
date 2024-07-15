"use client";
import React from "react";
import { Card } from "@/components/user-interface/cards-ui/CardsUi";
import Image from "next/image";
import alternativeImage from "@/public/next.svg";

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
      <a href={`https://${previewLink}`} target={"_blank"}>
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
              <h5 className="text-slate-500 ">{projectOwner}</h5>
            </div>
            <div className="flex flex-1 w-full h-1/2 rounded-lg mt-4 ">
              <Image
                src={projectImage || alternativeImage}
                alt={projectName || "Project Image"}
                width={400}
                height={400}
                className="h-2/3 mt-4"
              />
            </div>
          </div>
        </Card>
      </a>
    </div>
  );
}
