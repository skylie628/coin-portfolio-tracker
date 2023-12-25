import { Grid, GridItem } from "@chakra-ui/react";
export default function GridSystem({ children }) {
  return (
    <div className="relative w-full">
      {" "}
      {children}
      <Grid
        className="z-[10] absolute w-full inset-0 px-20 -ml-[25px] bg-blackest"
        gap="50"
        gridTemplateColumns={"repeat(4, 1fr) "}
      >
        <GridItem className="bg-meshgrid w-[1px] " />
        <GridItem className="bg-meshgrid w-[1px]" />
        <GridItem className="bg-meshgrid w-[1px]" />
        <GridItem className="bg-meshgrid w-[1px]" />
      </Grid>
    </div>
  );
}
