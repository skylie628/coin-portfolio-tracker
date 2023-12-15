//component
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  Flex,
  HStack,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { PasswordField } from "../../components/ui/PasswordField";
//use hook
import { useForm } from "react-hook-form";
//other
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { signinThunk } from "../../store/action/action.user";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const scheme = yup.object().shape({
    email: yup.string().required().email("Email invalid"),
    password: yup
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
  const onSubmitSignin = (data) => {
    dispatch(signinThunk({ data }));
  };
  return (
    <form className="block" onSubmit={handleSubmit(onSubmitSignin)}>
      <Stack spacing="6">
        <Stack spacing="6">
          <Stack spacing={{ base: "3", md: "4" }} textAlign="center">
            <Flex className="flex-col gap-1 font-bold">
              <Text>join us & track</Text>
              <Text color="orange.500">Portfolio</Text>
            </Flex>
            <Text>
              Don't have an account?{" "}
              <Link
                className="text-orange"
                onClick={() => navigate("/sign-up")}
              >
                Sign up
              </Link>
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
              <FormControl isInvalid={errors.email}>
                <Input {...register("email")} id="email" placeholder="Email" />
                <FormErrorMessage color="red.700">
                  {errors.email && errors.email.message.toString()}
                </FormErrorMessage>
              </FormControl>
              <PasswordField
                {...register("password")}
                errors={errors}
                placeholder="Password"
              />
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="text" size="sm">
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button type="submit">Sign in</Button>
              {/*<HStack>
                  <Divider />
                  <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                    or continue with
                  </Text>
                  <Divider />
                </HStack>
  <OAuthButtonGroup />*/}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </form>
  );
};
export default Signin;
