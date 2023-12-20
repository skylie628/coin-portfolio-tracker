import { axiosCoingecko } from "@/lib/axios";
export const getSearch = async ({ keyword }) => {
  try {
    const topCoinsList = await axiosCoingecko.get("/search", {
      params: { query: keyword },
    });
    return (
      topCoinsList.data?.coins?.map((coin) => ({
        id: coin.id,
        name: coin.name,
        src: coin.large,
        symbol: coin.symbol,
      })) || []
    );
  } catch (err) {
    throw new Error("Unable to fetch trending coins");
  }
};
