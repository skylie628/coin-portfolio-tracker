import { Box, Flex, Checkbox, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
export default function SelectedVariableList() {
  const selectedVariables =
    useSelector((state) => state.variable.selectedVariables) || {};
  return Object.values(selectedVariables).map((variable) => (
    <Box
      key={variable.id}
      sx={{
        background: `repeating-linear-gradient(
      45deg,
      #000,
      #000 10px,
      ${variable.color} 10px,
      ${variable.color} 20px
    )`,
      }}
      className="w-full rounded-lg "
    >
      <Flex gap="3" p="2" className="bg-black w-2/3 ">
        <Checkbox />
        <Text className="flex-1 text-left">{variable.full_name}</Text>
      </Flex>
    </Box>
  ));
}
