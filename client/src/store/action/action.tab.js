import { addTab, switchTab, resetTab } from "../reducer/reducer.tab";
import { resetVariable } from "../reducer/reducer.variable";
import { resetChartValues, setChartValues } from "../reducer/reducer.chart";
import { switchSelectedVariables } from "../reducer/reducer.variable";
import { v4 as uuidv4 } from "uuid";
export const switchTabThunk =
  ({ tabId }) =>
  (dispatch, getState) => {
    const { tabs, activeTab } = getState().tab;
    if (activeTab == tabId) {
      return;
    }
    const newTabs = JSON.parse(JSON.stringify(tabs));
    const { chartValues: currentChartValues = [] } = getState().chart || {};
    const { selectedVariables: currentSelectedVariables = {} } =
      getState().variable;
    //save current tab status (including selected variables and chart values)
    const currentTab = newTabs[activeTab];
    if (!currentTab) return;
    currentTab.chartValues = currentChartValues;
    currentTab.selectedVariables = currentSelectedVariables;
    //get switched tab status
    const switchedTab = newTabs[tabId];
    if (!switchedTab) return;
    const { chartValues, selectedVariables } = switchedTab;
    //switch new chart values
    dispatch(
      setChartValues({ chartValues: JSON.parse(JSON.stringify(chartValues)) })
    );
    //switch new selected variables
    dispatch(
      switchSelectedVariables({
        selectedVariables: JSON.parse(JSON.stringify(selectedVariables)),
      })
    );
    // switch current tab to switched tab
    console.log("switch", tabId);
    dispatch(switchTab({ activeTab: tabId, tabs: newTabs }));
  };
export const addTabThunk = () => (dispatch, getState) => {
  const { tabs, activeTab } = getState().tab;
  const { chartValues } = getState().chart;
  const { selectedVariables } = getState().variable;
  const newTabId = uuidv4();
  const newTabs = JSON.parse(JSON.stringify(tabs));
  //save current status to active tab:
  const currentTab = newTabs[activeTab];
  if (!currentTab) return;
  currentTab.chartValues = chartValues;
  currentTab.selectedVariables = selectedVariables;
  // create new tab:
  newTabs[newTabId] = {
    id: newTabId,
    name: "New tab",
    chartValues: [],
    selectedVariables: {},
  };
  //reset selected variable
  dispatch(resetVariable());
  //reset chart
  dispatch(resetChartValues());
  dispatch(
    addTab({
      tabs: newTabs,
      activeTab: newTabId,
    })
  );
};

export const resetTabThunk = () => (dispatch, getState) => {
  const { tabs, activeTab } = getState().tab;
  const newTabs = JSON.parse(JSON.stringify(tabs));
  if (tabs && activeTab) {
    const currentTab = newTabs[activeTab];
    currentTab.chartValues = [];
  }
  dispatch(resetChartValues());
  dispatch(resetVariable());
  dispatch(resetTab({ activeTab, tabs: newTabs }));
};
