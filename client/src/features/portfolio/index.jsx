//components
import { Flex } from "@chakra-ui/react";
import PortSummary from "./components/PortSummary";
import PortCoins from "./components/PortCoins";
import { Outlet } from "react-router-dom";
import useScrollToTop from "@/hooks/useScrollToTop";
import AddCoinModal from "./components/AddCoinModal";
export default function Portfolio() {
  useScrollToTop();
  return (
    <>
      <AddCoinModal />
      <Flex className="flex-1 flex-col relative">
        <PortSummary />
        <PortCoins />
      </Flex>
      <Outlet />
    </>
  );
}
