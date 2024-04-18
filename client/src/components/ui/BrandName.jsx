import { Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function BrandName(props) {
  return (
    <Link to="/">
      <Heading className="cursor-pointer" href="" {...props}>
        Coi
        <Text as="span" color="orange">
          Port.
        </Text>
      </Heading>
    </Link>
  );
}
