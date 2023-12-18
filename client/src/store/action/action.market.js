import { setMarketData } from "../reducer/reducer.market";
import getTopListDetail from "../../services/market/getTopListDetail";
export const setMarketDataThunk = (payload) => async (dispatch) => {
  getTopListDetail(payload)
    .then((rs) => {
      console.log(rs);
      dispatch(setMarketData({ page: payload, data: rs.data }));
    })
    .catch((err) => {
      return;
    });
};
