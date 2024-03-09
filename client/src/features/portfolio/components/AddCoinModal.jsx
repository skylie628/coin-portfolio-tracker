//components
import Modal from "@/components/ui/Modal";
import { Flex, Text, VStack } from "@chakra-ui/react";
import { Flame } from "lucide-react";
import { Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { Search } from "lucide-react";
import { Suspense, useState, useTransition } from "react";
//useHooks
import { useGetAllCoins } from "../hooks/useGetAllCoins";
import { useDispatch, useSelector } from "react-redux";
//other
import { createInvestOptionThunk } from "../../../store/action/action.investOption";
export default function AddCoinModal({ isOpen, setIsOpen }) {
  const { allCoins, isLoading } = useGetAllCoins();
  const [searchTerm, setSearchTerm] = useState(null);
  const [isPending, startTransition] = useTransition();
  const dispatch = useDispatch();
  const portid = useSelector((state) => state.portfolio.data.id);
  console.log(allCoins);
  let showingItems = [];
  //if not allCoins, return empty array
  if (allCoins && !searchTerm) {
    showingItems = allCoins.slice(0, 10);
  }
  //if allCoins and searchTerm, return filtered array
  if (allCoins && searchTerm) {
    showingItems = allCoins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  const handleOnChange = (e) => {
    startTransition(() => {
      setSearchTerm(e.target.value);
    });
  };
  const handleOnclick = async ({ symbol }) => {
    dispatch(createInvestOptionThunk({ portid, symbol })).then(
      setIsOpen(false)
    );
  };
  return (
    <Modal
      title="Search your favorite coin"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <VStack className=" p-5 pb-10 bg-metalgray rounded-b-xl overflow-hidden min-h-8/12">
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
                  onClick={() => handleOnclick(x)}
                  gap="3"
                  className="cursor-pointer items-center text-left w-full p-2 border-b border-b-dimgray/[0.2] hover:bg-dimgray/[0.2]"
                >
                  <img
                    className="w-[30px] h-[30px] rounded-full"
                    src={x.image}
                  />
                  <Text className="flex-1 text-sm text-blackest/[0.7] font-medium">
                    {`${x.name}  (${x.symbol.toUpperCase()})`}
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
