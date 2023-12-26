import { Globe, File, Github } from "lucide-react";
import { Flex } from "@chakra-ui/react";
import Variants from "@/components/ui/variants";

export default function OfficialLinks() {
  const variants = [
    { name: "Website", icon: () => <Globe color="dimgray" /> },
    { name: "Whitepaper", icon: () => <File color="dimgray" /> },
    { name: "Github", icon: () => <Github color="dimgray" /> },
  ];
  return (
    <Flex className="w-full justify-start items-start flex-col gap-3">
      <h3>Official links</h3>
      <Variants variants={variants} />
    </Flex>
  );
}
