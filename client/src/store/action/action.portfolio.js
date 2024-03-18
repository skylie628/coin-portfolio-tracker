import { loadPortfolio } from "../reducer/reducer.portfolio";
import getPortfolioService from "../../features/portfolio/api/getPortfolio";
import deleteInvestOptionService from "../../features/portfolio/api/deleteInvestOptionService";
import { genRandomColor } from "../../utils/genRandomColor";
export const getPortfolioThunk =
  ({ userId }) =>
  async (dispatch, getState) => {
    getPortfolioService({ userId })
      .then((data) => {
        data.investid.forEach((invest) => {
          invest.color = genRandomColor();
        });
        dispatch(loadPortfolio({ data }));
      })
      .catch((err) => {});
  };
export const deleteInvestOptionThunk =
  ({ investid }) =>
  async (dispatch, getState) => {
    deleteInvestOptionService({ id: investid })
      .then((data) => {})
      .catch((err) => {});
  };
