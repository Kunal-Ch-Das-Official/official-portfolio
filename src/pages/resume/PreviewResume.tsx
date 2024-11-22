import React, { useEffect, useState } from "react";
import axios from "../../../axios/axios";
import envConfig from "../../../conf/envConfig";
import PageLoader from "../../utils/page-loader/PageLoader";

interface resumeResInterface {
  resumeUrl: string;
  updatedAt: Date;
}
const PreviewResume: React.FC = () => {
  const [resume, setResume] = useState<resumeResInterface[]>([]);
  const [pending, setPending] = useState<boolean>();
  useEffect(() => {
    setPending(true);

    const fetchResume = async () => {
      try {
        const response = await axios.get(envConfig.resumeUrl);
        if (response) {
          setResume(response.data);
        }
      } catch (error: any) {
        console.log(error);
        throw new Error(
          `Something went wrong, unable to fetch resume due to: ${error.message}`
        );
      } finally {
        setPending(false);
      }
    };
    fetchResume();
  }, []);
  return (
    <main className="pt-40  mx-auto w-full md:max-w-full lg:max-w-5xl xl:max-w-[78rem] 2xl:max-w-12xl px-4 pb-40">
      {pending === true ? (
        <PageLoader />
      ) : (
        <>
          <section className="flex justify-center items-center">
            <img
              src={resume[0]?.resumeUrl}
              alt="Resume"
              className="w-full h-full rounded-xl"
            />
          </section>
          <div className="flex justify-end font-bold">
            Last update: {new Date(resume[0]?.updatedAt).toDateString()}
          </div>
        </>
      )}
    </main>
  );
};

export default PreviewResume;
