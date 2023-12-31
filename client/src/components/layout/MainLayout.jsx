import { Outlet } from "react-router-dom";
import Header from "../header";
import { Stack } from "@chakra-ui/react";
export default function MainLayout() {
  return (
    <Stack
      className="text-lightstar w-full  bg-blackest min-h-screen   m-auto  flex flex-col"
      spacing={0}
    >
      <Header />
      <Outlet />
    </Stack>
  );
}
