import { useQuery } from "@tanstack/react-query";
import { getHistoryPriceQuery } from "../queries";
const useGetHistoryPrice = ({ id }) => {
  const { data, error, isFetching } = useQuery({
    ...getHistoryPriceQuery({ id }),
  });
  return {
    data: data,
    error,
    isLoading: isFetching,
  };
};

export { useGetHistoryPrice };
