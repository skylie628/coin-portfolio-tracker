import React from "react";
import clsx from "clsx";
export default function ThreeLoadingDots({ color = "black" }) {
  return (
    <div className="flex space-x-1 justify-center items-center h-screen ">
      <span className="sr-only">Loading...</span>
      <div
        className={clsx(
          "h-1 w-1 bg-black rounded-full animate-bounce [animation-delay:-0.3s]",
          color === "black" ? "bg-black" : "bg-white"
        )}
      ></div>
      <div
        className={clsx(
          "h-1 w-1 rounded-full animate-bounce [animation-delay:-0.15s]",
          color === "black" ? "bg-black" : "bg-white"
        )}
      ></div>
      <div
        className={clsx(
          "h-1 w-1  rounded-full animate-bounce",
          color === "black" ? "bg-black" : "bg-white"
        )}
      ></div>
    </div>
  );
}
