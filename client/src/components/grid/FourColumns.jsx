import { Grid } from "@chakra-ui/react";
import Skeleton from "@/components/ui/Skeleton.jsx";
import { useMediaQueries } from "@/hooks/useMediaQueries";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
// import required modules
// modules styles
import "swiper/css/pagination";
export function FourColumnsSkeleton() {
  const { isSm, isMd } = useMediaQueries();
  return (
    <Grid
      gridTemplateColumns={{
        base: "repeat(1,  minmax(0, 1fr))",
        md: "repeat(2,  minmax(0, 1fr))",
        lg: "repeat(3,  minmax(0, 1fr))",
        xl: "repeat(4,  minmax(0, 1fr))",
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
export default function FourColumns({ data = [], renderTile, isPort = false }) {
  const { isSm } = useMediaQueries();
  if (isSm || isPort) {
    return (
      <Grid
        gridTemplateColumns={{
          base: "repeat(1,  minmax(0, 1fr))",
          md: "repeat(2,  minmax(0, 1fr))",
          lg: "repeat(3,  minmax(0, 1fr))",
          xl: "repeat(4,  minmax(0, 1fr))",
        }}
        className="relative w-full gap-[50px] w-full"
      >
        {data.map((item) => renderTile(item))}
      </Grid>
    );
  }
  return (
    <div className="w-full overflow-hidden">
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((item, i) => (
          <SwiperSlide>
            <div className="w-full py-10 flex justify-center items-center">
              {renderTile(item)}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
