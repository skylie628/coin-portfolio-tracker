import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import BottomDrawer from "@/components/layout/BottomDrawer";
import { ControlCenterItems } from "./ControlCenter";
import { QueryCenterItem } from "./QueryCenter";
import clsx from "clsx";
export default function ControlQueryMobile({ isOpen, setIsOpen }) {
  const [isControlCenter, setIsControlCenter] = useState(false);

  const handleTakeActionClick = () => {
    setIsControlCenter((prev) => !prev);
  };
  const isLink = "text-orange cursor-pointer";
  return (
    <BottomDrawer isOpen={isOpen} setIsOpen={setIsOpen}>
      <Flex
        className={
          "justify-between p-5  border-b border-dashed border-b-white/[0.5]"
        }
      >
        <Text
          className={isControlCenter && isLink}
          onClick={handleTakeActionClick}
        >
          {isControlCenter ? "< Pick your Coins" : "Pick Your Coins."}
        </Text>
        <Text
          className={isLink}
          onClick={
            !isControlCenter ? handleTakeActionClick : () => setIsOpen(false)
          }
        >
          {isControlCenter ? "X Close" : "Take Action >"}
        </Text>
      </Flex>
      {isControlCenter ? (
        <ControlCenterItems setIsOpen={setIsOpen} />
      ) : (
        <QueryCenterItem />
      )}
    </BottomDrawer>
  );
}
