import { Button as ChakraButton } from "@chakra-ui/react";
import clsx from "clsx";
export default function Button({ children, variant = "orange", ...props }) {
  return (
    <ChakraButton
      {...props}
      className={clsx(
        variant == "orange"
          ? "!bg-orange hover:!bg-carotene text-black"
          : "hover:!bg-slate-900 !bg-black !text-lightstar !border !border-1 !border-dimgray ",
        " !font-bold text-lg"
      )}
    >
      {children}
    </ChakraButton>
  );
}
