import { HStack, Tag, TagLeftIcon, TagLabel } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function Variants({ variants }) {
  return (
    <HStack className="w-full flex-wrap" spacing={4}>
      {variants.map((variant) => (
        <Link key={variant.name} to={variants.to || "#"}>
          <Tag
            className="!bg-halfblack !p-3 hover:outline-1 hover:outline-slate-500"
            borderRadius="full"
          >
            <TagLeftIcon boxSize="12px" as={variant.icon} />
            <TagLabel className="!text-lightstar hover:!text-white ml-2 text-xs font-bold">
              {variant.name}
            </TagLabel>
          </Tag>
        </Link>
      ))}
    </HStack>
  );
}
