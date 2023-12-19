import {
  Tab,
  TabList,
  TabIndicator,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Modal from "../../components/ui/Modal";
import TransactionForm from "../../components/TransactionForm";
export default function TransactionModal({ isOpen, setIsOpen }) {
  return (
    <Modal title="Add transaction" isOpen={isOpen} setIsOpen={setIsOpen}>
      <Tabs position="relative" variant="unstyled">
        <TabList className="flex">
          <Tab className="flex-1"> Buy</Tab>
          <Tab className="flex-1">Sell</Tab>
          <Tab className="flex-1"> Transfer</Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="blue.500"
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel className="!p-0">
            <TransactionForm type="buy" setIsOpen={setIsOpen} />
          </TabPanel>
          <TabPanel className="!p-0">
            <TransactionForm type="sell" setIsOpen={setIsOpen} />
          </TabPanel>
          <TabPanel className="!p-0">
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Modal>
  );
}
