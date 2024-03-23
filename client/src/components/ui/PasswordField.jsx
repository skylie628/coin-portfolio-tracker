import React from "react";
import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
  FormErrorMessage,
} from "@chakra-ui/react";
import { HiEye, HiEyeOff } from "react-icons/hi";
/* eslint-disable-next-line padded-blocks */
export const PasswordField = React.forwardRef(
  ({ name = "password", label, ...props }, ref) => {
    const { isOpen, onToggle } = useDisclosure();
    const onClickReveal = () => {
      onToggle();
    };

    return (
      <FormControl isInvalid={props.errors.password}>
        {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
        <InputGroup>
          <InputRightElement>
            <IconButton
              variant="text"
              aria-label={isOpen ? "Mask password" : "Reveal password"}
              icon={isOpen ? <HiEyeOff /> : <HiEye />}
              onClick={onClickReveal}
            />
          </InputRightElement>
          <Input
            ref={ref}
            borderWidth="1px"
            className="text-lightstar"
            borderColor="rgba(255,255,255,0.3)"
            _hover={{
              borderColor: "blue.500",
            }}
            {...props}
            name={name}
            type={isOpen ? "text" : "password"}
            autoComplete="current-password"
            required
          />
        </InputGroup>
        <FormErrorMessage color="red.700">
          {props.errors.password && props.errors.password.message}
        </FormErrorMessage>
      </FormControl>
    );
  }
);
PasswordField.displayName = "PasswordField";
