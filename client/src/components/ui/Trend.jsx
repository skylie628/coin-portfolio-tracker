import { Flex, Text } from "@chakra-ui/react";
import { TriangleUpIcon, TriangleDownIcon } from "@chakra-ui/icons";
import clsx from "clsx";
export default function Trend({ value, className = "", ticket, ...props }) {
  const isIncrease = value >= 0;
  return (
    <Flex
      gap={2}
      className={clsx(className, " justify-center font-bold items-center")}
      {...props}
    >
      {isIncrease ? (
        <TriangleUpIcon color="#16C784" />
      ) : (
        <TriangleDownIcon color="#EA3943" />
      )}
      <Text color={isIncrease ? "#16C784" : "#EA3943"}>
        {Math.abs(value).toFixed(2)}% {ticket && `(${ticket})`}
      </Text>
    </Flex>
  );
}
