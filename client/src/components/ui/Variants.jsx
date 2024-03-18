import { HStack, Tag, TagLeftIcon, TagLabel } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function Variants({ variants }) {
  return (
    <HStack className="w-full flex-wrap" spacing={4}>
      {variants.map((variant) => (
        <Link key={variant.name} to={variants.to || "#"}>
          <Tag className="!bg-halfblack !p-3" borderRadius="full">
            <TagLeftIcon boxSize="12px" as={variant.icon} />
            <TagLabel className="text-white ml-2 text-xs font-bold">
              {variant.name}
            </TagLabel>
          </Tag>
        </Link>
      ))}
    </HStack>
  );
}
