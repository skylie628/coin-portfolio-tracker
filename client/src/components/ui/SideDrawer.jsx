import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import { useState } from "react";

const showHideVariants = {
  hidden: {
    width: "57px",
    transition: { ease: "easeOut" },
  },
  visible: {
    width: "25%",
    transition: { ease: "easeOut" },
  },
};
export default function SideDrawer({ isShow, setIsShow, direction, children }) {
  const ChevronIcon =
    direction === "left" ? ChevronLeftCircle : ChevronRightCircle;

  return (
    <AnimatePresence>
      <motion.div
        variants={showHideVariants}
        animate={isShow ? "visible" : "hidden"}
        exit={{ width: "25%" }}
        className="!hidden md:!flex flex-col gap-5 bg-slate-900 relative text-lightstar/[0.8]"
        gap="5"
      >
        {!isShow && (
          <div className="p-4">
            <ChevronIcon
              className="cursor-pointer"
              color="orange "
              onClick={() => setIsShow(true)}
            />
          </div>
        )}
        {isShow && children}
      </motion.div>
    </AnimatePresence>
  );
}
