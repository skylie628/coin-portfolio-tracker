import {
  Stack,
  Text,
  Grid,
  GridItem,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  HStack,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { setFilterThunk } from "../store/action/action.variable";
//component
import VariablesList from "./VariablesList";
import Select from "./ui/Select";
//usehook
import { useMemo, useCallback } from "react";
export default function QueryCenter() {
  const dispatch = useDispatch();
  const { fetchedVariables } = useSelector((state) => state.variable);
  const types = useMemo(() => {
    return [...new Set(fetchedVariables.map((x) => x.type))];
  }, [fetchedVariables]);

  const handleTypeChange = useCallback((e) => {
    const type = e.target.value;
    dispatch(setFilterThunk({ type: "type", value: type }));
  }, []);
  const handleOnSearchChange = (e) => {
    const keyword = e.target.value;
    dispatch(setFilterThunk({ type: "keyword", value: keyword }));
  };
  return (
    <Stack p="8" gap="5" className="bg-slate-900  w-1/4 ">
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
        <Select handleOnChange={handleTypeChange} options={types} />
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
        <VariablesList />
      </VStack>
    </Stack>
  );
}
