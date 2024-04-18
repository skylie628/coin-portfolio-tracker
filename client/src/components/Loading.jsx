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
            "p-10 flex flex-col  items-center w-full  ",
            bgClassName
          )}
        >
          <LoaderSpinner />
        </div>
      ) : (
        <div
          className={clsx(
            "pt-10 bg-stone-900 dark:bg-slate-200 h-full flex flex-1  flex-col  w-full items-center",
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
