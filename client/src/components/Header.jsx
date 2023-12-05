import { Button, Flex, Heading } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex justify="space-between" alignItems="center" p="4" w="100%">
      <Heading size="md" className="!font-roboto">
        React Chart Carbon Design
      </Heading>
      <Button>Reset</Button>
    </Flex>
  );
}
