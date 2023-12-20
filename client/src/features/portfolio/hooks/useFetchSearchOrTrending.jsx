import { useGetTrending } from "@/features/market/hooks/useGetTrending";
import { useGetSearch } from "@/features/market/hooks/useGetSearch";

export default function useFetchSearchOrTrending() {
  const {
    trendingCoins,
    error: errorTrendings,
    isLoading: isTrendingLoading,
  } = useGetTrending();
  const {
    searchCoins,
    isLoading: isSearchLoading,
    error: errorSearch,
    searchTerm,
    handleOnChange,
  } = useGetSearch();
  const isTrending = searchTerm === "";
  const showingItems = isTrending ? trendingCoins : searchCoins;
  const isLoading = isSearchLoading || isTrendingLoading;
  console.log(isLoading);
  const isError = errorTrendings || errorSearch;
  return {
    isTrending,
    showingItems,
    isLoading,
    isError,
    searchTerm,
    handleOnChange,
  };
}
