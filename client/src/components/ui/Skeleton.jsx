import React from "react";
import { Skeleton as ChakraSkeleton } from "@chakra-ui/react";
const defaultSkeletonProps = {
  height: "20px",
  startColor: "#040d36", // darker start color
  endColor: "#05185c", // darker end color
  borderRadius: "15px", // more rounded
};
export default function Skeleton(props) {
  return <ChakraSkeleton {...props} {...defaultSkeletonProps} />;
}
