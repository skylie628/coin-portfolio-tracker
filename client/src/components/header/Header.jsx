import { Button, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import Nav from "./Nav";
import BrandName from "../ui/BrandName";
import { useSelector, useDispatch } from "react-redux";
import { signoutThunk } from "../../store/action/action.user";
import Divider from "../ui/Divider";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const { isLogged } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignout = () => {
    console.log("signout");
    console.log(isLogged);
    dispatch(signoutThunk());
  };
  const handleSignin = () => {
    navigate("/sign-in");
  };
  return (
    <div className="sticky top-0 bg-blackest z-20">
      <Flex
        className="sticky"
        justify="space-between"
        alignItems="center"
        p="4"
        w="100%"
      >
        <BrandName size="md" />
        <Nav />{" "}
        <HStack>
          {isLogged && <Button onClick={handleSignout}>Signout</Button>}
          {!isLogged && <Button onClick={handleSignin}>Signin</Button>}
        </HStack>
      </Flex>
      <Divider />
    </div>
  );
}
