import React from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import { Suspense } from "react";
import LoaderSpinner from "../ui/LoadingSpiner";
import { CloseIcon } from "@chakra-ui/icons";
import clsx from "clsx";
const animations = {
  initial: { transform: "translateY(100%)", opacity: 0 },
  animate: { transform: "translateY(0)", opacity: 100 },
  exit: { transform: "translateY(0)", opacity: 0 },
};

const BottomDrawer = ({
  className,
  back,
  children,
  isOpen = true,
  setIsOpen,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const goBack = () => {
    if (location.key) {
      setIsOpen ? setIsOpen(false) : navigate(-1);
    }
  };
  useLayoutEffect(() => {
    document.body.classList.add("no-scroll");
    const scrollRestoration = history.scrollRestoration;
    console.log("scrollRestoration", scrollRestoration);
    // Clean up function
    return () => {
      document.body.classList.remove("no-scroll");
    };
  });
  const handleDragEnd = (event, info) => {
    if (info.offset.y > 0) {
      setIsOpen(false);
    }
  };

  return (
    <React.Fragment>
      {isOpen && (
        <div className="fixed w-full h-full z-40">
          <div
            className=" z-max w-[50px] h-[50px] rounded-lg cursor-pointer fixed bg-dimgray bottom-[50px] right-[30px] flex justify-center items-center hover:outline hover:outline-1 hover:outline-blue-300"
            onClick={goBack}
          >
            <CloseIcon color="#000" />
          </div>
          <motion.div
            drag="y"
            dragElastic={{ top: 0, bottom: 0.3 }}
            onDragEnd={handleDragEnd}
            dragConstraints={{ top: 0, bottom: 0 }}
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
            className={clsx(
              "w-full h-full  absolute  z-50 bg-blackest rounded-2xl z-full top-10 !rounded-xl border border-white/[0.5] border-dashed  scrolling-touch touch-auto modal",
              className
            )}
          >
            <div className="relative  w-full h-full">
              <Suspense
                fallback={
                  <div className=" flex w-full h-full items-center justify-center">
                    <LoaderSpinner />
                  </div>
                }
              >
                {children}
              </Suspense>
            </div>
          </motion.div>
          <div
            onClick={goBack}
            className="w-full h-full fixed bg-black z-40 opacity-50"
          />
        </div>
      )}
    </React.Fragment>
  );
};
export default BottomDrawer;
