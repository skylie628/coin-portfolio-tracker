// component
import {
  HStack,
  Select,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  Button,
} from "@chakra-ui/react";
//useHooks
import { useRef } from "react";
import { useDispatch } from "react-redux";
//thunks
import { setChartTypeThunk } from "@/store/action/action.chart";
export default function SelectModal({ isOpen, setIsOpen }) {
  const dispatch = useDispatch();
  const selectRef = useRef();
  const Overlay = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const onSubmit = () => {
    dispatch(setChartTypeThunk({ data: selectRef.current.value }));
    setIsOpen(false);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <Modal
      colorScheme="gray"
      isCentered
      size="md"
      isOpen={isOpen}
      onClose={onClose}
    >
      {<Overlay />}
      <ModalContent>
        <ModalHeader>Please choose chart</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <HStack spacing="3">
            <Text>Type</Text>
            <Select size="sm" ref={selectRef}>
              <option value="pie">Pie</option>
              <option value="line">Line</option>
            </Select>
          </HStack>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onSubmit}>Submit</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
