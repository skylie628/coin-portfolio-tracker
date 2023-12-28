import { useQuery } from "@tanstack/react-query";
import { getTopCurrenciesQuery } from "../queries";

const useGetTopCurrencies = (payload) => {
  const { data, error, isFetching } = useQuery({
    ...getTopCurrenciesQuery(payload),
  });
  return {
    topCurrencies: data,
    error,
    isLoading: isFetching,
  };
};

export { useGetTopCurrencies };
