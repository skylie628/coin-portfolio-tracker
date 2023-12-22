import { Flex } from "@chakra-ui/react";
import Tab from "@/components/ui/Tab";
import { Plus } from "lucide-react";
import { addTabThunk, switchTabThunk } from "@/store/action/action.tab";
import { useDispatch, useSelector } from "react-redux";
export default function ChartTabs() {
  const { tabs, activeTab } = useSelector((state) => state.tab);
  const dispatch = useDispatch();
  const handleAddTab = () => {
    dispatch(addTabThunk());
  };
  const handleSwitchTab = (tabId) => {
    dispatch(switchTabThunk({ tabId }));
  };
  return (
    <Flex className="relative w-full border-b border-b-1 border-b-slate-700">
      <Flex className="flex-1 flex bg-slate-900 flex-wrap w-full overflow-y-scroll">
        {Object.values(tabs).map((tab) => (
          <Tab
            key={tab.id}
            tabName={tab.name}
            isActive={tab.id == activeTab}
            onClick={() => handleSwitchTab(tab.id)}
          />
        ))}
      </Flex>
      <Flex
        className="flex-0 p-3  rounded-md bg-slate-900 w-15 cursor-pointer"
        onClick={handleAddTab}
      >
        <Plus color="gray" />
      </Flex>
    </Flex>
  );
}
