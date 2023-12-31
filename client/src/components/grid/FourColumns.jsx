import { Grid } from "@chakra-ui/react";
import Skeleton from "@/components/ui/Skeleton.jsx";
import { useMediaQueries } from "@/hooks/useMediaQueries";
export function FourColumnsSkeleton() {
  const { isSm, isMd } = useMediaQueries();
  return (
    <Grid
      gridTemplateColumns={{
        base: "repeat(1,  minmax(0, 1fr))",
        sm: "repeat(2,  minmax(0, 1fr))",
        md: "repeat(4,  minmax(0, 1fr))",
      }}
      className="relative w-full gap-[50px] w-full"
    >
      {Array(isMd ? 4 : isSm ? 2 : 1)
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
      gridTemplateColumns={{
        base: "repeat(1,  minmax(0, 1fr))",
        sm: "repeat(2,  minmax(0, 1fr))",
        md: "repeat(4,  minmax(0, 1fr))",
      }}
      className="relative w-full gap-[50px] w-full"
    >
      {data.map((item) => renderTile(item))}
    </Grid>
  );
}
