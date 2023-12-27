import { Box, Flex, Checkbox, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
export default function SelectedVariableList() {
  const selectedVariables =
    useSelector((state) => state.variable.selectedVariables) || {};
  return Object.values(selectedVariables).map((variable) => (
    <AnimatePresence key={selectedVariables.id}>
      <motion.div
        ease="easeOut"
        initial={{ opacity: 0, transform: "translateX(-50px)" }}
        animate={{ opacity: 1, transform: "translateX(0)" }}
        exit={{ opacity: 0, transform: "translateX(-50px)" }}
        key={variable.id}
        className="w-full"
      >
        <Box
          sx={{
            background: `repeating-linear-gradient(
      45deg,
      #000,
      #000 10px,
      ${variable.color} 10px,
      ${variable.color} 20px
    )`,
          }}
          className="w-full rounded-lg "
        >
          <Flex gap="3" p="2" className="bg-black w-10/12 ">
            <Checkbox />
            <Text className="flex-1 text-left">{variable.full_name}</Text>
          </Flex>
        </Box>
      </motion.div>
    </AnimatePresence>
  ));
}
