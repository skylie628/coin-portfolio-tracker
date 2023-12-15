import { Flex } from "@chakra-ui/react";
import PortSummary from "./PortSummary";
import PortCoins from "./PortCoins";
import { Outlet } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";
export default function Portfolio() {
  useScrollToTop();
  return (
    <>
      <Flex className="flex-1 relative">
        <PortSummary />
        <PortCoins />
      </Flex>
      <Outlet />
    </>
  );
}
