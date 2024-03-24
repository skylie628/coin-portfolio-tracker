//reducer
import { addInvestOption } from "../reducer/reducer.portfolio";
import { loadInvestOption } from "../reducer/reducer.investOption";
//thunk
import { getPortfolioThunk } from "./action.portfolio";
//api
import createInvestOptionService from "../../features/portfolio/api/createInvestOption";
import getInvestOptionDetailService from "../../features/transaction/api/getInvestOptionDetailService";
import deleteInvestOptionService from "../../features/portfolio/api/deleteInvestOptionService";
import addTransactionService from "../../features/transaction/api/addTransactionService";
import { genRandomColor } from "../../utils/genRandomColor";
//components
import { toast } from "react-toastify";
export const createInvestOptionThunk =
  ({ portid, symbol }) =>
  async (dispatch, getState) => {
    createInvestOptionService({ portid, symbol })
      .then((data) => {
        dispatch(
          addInvestOption({ data: { ...data, color: genRandomColor() } })
        );
        toast.success("add coin to portfolio successfully!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("unable to add coin to portfolio!");
      });
  };
export const loadInvestOptionThunk =
  ({ id }) =>
  async (dispatch, getState) => {
    getInvestOptionDetailService({ id })
      .then((data) => {
        dispatch(loadInvestOption({ data }));
      })
      .catch((err) => {});
  };

export const deleteInvestOptionThunk =
  ({ id }) =>
  async (dispatch, getState) => {
    deleteInvestOptionService({ id })
      .then((data) => {
        console.log("data la", data);
        const userId = window.localStorage.getItem("id");
        dispatch(getPortfolioThunk({ userId }));
        toast.success("delete asset successfully!");
      })
      .catch((err) => {
        toast.error("unable to delete asset!");
      });
  };
export const addTransactionThunk =
  ({ quantity, price, type, date, status, investid }) =>
  async (dispatch, getState) => {
    addTransactionService({ quantity, price, type, date, status, investid })
      .then((data) => {
        toast.success("add transaction successfully!");
        dispatch(loadInvestOptionThunk({ id: investid }));
      })
      .catch((err) => {
        toast.error("unable to add transaction!");
      });
  };
