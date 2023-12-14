import { Flex, Text } from "@chakra-ui/react";
import { TriangleUpIcon, TriangleDownIcon } from "@chakra-ui/icons";
import clsx from "clsx";
export default function Trend({ value, className, ...props }) {
  const isIncrease = value >= 0;
  return (
    <Flex gap={2} className={clsx(className, " justify-center")} {...props}>
      {isIncrease ? (
        <TriangleUpIcon color="green.500" />
      ) : (
        <TriangleDownIcon color="red.500" />
      )}
      <Text color={isIncrease ? "green.500" : "red.500"}>
        {Math.abs(value)}
      </Text>
    </Flex>
  );
}
