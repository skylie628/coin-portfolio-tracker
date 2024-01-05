// component
import {
  Modal as ChakraModal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
} from "@chakra-ui/react";
export const Overlay = () => (
  <ModalOverlay
    bg="blackAlpha.500"
    backdropFilter="blur(10px) hue-rotate(90deg)"
  />
);
export default function Modal({
  isOpen,
  setIsOpen = () => {},
  title,
  children,
}) {
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <ChakraModal
      isCentered
      size="md"
      className="rounded-t-lg "
      isOpen={isOpen}
      onClose={onClose}
    >
      <Overlay />
      <ModalContent className="rounded-t-lg bg-[#DDDEE1]">
        <ModalHeader className="rounded-t-lg bg-noise-pattern bg-metalgray ">
          {title}
        </ModalHeader>
        <ModalCloseButton />
        {children}
      </ModalContent>
    </ChakraModal>
  );
}
