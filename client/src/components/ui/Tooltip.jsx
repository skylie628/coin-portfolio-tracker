import { Tooltip as ChakraTooltip } from "@chakra-ui/react";
export default function Tooltip({ children, label }) {
  return (
    <ChakraTooltip
      label={label || "coinPort xin chao"}
      className="!bg-black !rounded-lg border border-1 !border-lightstar/[0.2] absolute !right-0 "
    >
      {children}
    </ChakraTooltip>
  );
}
