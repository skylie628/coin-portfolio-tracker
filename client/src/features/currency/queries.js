import { getCurrencyDetail } from "./api/getCurrencyDetail";
export const getCurrencyDetailQuery = ({ id }) => {
  return {
    queryKey: ["currencyDetail", id],
    queryFn: () => getCurrencyDetail({ id }),
    retry: 1,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    keepPreviousData: true,
    staleTime: 10 * 60 * 1000,
    suspense: true,
    useErrorBoundary: true,
  };
};
