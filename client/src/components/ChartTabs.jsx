import { useRef } from "react";
import { Flex } from "@chakra-ui/react";
import Tab from "./ui/Tab";
import { addTabAction, switchTabAction } from "../store/action/action.tab";
import { useDispatch, useSelector } from "react-redux";
export default function ChartTabs() {
  const { tabs, activeTab } = useSelector((state) => state.tab);
  const dispatch = useDispatch();
  const handleAddTab = () => {
    dispatch(addTabAction());
  };
  const handleSwitchTab = (tabId) => {
    console.log(tabId);
    dispatch(switchTabAction({ tabId }));
  };
  return (
    <Flex className="flex bg-slate-900 flex-nowrap w-full overflow-y-scroll">
      {Object.values(tabs).map((tab) => (
        <Tab
          key={tab.id}
          tabName={tab.name}
          isActive={tab.id == activeTab}
          onClick={() => handleSwitchTab(tab.id)}
        />
      ))}

      <Flex
        className="bg-orange p-3 border border-slate-400  text-black rounded-md border-dashed w-15 cursor-pointer"
        onClick={handleAddTab}
      >
        +
      </Flex>
    </Flex>
  );
}
