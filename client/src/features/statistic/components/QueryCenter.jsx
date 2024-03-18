import {
  Stack,
  Text,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  HStack,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { setFilterThunk } from "@/store/action/action.variable";
//component
import SideDrawer from "@/components/ui/SideDrawer";
import VariablesList from "./VariablesList";
import Select from "@/components/ui/Select";
import { ChevronRight } from "lucide-react";
//usehook
import { useMemo, useCallback, useState } from "react";
export function QueryCenterItem() {
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
    <Stack p="8" gap="5" className=" w-full bg-blackest md:bg-slate-900  ">
      <HStack gap="4">
        <Select handleOnChange={handleTypeChange} options={types} />
      </HStack>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          className="border-1 !border-lightstar/[0.2]"
          placeholder="Search"
          onChange={handleOnSearchChange}
        />
      </InputGroup>
      <Divider className="border-1 !border-lightstar/[0.2]" />
      <VStack gap="3">
        <VariablesList />
      </VStack>
    </Stack>
  );
}
export default function QueryCenter() {
  const [isShow, setIsShow] = useState(true);

  return (
    <SideDrawer direction="left" isShow={isShow} setIsShow={setIsShow}>
      <Flex
        alignItems="center"
        className="relative border-b border-b-1 border-b-slate-700 py-4 px-6 justify-between w-full"
      >
        <ChevronRight
          className="cursor-pointer block"
          onClick={() => setIsShow((prev) => !prev)}
        />
        <Text className="w-full text-lightstar/[0.8] text-right">
          Pick your invest.
        </Text>
      </Flex>
      <QueryCenterItem />
    </SideDrawer>
  );
}
