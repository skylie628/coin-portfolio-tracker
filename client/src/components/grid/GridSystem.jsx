import { Grid, GridItem } from "@chakra-ui/react";
export default function GridSystem({ children }) {
  return (
    <div className="relative w-full container mx-auto">
      {" "}
      {children}
      <Grid
        className="z-[10] absolute w-full inset-0 px-20 -ml-[25px] bg-blackest "
        gap="50"
        gridTemplateColumns={{
          base: "repeat(1,  minmax(0, 1fr))",
          md: "repeat(2,  minmax(0, 1fr))",
          lg: "repeat(3,  minmax(0, 1fr))",
          xl: "repeat(4,  minmax(0, 1fr))",
        }}
      >
        <GridItem className="bg-meshgrid w-[1px] " />
        <GridItem className="bg-meshgrid w-[1px]" />
        <GridItem className="bg-meshgrid w-[1px]" />
        <GridItem className="bg-meshgrid w-[1px]" />
      </Grid>
    </div>
  );
}
