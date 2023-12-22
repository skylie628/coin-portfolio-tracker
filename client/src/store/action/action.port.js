import { loadPort } from "@/reducer/reducer.port";
import getPortfolio from "@/features/portfolio/api/getPortfolio";
import { genRandomColor } from "@/utils/genRandomColor";
import normalize from "../../utils/normolize";
export const loadPortThunk = (portId) => async (dispatch, getState) => {
  getPortfolio({ portId })
    .then((res) => {
      const { totalBalance, totalRevenue, coins } = res.data;
      dispatch(
        loadPort({
          data: {
            coins:
              coins.length > 0
                ? normalize(
                    coins.map((coin) => ({
                      id: coin.id,
                      signal: coin.signal,
                      value: totalBalance,
                      color: genRandomColor(),
                    })),
                    "id"
                  )
                : [],
            totalBalance,
            totalRevenue,
          },
        })
      );
    })
    .catch((err) => {
      console.log("err");
    });
};
