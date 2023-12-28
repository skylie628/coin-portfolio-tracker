import { Flex } from "@chakra-ui/react";
import Variants from "@/components/ui/Variants";

export default function TagSection({ title, variants }) {
  return (
    <Flex className="w-full justify-start items-start flex-col gap-3 font-bold">
      <h3 className="text-sm">{title}</h3>
      <Variants variants={variants} />
    </Flex>
  );
}
