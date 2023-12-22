import React from "react";
import { Select as CharkraSelect } from "@chakra-ui/react";
import clsx from "clsx";
const Select = React.memo(function Select({
  handleOnChange,
  options,
  className,
}) {
  return (
    <CharkraSelect
      className={clsx(
        "!border-lightstar/[0.2]  !text-[#aaa] bg-blacker ",
        className
      )}
      size="md"
      borderRadius="5"
      onChange={handleOnChange}
    >
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
