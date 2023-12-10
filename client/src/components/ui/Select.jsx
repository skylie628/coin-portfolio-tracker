import React from "react";
import { Select as CharkraSelect } from "@chakra-ui/react";
const Select = React.memo(function Select({ handleOnChange, options }) {
  return (
    <CharkraSelect size="md" borderRadius="5" onChange={handleOnChange}>
      <option
        className="!border-1 text-black !bg-silver hover:text-white"
        value="all"
      >
        Select Type
      </option>
      {options.map((x) => (
        <option
          key={x}
          className="!border-1 text-black !bg-silver hover:text-white"
          value={x}
        >
          {x}
        </option>
      ))}
    </CharkraSelect>
  );
});
export default Select;
