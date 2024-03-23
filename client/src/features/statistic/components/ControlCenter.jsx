import {
  Stack,
  Text,
  Flex,
  Input,
  HStack,
  VStack,
  Divider,
} from "@chakra-ui/react";
import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";
import SelectedVariableList from "./SelectedVariableList";
import { setChartValuesThunk } from "@/store/action/action.chart";
import { useSelector, useDispatch } from "react-redux";
import { resetTabThunk } from "@/store/action/action.tab";
import { ChevronLeft } from "lucide-react";
import SideDrawer from "@/components/ui/SideDrawer";
import { useState } from "react";
export const ControlCenterItems = ({ setIsOpen }) => {
  const dispatch = useDispatch();
  const chartType = useSelector((state) => state.chart.chartType);
  const handleDrawChart = () => {
    dispatch(setChartValuesThunk());
    setIsOpen(false);
  };

  const handleReset = () => {
    dispatch(resetTabThunk());
    setIsOpen(false);
  };
  return (
    <Stack gap="5" className="p-8 ">
      {chartType == "pie" ? (
        <></>
      ) : (
        <>
          <Input
            className="bg-blackest "
            bg={"halfblack"}
            placeholder="Select Date and Time"
            size="md"
            type="datetime-local"
          />
          <Input
            className="bg-blackest"
            bg={"halfblack"}
            placeholder="Select Date and Time"
            size="md"
            type="datetime-local"
          />
          <Select options={["day", "month", "week"]} />
        </>
      )}
      <HStack className="ml-auto md:ml-0" gap="3">
        <Button variant="black" onClick={handleReset}>
          RESET
        </Button>
        <Button className="!bg-orange !font-semibold" onClick={handleDrawChart}>
          APPLY
        </Button>
      </HStack>

      <Divider className="!border-slate-600" />
      <VStack gap="3">
        <Text className="text-left w-full">Picked assets</Text>
        <SelectedVariableList />
      </VStack>
    </Stack>
  );
};
export default function ControlCenter({ setIsModalOpen }) {
  const [isShow, setIsShow] = useState(true);

  return (
    <SideDrawer direction="right" isShow={isShow} setIsShow={setIsShow}>
      <Flex
        alignItems="center"
        className="relative border-b border-b-1 border-b-slate-700 p-4 justify-between"
      >
        <Text className="w-full text-lightstar/[0.8] text-left">
          Portfolio Visualizer.
        </Text>
        <ChevronLeft
          className="cursor-pointer block"
          onClick={() => setIsShow((prev) => !prev)}
        />
      </Flex>
      <ControlCenterItems />
    </SideDrawer>
  );
}
