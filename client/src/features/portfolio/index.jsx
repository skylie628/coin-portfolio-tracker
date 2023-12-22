//components
import { Flex } from "@chakra-ui/react";
import PortSummary from "./components/PortSummary";
import PortCoins from "./components/PortCoins";
import { Outlet } from "react-router-dom";
import AddCoinModal from "./components/AddCoinModal";
//useHooks
import { useState } from "react";
import useScrollToTop from "@/hooks/useScrollToTop";
export default function Portfolio() {
  useScrollToTop();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <AddCoinModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <Flex className="flex-1 flex-col relative">
        <PortSummary setIsOpen={setIsOpen} />
        <PortCoins />
      </Flex>
      <Outlet />
    </>
  );
}
