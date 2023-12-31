import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";
const MotionBox = motion(Box);

function HamburgerIcon({ isOpen, setIsOpen, className, ...props }) {
  const top = {
    open: { rotate: 45, translateY: 6 },
    closed: { rotate: 0, translateY: 0 },
  };
  const center = {
    open: { opacity: 0 },
    closed: { opacity: 1 },
  };
  const bottom = {
    open: { rotate: -45, translateY: -6 },
    closed: { rotate: 0, translateY: 0 },
  };

  return (
    <Box
      onClick={() => setIsOpen((prev) => !prev)}
      {...props}
      className={clsx(className, " cursor-pointer")}
    >
      <MotionBox
        w="24px"
        h="2px"
        bg="white"
        animate={isOpen ? "open" : "closed"}
        variants={top}
      />
      <MotionBox
        w="24px"
        h="2px"
        bg="white"
        mt="4px"
        animate={isOpen ? "open" : "closed"}
        variants={center}
      />
      <MotionBox
        w="24px"
        h="2px"
        bg="white"
        mt="4px"
        animate={isOpen ? "open" : "closed"}
        variants={bottom}
      />
    </Box>
  );
}

export default HamburgerIcon;
