//reducer
import { addInvestOption } from "../reducer/reducer.portfolio";
import { loadInvestOption } from "../reducer/reducer.investOption";
//thun
//api
import createInvestOptionService from "../../features/portfolio/api/createInvestOption";
import getInvestOptionDetailService from "../../features/transaction/api/getInvestOptionDetailService";
import addTransactionService from "../../features/transaction/api/addTransactionService";
export const createInvestOptionThunk =
  ({ portid, symbol }) =>
  async (dispatch, getState) => {
    createInvestOptionService({ portid, symbol })
      .then((data) => {
        console.log("res la", data);
        dispatch(addInvestOption({ data }));
      })
      .catch((err) => {
        console.log("err");
      });
  };
export const loadInvestOptionThunk =
  ({ id }) =>
  async (dispatch, getState) => {
    getInvestOptionDetailService({ id })
      .then((data) => {
        console.log("res la", data);
        dispatch(loadInvestOption({ data }));
      })
      .catch((err) => {
        console.log("err");
      });
  };
export const addTransactionThunk =
  ({ quantity, price, type, date, status, investid }) =>
  async (dispatch, getState) => {
    addTransactionService({ quantity, price, type, date, status, investid })
      .then((data) => {
        console.log("returned value afer add transaction la", data);
        dispatch(loadInvestOptionThunk({ id: investid }));
      })
      .catch((err) => {
        console.log("err");
      });
  };
