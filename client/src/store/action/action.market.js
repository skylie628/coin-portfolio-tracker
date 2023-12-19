import { setCarousels, setMarketData } from "../reducer/reducer.market";
import getTopListDetail from "../../services/market/getTopListDetail";
export const setMarketDataThunk = (payload) => async (dispatch) => {
  getTopListDetail(payload)
    .then((rs) => {
      if (payload === 1) {
        const carouselItems = rs.data.map((coin) => ({
          symbol: coin.symbol,
          current_price: coin.current_price,
        }));
        dispatch(setCarousels({ data: carouselItems }));
      }
      dispatch(setMarketData({ page: payload, data: rs.data }));
    })
    .catch((err) => {
      return;
    });
};
