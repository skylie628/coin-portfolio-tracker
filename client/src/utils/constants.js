const constants = {
  tileType: {
    trendingCoins: "TRENDING_COINS",
    trendingCategories: "TRENDING_CATEGORY",
    trendingNFTs: "TRENDING_NFTS",
    coinOptions: "COIN_OPTIONS",
  },
  cryptoStats: {
    marketCap: {
      name: "Market cap",
      label:
        "The total market value of a cryptocurrency's circulating supply. It is analogous to the free-float capitalization in the stock market. Market cap = Current price x Circulating supply",
    },
    volume: {
      name: "Total volume",
      label:
        "A measure of how much of a cryptocurrency was traded in the last 24 hours.",
    },
    circulatingSupply: {
      name: "Circulating supply",
      label:
        "The amount of coins that are circulating in the market and are in public hands. It is analogous to the flowing shares in the stock market.",
    },
    totalSupply: {
      name: "Total supply",
      label:
        "Total supply = Total coins created - coins that have been burned (if any) It is comparable to outstanding shares in the stock market. ",
    },
    maxSupply: {
      name: "Max. supply",
      label:
        'The maximum amount of coins that will ever exist in the lifetime of the cryptocurrency. It is analogous to the fully diluted shares in the stock market. If the project did not submit this data nor was it verified by CoinMarketCap, max. supply shows "--"',
    },
    fullyDilutedValuation: {
      name: "Fully diluted market cap",
      label:
        "The market cap if the max supply was in circulation. Fully-diluted market cap (FDMC) = price x max supply. If max supply is null, FDMC = price x total supply. if max supply and total supply are infinite or not available, fully-diluted market cap shows - -",
    },
  },
};
export default constants;
