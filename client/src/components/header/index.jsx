// Components
import { Flex, HStack } from "@chakra-ui/react";
import Button from "../ui/Button";
import Nav from "./Nav";
import BrandName from "../ui/BrandName";
import Divider from "../ui/Divider";
import HamburgerIcon from "@/components/ui/HamburgerIcon";
import MobileHeader from "./MobileHeader";

// Thunks
import { signoutThunk } from "../../store/action/action.user";

// Hooks
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useMediaQueries } from "@/hooks/useMediaQueries";
export default function Header() {
  const { isLogged } = useSelector((state) => state.user);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const { isMd } = useMediaQueries();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isMd) {
      setIsHamburgerOpen(false);
    }
  }, [isMd]);
  const handleSignout = () => {
    dispatch(signoutThunk());
  };
  const handleSignin = () => {
    navigate("/sign-in");
  };
  return (
    <>
      <div className="flex flex-col sticky top-0  bg-blackest z-[21]">
        <Flex
          className="sticky container mx-auto z-[25]"
          justify="space-between"
          alignItems="center"
          p="4"
          w="100%"
        >
          <BrandName size="md" />
          <Nav />{" "}
          <HStack className="!hidden md:!block">
            {isLogged && <Button onClick={handleSignout}>SIGNOUT</Button>}
            {!isLogged && <Button onClick={handleSignin}>SIGNIN</Button>}
          </HStack>
          <HamburgerIcon
            isOpen={isHamburgerOpen}
            setIsOpen={setIsHamburgerOpen}
            className="md:hidden"
          />
        </Flex>
        <Divider />
        <MobileHeader isOpen={isHamburgerOpen} setIsOpen={setIsHamburgerOpen} />
      </div>
    </>
  );
}
