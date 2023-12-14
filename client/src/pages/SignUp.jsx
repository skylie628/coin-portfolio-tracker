import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { OAuthButtonGroup } from "../components/ui/OAuthButtonGroup";
import { PasswordField } from "../components/ui/PasswordField";
//use hook
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
//other
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signupThunk } from "../store/action/action.user";
//react hook
const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const scheme = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required().email("Email invalid"),
    password: yup
      .string()
      .min(6, "Password length can't be less than 6 characters")
      .max(50, "Password length can't be more than 50 characters")
      .required(),
    confirmPassword: yup
      .string()
      .min(6, "Password length can't be less than 6 characters")
      .max(50, "Password length can't be more than 50 characters")
      .required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors = {} },
  } = useForm({ resolver: yupResolver(scheme) });
  const onSubmitSignup = (data) => {
    dispatch(signupThunk({ data: { data }, navigate }));
  };
  return (
    <form onSubmit={handleSubmit(onSubmitSignup)}>
      <Stack spacing="4">
        <Stack spacing="4">
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={{ base: "xs", md: "sm" }}>
              join us & "coi"
              <br />
              <Text color="orange.500">Portfolio</Text>
            </Heading>
            <Text color="fg.muted">
              Have an account?{" "}
              <Link onClick={() => navigate("/sign-in")}> Sign in</Link>
            </Text>
          </Stack>
        </Stack>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={{ base: "transparent", sm: "bg.surface" }}
          boxShadow={{ base: "none", sm: "md" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl isInvalid={errors.name}>
                {" "}
                <Input
                  placeholder="name"
                  {...register("name")}
                  id="name"
                  type="text"
                />
                <FormErrorMessage color="red.700">
                  {errors.name && errors.name.message.toString()}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.email}>
                <Input
                  placeholder="email"
                  {...register("email")}
                  id="email"
                  type="text"
                />
                <FormErrorMessage color="red.700">
                  {errors.email && errors.email.message.toString()}
                </FormErrorMessage>
              </FormControl>
              <PasswordField
                placeholder="password"
                {...register("password")}
                errors={errors}
              />
              <PasswordField
                placeholder="confirm password"
                {...register("confirmPassword")}
                name="confirmPassword"
                errors={errors}
              />
            </Stack>
            <HStack justify="space-between"></HStack>
            <Stack spacing="6">
              <Button type="submit">Sign Up</Button>
              <HStack>
                <Divider />
                <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </form>
  );
};
export default Signup;
