"use client";
import React from "react";
import { Card } from "@/components/user-interface/cards-ui/CardsUi";
import Image from "next/image";
import alternativeImage from '@/public/next.svg';



export function ProjectCard(
    {
        projectName,
        projectDescription,
        previewLink,
        projectImage
      }: {
        projectName?: string;
        projectDescription?: string;
        previewLink?: string;
        projectImage?: string;
      }
) 


{
  return (
    <div className="h-[34rem] w-full flex items-center justify-center ">
      <a href={`https://${previewLink}`}
      target={"_blank"}>
      <Card
        title={projectName}
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[28rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {projectName}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              {projectDescription}
            </span>
          </div>
          <div className="flex flex-1 w-full  rounded-lg mt-4 " >
            <Image src={projectImage || alternativeImage} alt={projectName || "Project Image"} width={500} height={500}/>
          </div>
        </div>
      </Card>
      </a>
    </div>
  );
}
