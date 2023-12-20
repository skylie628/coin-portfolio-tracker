import { GridItem, VStack } from "@chakra-ui/react";
export default function Stats({
  showStats = true,
  valueRender,
  title = "",
  className = "",
}) {
  return (
    <GridItem className={className}>
      <VStack className="flex-1 bg-halfblack rounded-lg p-5 border border-dashed border-[#555] text-left text-xl font-medium">
        {showStats ? valueRender : <div>******</div>}
        <span className="text-sm">{title}</span>
      </VStack>
    </GridItem>
  );
}
