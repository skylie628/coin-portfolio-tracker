import {
  Stack,
  Text,
  Grid,
  GridItem,
  Button,
  Input,
  Select,
  HStack,
  VStack,
  Divider,
} from "@chakra-ui/react";
import SelectedVariableList from "./SelectedVariableList";
import { setChartValuesThunk } from "@/store/action/action.chart";
import { useSelector, useDispatch } from "react-redux";
import { resetTabThunk } from "@/store/action/action.tab";

export default function ControlCenter({ setIsModalOpen }) {
  const dispatch = useDispatch();
  const chartType = useSelector((state) => state.chart.chartType);
  const handleDrawChart = () => {
    dispatch(setChartValuesThunk());
  };
  const handleReset = () => {
    dispatch(resetTabThunk());
  };
  return (
    <Stack p="8" gap="5" className="bg-slate-900  w-1/4 ">
      <Grid
        templateColumns="1fr auto 1fr"
        alignItems="center"
        className="relative"
      >
        <GridItem></GridItem>
        <GridItem>
          <Text className="w-full">CONTROL CENTER</Text>
        </GridItem>
        <GridItem>
          <Button className="ml-auto !block"> X</Button>
        </GridItem>
      </Grid>
      <HStack gap="4">
        <Select size="md" borderRadius="5">
          <option
            className="!border-1 text-black !bg-silver hover:text-white"
            value="pie"
          >
            Select Type
          </option>
          <option
            className="!border-1 text-black !bg-silver hover:text-white"
            value="pie"
          >
            Simple
          </option>
        </Select>
      </HStack>
      {chartType == "pie" ? (
        <Input
          className="bg-blackest"
          bg={"halfblack"}
          placeholder="Select Date and Time"
          size="md"
          type="datetime-local"
        />
      ) : (
        <>
          <Input
            className="bg-blackest"
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
          <Select size="md" borderRadius="5">
            <option
              className="!border-1 text-black !bg-silver hover:text-white"
              value="pie"
            >
              Select Step
            </option>
            <option
              className="!border-1 text-black !bg-silver hover:text-white"
              value="pie"
            >
              Daily
            </option>

            <option
              className="!border-1 text-black !bg-silver hover:text-white"
              value="pie"
            >
              Weekly
            </option>

            <option
              className="!border-1 text-black !bg-silver hover:text-white"
              value="pie"
            >
              Monthly
            </option>
          </Select>
        </>
      )}
      <HStack gap="3">
        <Button className="!bg-orange" onClick={handleDrawChart}>
          Apply
        </Button>
        <Button onClick={handleReset}>Reset</Button>
        <Button onClick={() => setIsModalOpen(true)}>Change Chart</Button>
      </HStack>
      <Divider />
      <VStack gap="3">
        <Text className="text-left w-full">Selected Variables / Sections</Text>
        <SelectedVariableList />
      </VStack>
    </Stack>
  );
}
