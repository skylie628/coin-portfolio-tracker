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
import VariablesList from "./VariablesList";
import Select from "@/components/ui/Select";
import { ChevronRight, ChevronLeftCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
//usehook
import { useMemo, useCallback, useState } from "react";
const showHideVariants = {
  hidden: {
    width: "57px",
    transition: { ease: "easeOut" },
  },
  visible: {
    width: "25%",
    transition: { ease: "easeOut" },
  },
};
export default function QueryCenter() {
  const [isShow, setIsShow] = useState(true);
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
    <AnimatePresence>
      <motion.div
        variants={showHideVariants}
        animate={isShow ? "visible" : "hidden"}
        exit={{ width: "25%" }}
        className="flex flex-col gap-5 bg-slate-900 relative text-lightstar/[0.8]"
        gap="5"
      >
        {!isShow && (
          <div className="p-4">
            {" "}
            <ChevronLeftCircle
              className="cursor-pointer"
              color="orange "
              onClick={() => setIsShow(true)}
            />
          </div>
        )}
        {isShow && (
          <Flex
            alignItems="center"
            className="relative border-b border-b-1 border-b-slate-700 py-4 px-6 justify-between w-full"
          >
            <ChevronRight
              className="cursor-pointer block"
              onClick={() => setIsShow((prev) => !prev)}
            />
            <Text className="w-full text-lightstar/[0.8] text-right">
              Statistic your port.
            </Text>
          </Flex>
        )}
        {isShow && (
          <Stack p="8" gap="5" className="bg-slate-900  w-full ">
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
        )}
      </motion.div>
    </AnimatePresence>
  );
}
