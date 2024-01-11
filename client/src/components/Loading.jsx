import LoaderSpinner from "./ui/LoadingSpiner";
import { useMediaQueries } from "@/hooks/useMediaQueries";
import clsx from "clsx";
import React from "react";

const LoadingPage = ({ bgClassName = "" }) => {
  const { isMd } = useMediaQueries();
  return (
    <>
      {isMd ? (
        <div
          className={clsx(
            "bg-halfblack  min-h-screen flex flex-col justify-center items-center w-full ",
            bgClassName
          )}
        >
          <div>
            <LoaderSpinner />
          </div>
        </div>
      ) : (
        <div
          className={clsx(
            "bg-stone-900 dark:bg-slate-200 min-h-screen flex flex-col justify-start items-center w-full ",
            bgClassName
          )}
        >
          <div className="mt-20">
            <LoaderSpinner />
          </div>
        </div>
      )}
    </>
  );
};

export default LoadingPage;
