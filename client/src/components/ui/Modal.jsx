import React from "react";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
// component
import {
  HStack,
  Select,
  Modal as ChakraModal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  Button,
} from "@chakra-ui/react";
export default function Modal({
  isOpen,
  setIsOpen = () => {},
  title,
  cta,
  children,
}) {
  const dispatch = useDispatch();
  const selectRef = useRef();
  const Overlay = () => (
    <ModalOverlay
      bg="blackAlpha.500"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const onSubmit = () => {
    setIsOpen(false);
  };
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
