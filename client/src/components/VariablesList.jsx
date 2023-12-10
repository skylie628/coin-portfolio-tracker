import { Flex, Checkbox, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleVariableThunk } from "../store/action/action.variable";
export default function VariablesList() {
  const {
    queriedVariables: variables,
    selectedVariables,
    isLoading,
  } = useSelector((state) => {
    return state.variable;
  });
  const dispatch = useDispatch();
  const handleToggleVariable = (variable) => {
    dispatch(toggleVariableThunk({ variable }));
  };
  if (isLoading) return <div>Loading</div>;
  return (
    <>
      {variables.map((variable) => {
        return (
          <Flex
            key={variable.id}
            gap="3"
            as="label"
            p="2"
            className="group hover:bg-silver hover:text-black w-full rounded-lg cursor-pointer "
          >
            <Checkbox
              isChecked={selectedVariables[variable.id] ? true : false}
              className="group-hover:border-black"
              onChange={() => handleToggleVariable(variable)}
              _checked={{
                "& .chakra-checkbox__control": {
                  background: "orange",
                  border: "orange",
                  color: "black",
                },
              }}
            />

            <Text className="flex-1 text-left">{variable.full_name}</Text>
          </Flex>
        );
      })}
    </>
  );
}
