import { Flex, Divider } from "@chakra-ui/react";
import SelectModal from "../components/SelectModal";
import ControlCenter from "../components/ControlCenter";
import ChartPanel from "../components/ChartPanel";
import QueryCenter from "../components/QueryCenter";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchVariablesThunk } from "../store/action/action.variable";
export default function Analytics() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVariablesThunk());
  }, []);
  return (
    <>
      <Flex className="flex-1">
        <ControlCenter />
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
      <SelectModal />
    </>
  );
}
