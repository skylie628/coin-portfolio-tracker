import { Flex } from "@chakra-ui/react";
import clsx from "clsx";
export default function Tab({
  onClick,
  isActive = false,
  tabName = "New Tab",
}) {
  return (
    <Flex
      onClick={onClick}
      className={clsx(
        isActive ? " border-b border-b-2 border-b-orange !text-lightstar" : "",
        "shrink-0  p-4  border-slate-400  cursor-pointer text-slate-300 font-medium"
      )}
    >
      {tabName}
    </Flex>
  );
}
