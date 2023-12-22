import {
  Stack,
  Text,
  Flex,
  Button,
  Input,
  HStack,
  VStack,
  Divider,
} from "@chakra-ui/react";
import Select from "@/components/ui/Select";
import SelectedVariableList from "./SelectedVariableList";
import { setChartValuesThunk } from "@/store/action/action.chart";
import { useSelector, useDispatch } from "react-redux";
import { resetTabThunk } from "@/store/action/action.tab";
import { ChevronLeft, ChevronRightCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
const showHideVariants = {
  hidden: {
    width: "57px",
    transition: { ease: "easeOut" },
  },
  visible: {
    width: "25%",
    transition: { ease: "easeOut" },
  },
};
export default function ControlCenter({ setIsModalOpen }) {
  const dispatch = useDispatch();
  const [isShow, setIsShow] = useState(true);
  const chartType = useSelector((state) => state.chart.chartType);
  const handleDrawChart = () => {
    dispatch(setChartValuesThunk());
  };
  const handleReset = () => {
    dispatch(resetTabThunk());
  };
  return (
    <AnimatePresence>
      <motion.div
        variants={showHideVariants}
        animate={isShow ? "visible" : "hidden"}
        exit={{ width: "25%" }}
        className="flex flex-col gap-5 bg-slate-900 relative text-lightstar/[0.8]"
        gap="5"
      >
        {!isShow && (
          <div className="p-4">
            {" "}
            <ChevronRightCircle
              className="cursor-pointer"
              color="orange "
              onClick={() => setIsShow(true)}
            />
          </div>
        )}
        {isShow && (
          <Flex
            alignItems="center"
            className="relative border-b border-b-1 border-b-slate-700 p-4 justify-between"
          >
            <Text className="w-full text-lightstar/[0.8] text-left">
              Statistic your port.
            </Text>
            <ChevronLeft
              className="cursor-pointer block"
              onClick={() => setIsShow((prev) => !prev)}
            />
          </Flex>
        )}
        {isShow && (
          <Stack gap="5" className="p-8 ">
            {chartType == "pie" ? (
              <></>
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
                <Select options={["day", "month", "week"]} />
              </>
            )}
            {/*<HStack gap="3">
              <Button onClick={() => setIsModalOpen(true)}>Switch</Button>
              <Button onClick={() => setIsModalOpen(true)}>Print</Button>
            </HStack>*/}
            <HStack gap="3">
              <Button
                className="!bg-orange !font-semibold"
                onClick={handleDrawChart}
              >
                Apply
              </Button>
              <Button
                className="!bg-blackest border !border-lightstar/[0.3] !text-lightstar/[0.8]"
                onClick={handleReset}
              >
                Reset
              </Button>
            </HStack>

            <Divider className="!border-slate-600" />
            <VStack gap="3">
              <Text className="text-left w-full">
                Selected Variables / Sections
              </Text>
              <SelectedVariableList />
            </VStack>
          </Stack>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
