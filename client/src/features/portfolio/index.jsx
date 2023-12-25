import React from "react";
//components
import { Flex } from "@chakra-ui/react";
import PortSummary from "./components/PortSummary";
import PortCoins from "./components/PortCoins";
import { Outlet } from "react-router-dom";
import GridSystem from "@/components/grid/GridSystem";
const AddCoinModal = React.lazy(() => import("./components/AddCoinModal"));
import { Suspense } from "react";
//useHooks
import { useState } from "react";
import useScrollToTop from "@/hooks/useScrollToTop";
export default function Portfolio() {
  useScrollToTop();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Suspense fallback="loading">
        <AddCoinModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </Suspense>
      <PortSummary setIsOpen={setIsOpen} />
      <GridSystem>
        <PortCoins />
      </GridSystem>
      <Outlet />
    </>
  );
}
