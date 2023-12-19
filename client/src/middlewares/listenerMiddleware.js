//middleware
import { createListenerMiddleware } from "@reduxjs/toolkit";
//reducer
import {
  setMarketData,
  setStreamingPrices,
} from "../store/reducer/reducer.market";
//utils
import createBinanceSocketURL from "../utils/createBinanceSocketURL";
const listenerMiddleware = createListenerMiddleware();
let value = { current: {}, hour: {}, day: {} };
let isDispatch = "true";
setInterval(function () {
  isDispatch = "true";
}, 1000);
listenerMiddleware.startListening({
  actionCreator: setMarketData,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();
    const coins = action.payload.data.map((x) => x.symbol);
    const socketUrl = createBinanceSocketURL({
      symbols: coins,
      tickers: ["ticker", "ticker_1h"],
    });
    var wss = new WebSocket(socketUrl);
    wss.onmessage = function (event) {
      value = JSON.parse(JSON.stringify(value));
      var messageObject = JSON.parse(event.data);
      if (messageObject.e == "24hrTicker") {
        value.day[messageObject.s] = {
          price: messageObject.p,
          percent: messageObject.P,
        };
      } else {
        value.hour[messageObject.s] = {
          price: messageObject.p,
          percent: messageObject.P,
        };
        value.current[messageObject.s] = messageObject.c;
      }
      if (isDispatch) {
        listenerApi.dispatch(setStreamingPrices({ data: { ...value } }));
        isDispatch = false;
      }
    };

    if (
      await listenerApi.condition((action, state) => {
        console.log(action.type);
        return action.type.toString() === "market/stopStreaming";
      })
    ) {
      wss.close();
      listenerApi.cancel();
    }
  },
  // Can cancel other running instances
  // listenerApi.cancelActiveListeners();
});
export default listenerMiddleware;
