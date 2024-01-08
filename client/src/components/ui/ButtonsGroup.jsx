import React from "react";
import { Tabs, TabList, Tab } from "@chakra-ui/react";

const ButtonsGroup = ({ handleOnChange, value, values, labels }) => {
  return (
    <div className="p-2 rounded-xl bg-halfblack">
      <Tabs index={values.indexOf(value)} variant="soft-rounded" size="sm">
        <TabList>
          {values.map((value, index) => (
            <Tab
              key={index}
              onClick={() => {
                handleOnChange(value);
              }}
              color="#aaa"
              borderRadius="8px"
              _selected={{
                borderRadius: "8px",
                borderColor: "#888",
                borderWidth: "1px",
              }}
            >
              {labels[index]}
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </div>
  );
};

export default ButtonsGroup;
