import { Button, Flex, Heading, HStack } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { signoutThunk } from "../store/action/action.user";
export default function Header() {
  const isLogged = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleSignout = () => {
    dispatch(signoutThunk());
  };
  return (
    <Flex justify="space-between" alignItems="center" p="4" w="100%">
      <Heading size="md" className="!font-roboto">
        React Chart Carbon Design
      </Heading>
      <HStack>
        <Button onClick={() => window.location.reload()}>Reset</Button>
        {isLogged && <Button onClick={handleSignout}>Signout</Button>}
      </HStack>
    </Flex>
  );
}
