import {
  Box,
  Stack,
  Text,
  Flex,
  Grid,
  GridItem,
  Button,
  Input,
  Select,
  HStack,
  VStack,
  Divider,
  Checkbox,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function ControlCenter() {
  const chartType = useSelector((state) => state.chart.chartType);
  return (
    <Stack p="8" gap="5" className="bg-slate-900  w-1/3 h-full">
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
        <Button className="!bg-orange">Apply</Button>
        <Button>Reset</Button>
      </HStack>
      <Divider />
      <VStack gap="3">
        <Text className="text-left w-full">Selected Variables / Sections</Text>

        <Box
          sx={{
            background: `repeating-linear-gradient(
            45deg,
            #000,
            #000 10px,
            #465298 10px,
            #465298 20px
          )`,
          }}
          className="w-full rounded-lg "
        >
          <Flex gap="3" p="2" className="bg-black w-2/3 ">
            <Checkbox />
            <Text className="flex-1 text-left">Something</Text>
          </Flex>
        </Box>

        <Box
          sx={{
            background: `repeating-linear-gradient(
            45deg,
            #000,
            #000 10px,
            #fc3503 10px,
            #fc3503 20px
          )`,
          }}
          className="w-full rounded-lg  "
        >
          <Flex gap="3" p="2" className="bg-black w-2/3 ">
            <Checkbox />
            <Text className="flex-1 text-left">Something</Text>
          </Flex>
        </Box>
      </VStack>
    </Stack>
  );
}
