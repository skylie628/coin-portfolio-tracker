import { loadPortfolio } from "../reducer/reducer.portfolio";
import getPortfolioService from "../../features/portfolio/api/getPortfolio";
export const getPortfolioThunk =
  ({ userId }) =>
  async (dispatch, getState) => {
    getPortfolioService({ userId })
      .then((data) => {
        console.log("result la", data);
        dispatch(loadPortfolio({ data }));
      })
      .catch((err) => {});
  };
