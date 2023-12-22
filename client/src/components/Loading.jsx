import LoaderSpinner from "./ui/LoadingSpiner";
import { useMediaQueries } from "@/hooks/useMediaQueries";
import React from "react";

const LoadingPage = () => {
  const { isMd } = useMediaQueries();
  return (
    <>
      {isMd ? (
        <div className="bg-stone-900 dark:bg-slate-200 min-h-screen flex flex-col justify-center items-center w-full">
          <div>
            <LoaderSpinner />
          </div>
        </div>
      ) : (
        <div className="bg-stone-900 dark:bg-slate-200 min-h-screen flex flex-col justify-start items-center w-full ">
          <div className="mt-20">
            <LoaderSpinner />
          </div>
        </div>
      )}
    </>
  );
};

export default LoadingPage;
