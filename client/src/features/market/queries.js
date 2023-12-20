import { getSearchTrending } from "./api/getSearchTrending";
import { getSearch } from "./api/getSearch";
export const getSearchTrendingQuery = () => {
  return {
    queryKey: ["searchTrending"],
    queryFn: getSearchTrending,
    retry: 1,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    keepPreviousData: true,
    staleTime: 10 * 60 * 1000,
    suspense: true,
    useErrorBoundary: true,
  };
};

export const getSearchQuery = (debouncedSearchTerm) => {
  return {
    queryKey: ["search", debouncedSearchTerm],
    queryFn: () =>
      debouncedSearchTerm ? getSearch({ keyword: debouncedSearchTerm }) : null,
    retry: 1,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    keepPreviousData: true,
    staleTime: 30000,
    suspense: true,
    useErrorBoundary: true,
  };
};
