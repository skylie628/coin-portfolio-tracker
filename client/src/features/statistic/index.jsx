//components
import { Flex, Divider } from "@chakra-ui/react";
import SelectModal from "./components/SelectModal";
import ControlCenter from "./components/ControlCenter";
import ChartPanel from "./components/ChartPanel";
import QueryCenter from "./components/QueryCenter";
import { SlidersHorizontal } from "lucide-react";
import ControlQueryMobile from "./components/ControlQueryMobile";
//useHooks
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
//thunks
import { fetchVariablesThunk } from "@/store/action/action.variable";
export default function Statistic() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBottomDrawerOpen, setIsBottomDrawerOpen] = useState(false);
  const handleIconClick = () => {
    setIsBottomDrawerOpen(true);
  };

  useEffect(() => {
    dispatch(fetchVariablesThunk());
  }, []);
  return (
    <>
      <Flex className="flex-1 h-[calc(100% - 89px)] relative">
        <ControlCenter
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
        <Divider
          colorScheme="gray"
          borderLeftWidth="1px"
          orientation="vertical"
        />
        <ChartPanel />
        <Divider
          colorScheme="gray"
          borderLeftWidth="1px"
          orientation="vertical"
        />
        <QueryCenter />
      </Flex>
      <div className="block md:hidden fixed bottom-[50px] right-[30px] w-[50px] h-[50px] flex justify-center items-center rounded-lg bg-orange">
        <SlidersHorizontal
          className="cursor-pointer"
          color="black"
          strokeWidth={2}
          onClick={handleIconClick}
        />
      </div>
      <ControlQueryMobile
        isOpen={isBottomDrawerOpen}
        setIsOpen={setIsBottomDrawerOpen}
      />
      <SelectModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  );
}
