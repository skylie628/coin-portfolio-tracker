import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
const animations = {
  initial: { transform: "translateY(100%)" },
  animate: { transform: "translateY(0)" },
  exit: { transform: "translateY(0)" },
};

const BottomDrawer = ({ children }) => {
  const navigate = useNavigate();
  useLayoutEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  });
  return (
    <div className="fixed w-full h-full z-40">
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
        className="w-full h-full absolute bg-white z-50 rounded-2xl z-full top-10  "
      >
        {children}
      </motion.div>
      <div
        onClick={() => navigate(-1)}
        className="w-full h-full fixed bg-black z-40 opacity-50"
      />
    </div>
  );
};
export default BottomDrawer;
