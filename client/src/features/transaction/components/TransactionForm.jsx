import {
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
  InputLeftAddon,
  InputGroup,
  FormControl,
  FormLabel,
  FormErrorMessage,
  VStack,
  Button,
  Flex,
  Text,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
//use hook
import { useForm, useWatch } from "react-hook-form";
import { useParams } from "react-router-dom";
//other
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
//thunk
import { addTransactionThunk } from "../../../store/action/action.investOption";
export default function TransactionForm({ type = "buy", setIsOpen }) {
  const scheme = yup.object().shape({
    price: yup.number().required(),
    quantity: yup.number().required(),
    total: yup.number(),
    date: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors = {} },
  } = useForm({
    defaultValues: {
      price: 15,
    },
    resolver: yupResolver(scheme),
  });
  const dispatch = useDispatch();
  const { investOptionId } = useParams();
  const onSubmit = async (data) => {
    console.log("transaction la ", data, investOptionId);
    const { price, date, quantity } = data;
    dispatch(
      addTransactionThunk({
        investid: investOptionId,
        type,
        price,
        date,
        quantity,
        status: "completed",
      })
    );
    //setIsOpen(false);
  };
  const watchPrice = useWatch({ control, name: "price", defaultValue: 15 });
  const watchQuantity = useWatch({
    control,
    name: "quantity",
    defaultValue: 15,
  });
  useEffect(() => {
    const total = (watchPrice || 0) * (watchQuantity || 0);
    setValue("total", total);
  }, [watchPrice, watchQuantity]);
  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <ModalBody>
        <VStack spacing={6} className="p-5">
          <FormControl isInvalid={errors.price}>
            <FormLabel className="!font-bold text-blackest">
              Price per coin
              <span className="!text-orange"> *</span>
            </FormLabel>
            <InputGroup className="w-full">
              <InputLeftAddon>USD</InputLeftAddon>
              <Controller
                control={control}
                name="price"
                render={({ field }) => (
                  <NumberInput
                    {...field}
                    step={1}
                    min={0}
                    defaultValue={15}
                    className="!bg-[#eee] w-full"
                  >
                    <NumberInputField id="price" />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                )}
              />
            </InputGroup>
            <FormErrorMessage color="red.700">
              {errors.price && errors.price.message.toString()}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.quantity}>
            <FormLabel className="!font-bold text-blackest">
              <Flex className="flex-row justify-between">
                <Text>
                  Quantity
                  <span className="!text-orange"> *</span>
                </Text>
                {type == "sell" && (
                  <Button className="!bg-metaldark" size="xs">
                    Max
                  </Button>
                )}
              </Flex>
            </FormLabel>
            <InputGroup className="w-full">
              <InputLeftAddon>ETH</InputLeftAddon>
              <Controller
                control={control}
                name="quantity"
                render={({ field }) => (
                  <NumberInput
                    {...field}
                    step={1}
                    defaultValue={15}
                    min={0}
                    className="!bg-[#eee] w-full"
                  >
                    <NumberInputField {...register("quantity")} />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                )}
              />
            </InputGroup>
            <FormErrorMessage color="red.700">
              {errors.quantity && errors.quantity.message.toString()}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.total}>
            <FormLabel className="!font-bold text-blackest">
              {type == "buy" ? "Total Spent" : "Total Recieved"}
            </FormLabel>
            <InputGroup className="w-full">
              <InputLeftAddon>USD</InputLeftAddon>
              <NumberInput
                step={1}
                defaultValue={15}
                min={0}
                max={30}
                className="!bg-[#eee] w-full"
                isDisabled={true}
              >
                <NumberInputField {...register("total")} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </InputGroup>
            <FormErrorMessage color="red.700">
              {errors.total && errors.total.message.toString()}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.date}>
            <FormLabel className="!font-bold text-blackest">
              Date
              <span className="!text-orange"> *</span>
            </FormLabel>
            <Input
              {...register("date")}
              className="!bg-[#eee]"
              placeholder="Select Date and Time"
              size="md"
              type="datetime-local"
            />
            <FormErrorMessage color="red.700">
              {errors.date && errors.date.message.toString()}
            </FormErrorMessage>
          </FormControl>
        </VStack>
      </ModalBody>
      <ModalFooter className="bg-noise-pattern bg-metalgray  flex-end rounded-b-lg">
        <Button type="submit">{type === "buy" ? "Buy" : "Sell"}</Button>
      </ModalFooter>
    </form>
  );
}
