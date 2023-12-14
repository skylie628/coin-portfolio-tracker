import { imagesHelper } from "../../config/images";
import { HStack, Heading, Text } from "@chakra-ui/react";
import BrandName from "../../components/ui/BrandName";
import Divider from "../../components/ui/Divider";
import { ChevronDown } from "lucide-react";
export default function Hero({ scrollToTopLists }) {
  return (
    <>
      <HStack
        as="section"
        spacing={"100px"}
        className="z-0 sticky top-[89px]  text-left bg-blackest  py-10"
      >
        <figure>
          <img className=" h-[400px]" src={imagesHelper.hero_background} />
        </figure>
        <Heading className="!text-5xl text-2xl ml-0 md:ml-20 ">
          <Text className="leading-normal">Stay</Text>
          <Text className="leading-normal">Up-to-date</Text>
          <Text className="leading-normal">With</Text>
          <BrandName className="leading-normal !text-5xl" />
        </Heading>
        <ChevronDown
          size="100"
          color="gray"
          className="block cursor-pointer m-auto"
          onClick={scrollToTopLists}
        />
      </HStack>
      <Divider />
    </>
  );
}
