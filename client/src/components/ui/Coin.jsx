import { HStack, VStack, Text } from "@chakra-ui/react";
import Image from "./Image";
import clsx from "clsx";
export default function Coin({
  src = "#",
  name = "default",
  shortName = "default",
  className = "",
  shortNameClass = "",
  size,
}) {
  return (
    <HStack spacing={4}>
      <Image src={src} className="w-10 h-10  rounded-full" alt={name} />
      <VStack className="!block font-bold text-left">
        <Text className={clsx(className, " text-lightstar")}>{name}</Text>
        <Text className={clsx("text-sm text-dimgray", shortNameClass)}>
          {shortName}
        </Text>
      </VStack>
    </HStack>
  );
}
