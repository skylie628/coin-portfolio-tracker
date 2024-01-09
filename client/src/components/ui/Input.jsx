import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input as ChakraInput,
} from "@chakra-ui/react";
import { forwardRef } from "react";

const Input = forwardRef(
  ({ name, label, errors = null, placeholder, ...rest }, ref) => {
    console.log(name);
    return (
      <FormControl isInvalid={errors[name]}>
        {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
        <ChakraInput
          ref={ref}
          borderWidth="1px"
          onChange={(e) => {
            console.log(e.target.value);
          }}
          placeholder={placeholder}
          borderColor="rgba(255,255,255,0.3)"
          _hover={{
            borderColor: "blue.500",
          }}
          name={name}
          {...rest}
          id={name}
        />
        {errors[name] && (
          <FormErrorMessage>{errors[name].message}</FormErrorMessage>
        )}
      </FormControl>
    );
  }
);
Input.displayName = "Input";
export default Input;
