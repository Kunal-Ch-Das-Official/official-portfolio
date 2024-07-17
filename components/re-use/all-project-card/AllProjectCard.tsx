"use client";
import Image from "next/image";
import React from "react";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../user-interface/all-projects-card-ui/AllProjectCardUi";
import alternativeImage from "@/public/icons/error-page-icon.png";
import { FaSquareGithub } from "react-icons/fa6";
import Link from "next/link";
export function AllProjectCard({
  projectsId,
  projectName,
  projectLogo,
  projectOwner,
  previewLink,
  projectImage,
  githubRepo,
}: {
  projectsId?: string,
  projectLogo?:string,
  projectName?: string,
  projectOwner?: string,
  previewLink?: string,
  projectImage?: string,
  githubRepo?: string
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[23rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-orange-600 dark:text-white inline-flex items-center"
        >
          <Image src={projectLogo || alternativeImage} height={50} width={50} alt={projectName || "Project Logo"} className="rounded-full"/>
          <span className="ml-2 text-orange-500">{projectName}</span>
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
         <span className="font-bold text-orange-500 mr-2">Own-By:</span>{projectOwner}
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src={projectImage || alternativeImage}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={projectName || "thumbnail"}
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <a href={`https://${previewLink}`} target={"_blank"}>
            <CardItem
              translateZ={20}
              translateX={-40}
              as="button"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Preview →
            </CardItem>
          </a>
          <div className="tooltip">
            <a href={`https://${githubRepo}`} target={"_blank"}>
              <FaSquareGithub className="text-4xl text-white rounded-lg" />
            </a>
            <span className="tooltiptext mb-2">Github Repo...</span>
          </div>

          <Link href={`/projects/${projectsId}`}>
            <CardItem
              translateZ={20}
              translateX={40}
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Overview →
            </CardItem>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
  );
}
