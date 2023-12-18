import { createListenerMiddleware } from "@reduxjs/toolkit";
import {
  setMarketData,
  setStreamingPrices,
} from "../store/reducer/reducer.market";
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
    const streamsarr = coins.reduce((acc, x) => `${x}usdt@ticker/${acc}`, "");
    const stream1h = coins.reduce((acc, x) => `${x}usdt@ticker_1h/${acc}`, "");
    var wss = new WebSocket(
      `wss://stream.binance.com:9443/ws/${streamsarr.toLowerCase()}usdt@ticker/${stream1h.toLowerCase()}usdt@ticker_1h`
    );
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
