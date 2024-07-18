import Image from "next/image";
import React from "react";
import notFoundImg from "@/public/images/error-notfound/page-not-found-illustration.webp";
import { TiHome } from "react-icons/ti";
import Link from "next/link";

const CustomNotFound: React.FC = () => {
  const texts: string[] = [
    "Welcome To My Portfolio",
    "I'm a Next.js Developer",
    "Using Tailwind CSS",
    "Enjoy Your Stay!",
  ];

  return (
    <section className="text-gray-100 body-font pt-16 mb-10 lg:mb-10">
      <div className="container mx-auto flex px-5 py-24 lg:flex-row md:flex-col flex-col justify-between items-center w-full">
        <div className=" text-center lg:text-left lg:w-1/2 md:w-1/2 w-5/6 mt-10">
          <h1 className=" sm:text-4xl text-3xl mb-4 font-bold text-white">
            <span className="text-orange-700 mb-2">404</span>
            <span className="text-orange-500 mb-2"> Page </span>
            <span className="text-orange-400 mb-2"> Not </span>
            <span className="text-orange-300 mb-2"> Found </span>
            <br className="hidden lg:inline-block" />
             
          </h1>
          <p className="flex flex-col lg:w-3/4 w-full">
          Requested Page Dose'nt Exist In My Portfolio Site, Some Useful Links Are Given Bellow.
          </p>

          <div className="flex justify-center lg:justify-normal mt-8">
            <Link
              href={"/"}
              className="relative 2xl:flex xl:flex lg:flex h-[50px] w-50 items-center justify-between inline-flex overflow-hidden bg-gradient-to-r from-red-400 to-orange-500 text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white font-semibold textColor hover:shadow-orange-600 hover:before:border-[25px] rounded-lg hover:text-orange-600"
            >
              <span className="relative z-0 ml-4">Take Me Home</span>
              <TiHome className="text-2xl font-bold mx-4 hover:text-orange-500 relative z-0" />
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2 md:w-1/2 w-5/6 flex justify-center lg:justify-end order-first lg:order-none mb-28 lg:mb-0">
          <Image
            className="object-cover object-center"
            alt="Kunal-Chandra-Das-Photo"
            height={430}
            width={430}
            src={notFoundImg}
          />
        </div>
      </div>
    </section>
  );
};

export default CustomNotFound;
