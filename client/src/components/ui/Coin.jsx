import { HStack, VStack, Text } from "@chakra-ui/react";
export default function Coin({
  src = "#",
  name = "default",
  shortName = "default",
  size,
}) {
  return (
    <HStack>
      <img src={src} className="w-10" />
      <VStack className="!block font-bold text-left">
        <Text className="text-lightstar">{name}</Text>
        <Text className="text-sm text-dimgray">{shortName}</Text>
      </VStack>
    </HStack>
  );
}
