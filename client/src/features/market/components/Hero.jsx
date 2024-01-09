import { imagesHelper } from "@/config/images";
import { HStack, Heading, Text } from "@chakra-ui/react";
import BrandName from "@/components/ui/BrandName";
import Divider from "@/components/ui/Divider";
import { ChevronDown } from "lucide-react";
export default function Hero({ scrollToTopLists }) {
  return (
    <>
      <section
        spacing={"100px"}
        className="z-0 sticky top-[89px]  text-left bg-blackest w-full overflow-hidden  py-10 "
      >
        <HStack className="relative w-full ">
          <div className=".stars-container z-0">
            <div className="stars"></div>
            <div className="twinkling"></div>
          </div>
          <HStack className="container mx-auto w-full">
            <figure>
              <img
                className=" h-[400px] z-10 relative mr-auto"
                src={imagesHelper.hero_background}
              />
            </figure>
            <HStack className="  w-full z-10">
              <Heading className="text-xl md:!text-5xl text-2xl ml-0 md:ml-20 ">
                <Text className="leading-normal">Stay</Text>
                <Text className="leading-normal">Up-to-date</Text>
                <Text className="leading-normal">With</Text>
                <BrandName className="leading-normal text-3xl md:!text-5xl" />
              </Heading>
              <ChevronDown
                size="100"
                color="gray"
                className="block cursor-pointer m-auto"
                onClick={scrollToTopLists}
              />
            </HStack>
          </HStack>
        </HStack>
      </section>
      <Divider />
    </>
  );
}
