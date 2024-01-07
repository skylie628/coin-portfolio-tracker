import { useQuery } from "@tanstack/react-query";
import { getCurrencyDetailQuery } from "../queries";
const useGetCurrencyDetail = ({ coinId }) => {
  const { data, error, isFetching } = useQuery({
    ...getCurrencyDetailQuery({ coinId }),
  });
  return {
    data: data,
    error,
    isLoading: isFetching,
  };
};

export { useGetCurrencyDetail };
