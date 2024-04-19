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
            "flex flex-1  justify-center items-center flex-col   w-full  ",
            bgClassName
          )}
        >
          <LoaderSpinner />
        </div>
      ) : (
        <div
          className={clsx(
            "bg-stone-900 dark:bg-slate-200 h-full flex flex-1  flex-col  w-full justify-center items-center",
            bgClassName
          )}
        >
          <div>
            <LoaderSpinner />
          </div>
        </div>
      )}
    </>
  );
};

export default LoadingPage;
