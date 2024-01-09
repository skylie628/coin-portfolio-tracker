import { Flex, Divider, useBreakpointValue } from "@chakra-ui/react";
export default function GridSystem({ children }) {
  const dividerCount = useBreakpointValue({ base: 2, md: 3, lg: 4, xl: 5 });
  return (
    <div className="relative w-full ">
      {" "}
      {children}
      <Flex
        className="z-21  absolute w-full  container inset-0 px-[50px]  pointer-events-none border-none border-[1px] border-white/[0.1] justify-between"
        style={{ left: "50%", transform: "translateX(-50%)" }}
        gap="50"
      >
        {Array(dividerCount)
          .fill(0)
          .map((_, i) => (
            <Divider key={i} className="bg-meshgrid" orientation="vertical" />
          ))}
      </Flex>
    </div>
  );
}
