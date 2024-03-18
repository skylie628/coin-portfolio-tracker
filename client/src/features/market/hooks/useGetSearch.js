import { getSearchQuery } from "../queries";
//useHooks
import { useQuery } from "@tanstack/react-query";
import useDebounce from "../../../hooks/useDebounce";
import { useState } from "react";
export const useGetSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);
  const handleOnChange = (e) => setSearchTerm(e.target.value);
  const { data, isFetching, error } = useQuery({
    ...getSearchQuery(debouncedSearchTerm),
  });
  return {
    searchCoins: data || [],
    isLoading: isFetching,
    error,
    searchTerm,
    handleOnChange,
  };
};
