import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import clsx from "clsx";
const animations = {
  initial: { transform: "translateY(100%)" },
  animate: { transform: "translateY(0)" },
  exit: { transform: "translateY(0)" },
};

const BottomDrawer = ({ className, children, isOpen = true, setIsOpen }) => {
  const navigate = useNavigate();
  useLayoutEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  });
  return (
    <React.Fragment>
      {isOpen && (
        <div className="fixed w-full h-full z-40">
          <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
            className={clsx(
              "w-full h-full absolute  z-50 bg-blackest rounded-2xl z-full top-10 !rounded-xl border border-white/[0.5] border-dashed   ",
              className
            )}
          >
            {children}
          </motion.div>
          <div
            onClick={() => (setIsOpen ? setIsOpen(false) : navigate(-1))}
            className="w-full h-full fixed bg-black z-40 opacity-50"
          />
        </div>
      )}
    </React.Fragment>
  );
};
export default BottomDrawer;
