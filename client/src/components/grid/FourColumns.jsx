import { Grid } from "@chakra-ui/react";
export default function FourColumns({ data = [], renderTile }) {
  return (
    <Grid
      gridTemplateColumns={"repeat(4, 1fr) "}
      className="relative w-full gap-[50px] w-full"
    >
      {data.map((item) => renderTile(item))}
    </Grid>
  );
}
