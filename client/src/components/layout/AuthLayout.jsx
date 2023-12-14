import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
export default function AuthLayout() {
  return (
    <div className="bg-sign-pattern text-dimgray h-screen w-screen max-w-screen-2xl m-auto bg-contain relative overflow-hidden ">
      <Container
        className="bg-blackest absolute top-5 left-0 right-0 bottom-5  rounded-2xl  "
        py={{ base: "12", md: "24" }}
        px={{ base: "0", sm: "8" }}
      >
        <Outlet />
      </Container>
    </div>
  );
}
