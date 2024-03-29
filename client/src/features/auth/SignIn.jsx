//component
import {
  Box,
  Checkbox,
  FormControl,
  FormErrorMessage,
  Flex,
  HStack,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import ThreeLoadingDots from "@/components/ui/ThreeLoadingDots";
import { PasswordField } from "@/components/ui/PasswordField";
//use hook
import { useForm } from "react-hook-form";
//other
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { signinThunk } from "../../store/action/action.user";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.user);
  const scheme = yup.object().shape({
    email: yup.string().required("Email is require").email("Email invalid"),
    password: yup
      .string()
      .min(6, "Password length can't be less than 6 characters")
      .max(50, "Password length can't be more than 50 characters")
      .required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors = {}, isSubmitting },
  } = useForm({ resolver: yupResolver(scheme) });
  const onSubmitSignin = (data) => {
    dispatch(signinThunk({ data }));
  };
  const onSubmitSigninDemo = (data) => {
    dispatch(
      signinThunk({
        data: {
          email: "steven@gmail.com",
          password: "12312345",
        },
      })
    );
  };
  return (
    <form className="block" onSubmit={handleSubmit(onSubmitSignin)}>
      <Stack spacing="6">
        <Stack spacing="6">
          <Stack spacing={{ base: "3", md: "4" }} textAlign="center">
            <Flex className="flex-col gap-1 font-bold ">
              <Text className="text-lightstar">join us & track</Text>
              <Text className="!text-carotene">Portfolio</Text>
            </Flex>
            <Text>
              Don't have an account?{" "}
              <Link
                className="!text-blue-500 hover:!text-blue-400"
                onClick={() => navigate("/sign-up")}
                style={{
                  textDecoration: "none",
                  borderBottom: "1px solid",
                  paddingBottom: "2px",
                }}
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
              <Input
                {...register("email")}
                placeholder="Email"
                errors={errors}
              />
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
              <Button type="submit" isLoading={isLoading} disabled={isLoading}>
                SIGN-IN
              </Button>
              <div>OR</div>
              <Button
                variant="black"
                isLoading={isLoading}
                onClick={(e) => {
                  e.preventDefault();
                  onSubmitSigninDemo();
                }}
              >
                SIGN-IN WITH DEMO ACCOUNT
              </Button>
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
