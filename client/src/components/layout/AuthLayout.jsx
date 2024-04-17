import { Container, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
export default function AuthLayout() {
  return (
    <Flex className="bg-sign-pattern justify-center  items-center text-dimgray w-full h-screen bg-[#19241C]  bg-contain  overflow-hidden">
      <Container
        className="bg-blackest   rounded-2xl  "
        py={{ base: "6", md: "12" }}
        px={{ base: "0", sm: "4" }}
      >
        <Outlet />
      </Container>
    </Flex>
  );
}
