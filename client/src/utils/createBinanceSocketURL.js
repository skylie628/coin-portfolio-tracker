export default function createBinanceSocketURL({ symbols, tickers }) {
  let params = [];
  tickers.forEach((ticker) => {
    params = [
      ...params,
      ...symbols.map((symbol) => `${symbol.toLowerCase()}usdt@${ticker}`),
    ];
    console.log(params, ticker);
  });
  params = params.join("/");
  return `${import.meta.env.VITE_BINANCE_SOCKET_ENDPOINT}/${params}`;
}
