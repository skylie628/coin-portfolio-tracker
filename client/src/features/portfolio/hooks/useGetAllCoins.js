import { useQuery } from "@tanstack/react-query";
import { getAllCoinsQuery } from "../queries";
const useGetAllCoins = () => {
  const { data, error, isFetching } = useQuery({
    ...getAllCoinsQuery(),
  });
  return {
    allCoins: data,
    error,
    isLoading: isFetching,
  };
};

export { useGetAllCoins };
