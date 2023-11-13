import {
  Box,
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

import React from "react";
export default function QueryCenter() {
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
        <Select size="md" borderRadius="5">
          <option
            className="!border-1 text-black !bg-silver hover:text-white"
            value="pie"
          >
            Select Type
          </option>
          <option
            className="!border-1 text-black !bg-silver hover:text-white"
            value="pie"
          >
            Simple
          </option>
        </Select>
      </HStack>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input className="!bg-black" placeholder="Search" />
      </InputGroup>
      <Divider />
      <VStack gap="3">
        <Text className="text-left w-full">Selected Variables / Sections</Text>

        <Flex
          gap="3"
          as="label"
          p="2"
          className=" group hover:bg-silver hover:text-black w-full rounded-lg cursor-pointer "
        >
          <Checkbox
            className="group-hover:border-black"
            _checked={{
              "& .chakra-checkbox__control": {
                background: "orange",
                border: "orange",
                color: "black",
              },
            }}
          />

          <Text className="flex-1 text-left">Something</Text>
        </Flex>

        <Flex
          gap="3"
          as="label"
          p="2"
          className=" group hover:bg-silver hover:text-black w-full rounded-lg cursor-pointer "
        >
          <Checkbox
            className="group-hover:border-black"
            _checked={{
              "& .chakra-checkbox__control": {
                background: "orange",
                border: "orange",
                color: "black",
              },
            }}
          />

          <Text className="flex-1 text-left">Something</Text>
        </Flex>

        <Flex
          as="label"
          gap="3"
          p="2"
          className=" group hover:bg-silver hover:text-black w-full rounded-lg cursor-pointer "
        >
          <Checkbox
            className="group-hover:border-black"
            _checked={{
              "& .chakra-checkbox__control": {
                background: "orange",
                border: "orange",
                color: "black",
              },
            }}
          />

          <Text className="flex-1 text-left">Something</Text>
        </Flex>
      </VStack>
    </Stack>
  );
}
