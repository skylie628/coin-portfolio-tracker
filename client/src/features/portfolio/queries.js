import getAllCoins from "./api/getAllCoins";
export const getAllCoinsQuery = () => {
  return {
    queryKey: ["allCoins"],
    queryFn: getAllCoins,
    retry: 1,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    keepPreviousData: true,
    staleTime: 10 * 60 * 1000,
    suspense: true,
    useErrorBoundary: true,
  };
};
