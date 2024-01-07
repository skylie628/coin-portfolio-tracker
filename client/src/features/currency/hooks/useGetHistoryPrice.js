import { useQuery } from "@tanstack/react-query";
import { getHistoryPriceQuery } from "../queries";
const useGetHistoryPrice = ({ coinId }) => {
  const { data, error, isFetching } = useQuery({
    ...getHistoryPriceQuery({ coinId }),
  });
  return {
    data: data,
    error,
    isLoading: isFetching,
  };
};

export { useGetHistoryPrice };
