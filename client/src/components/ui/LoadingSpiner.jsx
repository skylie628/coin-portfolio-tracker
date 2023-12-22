import React from "react";
import { Oval } from "react-loader-spinner";

const LoaderSpinner = ({ styles }) => {
  return (
    <Oval
      height={styles?.height}
      width={styles?.width}
      color={styles?.color ?? "#eab308"}
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor={styles?.colorSecondary ?? "#eab308"}
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};

export default LoaderSpinner;
