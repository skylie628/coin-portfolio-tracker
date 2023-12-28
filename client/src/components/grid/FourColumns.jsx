import { Grid } from "@chakra-ui/react";
import Skeleton from "@/components/ui/Skeleton.jsx";

export function FourColumnsSkeleton() {
  return (
    <Grid
      gridTemplateColumns={"repeat(4,  minmax(0, 1fr)) "}
      className="relative w-full gap-[50px] w-full"
    >
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="w-full">
            <Skeleton className="!h-[300px]" />
          </div>
        ))}
    </Grid>
  );
}
export default function FourColumns({ data = [], renderTile }) {
  return (
    <Grid
      gridTemplateColumns={"repeat(4,  minmax(0, 1fr)) "}
      className="relative w-full gap-[50px] w-full"
    >
      {data.map((item) => renderTile(item))}
    </Grid>
  );
}
