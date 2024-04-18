import { Flex, Checkbox, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleVariableThunk } from "@/store/action/action.variable";

const Skeleton = () => (
  <div className="bg-halfblack w-full p-4 border border-lightstar/[0.2] max-h-[500px]  ">
    {new Array(5).fill(0).map((variable) => {
      return (
        <Flex
          key={variable.id}
          gap="3"
          as="label"
          p="2"
          className="bg-halfblack w-full "
        >
          <div className="flex-1 bg-metalgray w-full" />
        </Flex>
      );
    })}
  </div>
);
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
  if (isLoading) return <Skeleton />;
  if (variables.length == 0) {
    return <div className="text-dimgray">Portfolio is empty.</div>;
  }
  return (
    <ul className="max-h-[300px] w-full overflow-y-auto ">
      {variables.map((variable) => {
        return (
          <Flex
            key={variable.id}
            gap="3"
            as="label"
            p="2"
            className="group hover:bg-silver hover:text-black w-full rounded-lg cursor-pointer"
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
    </ul>
  );
}
