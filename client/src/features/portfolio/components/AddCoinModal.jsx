//components
import Modal from "@/components/ui/Modal";
import { Flex, Text, VStack } from "@chakra-ui/react";
import { Flame } from "lucide-react";
import { Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { Search } from "lucide-react";
import { Suspense } from "react";
//useHooks
import useFetchSearchOrTrending from "../hooks/useFetchSearchOrTrending";
export default function AddCoinModal({ isOpen, setIsOpen }) {
  const { showingItems, isLoading, searchTerm, handleOnChange } =
    useFetchSearchOrTrending();
  return (
    <Modal
      title="Search your favorite coin"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <VStack className=" p-5 pb-10 bg-metalgray rounded-b-xl overflow-hidden">
        <InputGroup className="w-full bg-metalgray pb-5">
          <Input
            value={searchTerm}
            onChange={handleOnChange}
            className="p-3 !rounded-none bg-metalgray group"
          />
          <InputRightAddon>
            <Search color="dimgray" />
          </InputRightAddon>
        </InputGroup>
        <VStack className="p-5 max-h-[400px] w-full overflow-y-scroll !gap-0">
          <Suspense fallback={<div>isLoading</div>}>
            {isLoading ? (
              <div>isLoading</div>
            ) : (
              showingItems &&
              showingItems.map((x) => (
                <Flex
                  key={x.symbol}
                  gap="3"
                  className="cursor-pointer items-center text-left w-full p-2 border-b border-b-dimgray/[0.2]"
                >
                  <img className="w-[30px] h-[30px] rounded-full" src={x.src} />
                  <Text className="flex-1 text-sm text-blackest/[0.7] font-medium">
                    {`${x.name}  (${x.symbol})`}
                  </Text>
                  <Flame color="orange" size="20" />
                </Flex>
              ))
            )}
          </Suspense>
        </VStack>
      </VStack>
    </Modal>
  );
}
