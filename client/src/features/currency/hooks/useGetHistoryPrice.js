import { useQuery } from "@tanstack/react-query";
import { getHistoryPriceQuery } from "../queries";
import { useQueryClient } from "@tanstack/react-query";
const useGetHistoryPrice = ({ coinId, timeRange, yAxisMeasure }) => {
  const queryClient = useQueryClient();
  const { data, error, isFetching } = useQuery({
    ...getHistoryPriceQuery({ coinId, timeRange }),
  });
  return {
    data,
    error,
    isLoading: isFetching,
  };
};

export { useGetHistoryPrice };
