import { addInvestOption } from "../reducer/reducer.portfolio";
import createInvestOptionService from "../../features/portfolio/api/createInvestOption";
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
