import { useQuery } from "@tanstack/react-query";
import { getCurrencyDetailQuery } from "../queries";
const useGetCurrencyDetail = ({ id }) => {
  const { data, error, isFetching } = useQuery({
    ...getCurrencyDetailQuery({ id }),
  });
  return {
    data: data,
    error,
    isLoading: isFetching,
  };
};

export { useGetCurrencyDetail };
