//components
import { Box, VStack, Button, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { menuItems } from "./Nav";
//react hooks
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//thunk
import { signoutThunk } from "@/store/action/action.user";

export default function MobileHeader({ isOpen, setIsOpen }) {
  const isLogged = useSelector((state) => state.user.isLogged);
  const dispatch = useDispatch();
  const handleSignout = async () => {
    dispatch(signoutThunk());
    setIsOpen(false);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    // Clean up function
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`md:hidden  absolute w-full h-full text-left font-bold bg-blackest h-screen  pt-[89px] ${
        isOpen ? "z-[15] block" : "hidden z-0 pointer-events-none"
      } text-left `}
    >
      <VStack
        className="h-full border-t border-t-1 text-xl border-t-lightstar/[0.5] overflow-y-auto custom-scrollbar"
        paddingBottom={isLogged ? "120px" : "169.14px"}
      >
        {menuItems.map((item, index) => (
          <Box
            key={index}
            className="text-left border-b boder-b-1 border-dashed w-full p-5 cursor-pointer hover:text-orange border-b-lightstar/[0.5]"
          >
            <Link
              className=" font-bold text-lg"
              to={item.path}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          </Box>
        ))}
      </VStack>
      (
      <Flex className="flex-col justify-center items-center fixed bottom-0 p-10 w-full text-xl gap-5 bg-blackest">
        {!isLogged && (
          <Box className="font-medium text-center">
            Existing Account?{" "}
            <Link className="font-bold text-orange" as="span" to="/sign-in">
              Signin
            </Link>
          </Box>
        )}
        <Button
          as={Link}
          to={!isLogged ? "/sign-up" : "/"}
          onClick={handleSignout}
          className="w-8/12 !bg-orange !text-black p-5 rounded-lg"
        >
          {!isLogged ? "Get Started" : "Signout"}
        </Button>
      </Flex>
      )
    </motion.div>
  );
}
