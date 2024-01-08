import { useQuery } from "@tanstack/react-query";
import { getHistoryPriceQuery } from "../queries";
import { useQueryClient } from "@tanstack/react-query";
const useGetHistoryPrice = ({ coinId, timeRange, yAxisMeasure }) => {
  const queryClient = useQueryClient();
  console.log(
    "beforecache",
    getHistoryPriceQuery({ coinId, timeRange }).queryKey,
    queryClient.getQueryData(["currencyPriceHistory", coinId, "month"])
  );
  const { data, error, isFetching } = useQuery({
    ...getHistoryPriceQuery({ coinId, timeRange }),
  });
  console.log(
    "aftercache",
    getHistoryPriceQuery({ coinId, timeRange }).queryKey,
    queryClient.getQueryData(["currencyPriceHistory", coinId, "month"])
  );
  return {
    data,
    error,
    isLoading: isFetching,
  };
};

export { useGetHistoryPrice };
