import { Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { Search } from "lucide-react";
export default function SearchBox() {
  return (
    <InputGroup className="w-full bg-metalgray pb-5">
      <Input className="p-3 !rounded-none bg-metalgray group" />
      <InputRightAddon>
        <Search color="dimgray" />
      </InputRightAddon>
    </InputGroup>
  );
}
