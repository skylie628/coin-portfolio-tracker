import { Box, VStack, Button, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { menuItems } from "./Nav";
export default function MobileHeader({ isOpen, setIsOpen }) {
  const isLogged = useSelector((state) => state.user.isLogged);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Clean up function
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`md:hidden block absolute w-full h-full text-left font-bold bg-blackest min-h-screen pt-[89px] ${
        isOpen ? "z-[15]" : "z-0 pointer-events-none"
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
            <Link className="font-bold text-orange" as="span" to="/signin">
              Signin
            </Link>
          </Box>
        )}
        <Button
          as={Link}
          to={!isLogged ? "/auth/signup" : "/auth/signout"}
          className="w-8/12 !bg-orange !text-black p-5 rounded-lg"
        >
          {!isLogged ? "Get Started" : "Signout"}
        </Button>
      </Flex>
      )
    </motion.div>
  );
}
