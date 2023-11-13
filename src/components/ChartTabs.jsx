import { Flex } from "@chakra-ui/react";
export default function ChartTabs() {
  return (
    <Flex className="bg-slate-900 flex-wrap w-full">
      <Flex className="bg-slate-800 p-3 border-[0.5px] border-slate-400   rounded-md border-dashed w-15 cursor-pointer">
        New tabs
      </Flex>
      <Flex className="bg-slate-800 p-3 border border-slate-400 rounded-md border-dashed w-15 cursor-pointer">
        New tabs
      </Flex>
      <Flex className="bg-slate-800 p-3 border border-slate-400 rounded-md border-dashed w-15 cursor-pointer">
        New tabs
      </Flex>
      <Flex className="bg-slate-700 text-white p-3 border border-slate-400 rounded-md border-dashed w-15 cursor-pointer">
        New tabs
      </Flex>

      <Flex className="bg-orange p-3 border border-slate-400  text-black rounded-md border-dashed w-15 cursor-pointer">
        +
      </Flex>
    </Flex>
  );
}
