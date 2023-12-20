//components
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Overlay } from "@/components/ui/Modal";
//useHooks
import { useState } from "react";
export default function AddCoinModal() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Modal
      isCentered
      size="md"
      className="rounded-t-lg  bg-black w-[8/12]"
      isOpen={isOpen}
      onClose={() => setIsOpen(true)}
    >
      <Overlay />
      <ModalContent className="rounded-t-lg bg-[#DDDEE1]">
        <ModalHeader className="rounded-t-lg bg-noise-pattern bg-metalgray ">
          Add new coin
        </ModalHeader>
        <ModalCloseButton />
        {}
      </ModalContent>
    </Modal>
  );
}
