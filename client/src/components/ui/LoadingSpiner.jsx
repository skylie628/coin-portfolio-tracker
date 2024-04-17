import { Oval } from "react-loader-spinner";

const LoaderSpinner = ({ styles }) => {
  return (
    <Oval
      height={styles?.height || "50px"}
      width={styles?.width || "50px"}
      color={styles?.color ?? "#eab308"}
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor={styles?.colorSecondary ?? "#eab308"}
      strokeWidth={4}
      strokeWidthSecondary={4}
    />
  );
};

export default LoaderSpinner;
