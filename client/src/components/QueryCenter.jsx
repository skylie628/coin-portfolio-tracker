import {
  Stack,
  Text,
  Flex,
  Grid,
  GridItem,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  HStack,
  VStack,
  Divider,
  Checkbox,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { setFilterVariabels } from "../store/action/action.variable";
import { useMemo, useState } from "react";
import { toggleVariable } from "../store/action/action.variable";
export default function QueryCenter() {
  const dispatch = useDispatch();
  const {
    queriedVariables: variables,
    fetchedVariables,
    selectedVariables,
    isLoading,
  } = useSelector((state) => {
    console.log("state la", state);
    return state.variable;
  });
  const types = useMemo(() => {
    return [...new Set(fetchedVariables.map((x) => x.type))];
  }, [fetchedVariables]);

  const handleTypeChange = (e) => {
    const type = e.target.value;
    dispatch(setFilterVariabels({ type: "type", value: type }));
  };
  const handleOnSearchChange = (e) => {
    const keyword = e.target.value;
    dispatch(setFilterVariabels({ type: "keyword", value: keyword }));
  };
  const handleToggleVariable = (id) => {
    dispatch(toggleVariable({ id }));
  };
  return (
    <Stack p="8" gap="5" className="bg-slate-900  w-1/3 h-full">
      <Grid
        templateColumns="1fr auto 1fr"
        alignItems="center"
        className="relative"
      >
        <GridItem>
          <Button className="mr-auto !block"> X</Button>
        </GridItem>
        <GridItem>
          <Text className="w-full">VARIABLES</Text>
        </GridItem>
        <GridItem></GridItem>
      </Grid>
      <HStack gap="4">
        <Select size="md" borderRadius="5" onChange={handleTypeChange}>
          <option
            className="!border-1 text-black !bg-silver hover:text-white"
            value="all"
          >
            Select Type
          </option>
          {isLoading && <div>Loading</div>}
          {!isLoading &&
            types.map((x) => (
              <option
                key={x}
                className="!border-1 text-black !bg-silver hover:text-white"
                value={x}
              >
                {x}
              </option>
            ))}
        </Select>
      </HStack>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          className="!bg-black"
          placeholder="Search"
          onChange={handleOnSearchChange}
        />
      </InputGroup>
      <Divider />
      <VStack gap="3">
        <Text className="text-left w-full">Selected Variables / Sections</Text>
        {variables.map((x) => {
          return (
            <Flex
              key={x._id}
              gap="3"
              as="label"
              p="2"
              className=" group hover:bg-silver hover:text-black w-full rounded-lg cursor-pointer "
            >
              <Checkbox
                defaultChecked={selectedVariables[x._id]}
                className="group-hover:border-black"
                onChange={() => handleToggleVariable(x._id)}
                _checked={{
                  "& .chakra-checkbox__control": {
                    background: "orange",
                    border: "orange",
                    color: "black",
                  },
                }}
              />

              <Text className="flex-1 text-left">{x.full_name}</Text>
            </Flex>
          );
        })}
      </VStack>
    </Stack>
  );
}
