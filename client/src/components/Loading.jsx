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
            "p-20 flex flex-col justify-center items-center w-full ",
            bgClassName
          )}
        >
          <LoaderSpinner />
        </div>
      ) : (
        <div
          className={clsx(
            "bg-stone-900 dark:bg-slate-200 h-full flex flex-1  flex-col justify-center items-center w-full ",
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
