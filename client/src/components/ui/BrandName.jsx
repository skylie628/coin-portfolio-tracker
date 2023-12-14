import { Heading, Text } from "@chakra-ui/react";
export default function BrandName(props) {
  return (
    <Heading {...props}>
      Coi
      <Text as="span" color="orange">
        Port.
      </Text>
    </Heading>
  );
}
