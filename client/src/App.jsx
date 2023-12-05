// component
import SelectModal from "./components/SelectModal";
import { Flex, Stack, Divider } from "@chakra-ui/react";
import Header from "./components/Header";
import ControlCenter from "./components/ControlCenter";
import ChartPanel from "./components/ChartPanel";
import QueryCenter from "./components/QueryCenter";
import "./App.css";
function App() {
  return (
    <Stack className="text-lightstar bg-blackest h-screen w-screen" spacing={0}>
      <Header />
      <Divider colorScheme="gray" size="1" variant="dashed" />
      <Flex className="h-full">
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
    </Stack>
  );
}

export default App;
