import {
  loadPortfolio,
  startLoading,
  stopLoading,
} from "../reducer/reducer.portfolio";
import getPortfolioService from "../../features/portfolio/api/getPortfolio";
//components
import { toast } from "react-toastify";
import { genRandomColor } from "../../utils/genRandomColor";
export const getPortfolioThunk =
  ({ userId }) =>
  async (dispatch, getState) => {
    dispatch(startLoading());
    getPortfolioService({ userId })
      .then((data) => {
        data.investid.forEach((invest) => {
          invest.color = genRandomColor();
        });
        dispatch(loadPortfolio({ data }));
        dispatch(stopLoading());
      })
      .catch((err) => {
        dispatch(stopLoading());
      });
  };
