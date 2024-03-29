//middleware
import { createListenerMiddleware } from "@reduxjs/toolkit";
//reducer
import {
  startStreaming,
  setStreamingPrices,
} from "../store/reducer/reducer.market";
import {
  connectSocket,
  connectSuccess,
  connectFailed,
  updateCurrentValue,
  reset,
} from "../store/reducer/reducer.streaming";
//utils
import createBinanceSocketURL from "../utils/createBinanceSocketURL";
const listenerMiddleware = createListenerMiddleware();
let value = { current: {}, hour: {}, day: {} };
let isDispatch = "true";
setInterval(function () {
  isDispatch = "true";
}, 1000);
function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
// Store the WebSocket connection outside the scope of the effect function
let wss = null;
listenerMiddleware.startListening({
  actionCreator: startStreaming,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();
    const coins = action.payload.topCurrencies.map((x) => x.symbol);
    const socketUrl = createBinanceSocketURL({
      symbols: coins,
      tickers: ["ticker", "ticker_1h"],
    });
    if (!wss || wss.readyState !== WebSocket.OPEN) {
      wss = new WebSocket(socketUrl);
    }
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
        return action.type.toString() === "market/stopStreaming";
      })
    ) {
      wss && wss.close();
    }
  },
  // Can cancel other running instances
  // listenerApi.cancelActiveListeners();
});

let receivedData = false;
listenerMiddleware.startListening({
  actionCreator: connectSocket,
  effect: async (action, listenerApi) => {
    const { symbol } = action.payload.data;
    const socketUrl = createBinanceSocketURL({
      symbols: [symbol],
      tickers: ["trade"],
    });
    var wss = new WebSocket(socketUrl);
    wss.onopen = function (event) {
      // Dispatch an action to update the state with the connection status
      listenerApi.dispatch(connectSuccess());
    };
    const debouncedUpdateCurrentValue = debounce((data) => {
      if (listenerApi.getState().streaming.currency.streamMode) {
        listenerApi.dispatch(updateCurrentValue(data));
      }
    }, 500);
    wss.onmessage = function (event) {
      receivedData = true;
      var messageObject = JSON.parse(event.data);
      debouncedUpdateCurrentValue({ data: messageObject.p });
    };
    wss.onclose = function () {
      if (!receivedData) {
        // Dispatch an action to update the state
        listenerApi.dispatch(
          connectFailed({ error: "No data received from stream" })
        );
      }
      receivedData = false;
    };
    wss.onerror = function (error) {
      // Dispatch an action to update the state with the error
      listenerApi.dispatch(connectFailed({ error: error.message }));
    };
    if (
      await listenerApi.condition((action, state) => {
        return action.type.toString() === "streaming/stopStreaming";
      })
    ) {
      wss.close();
      listenerApi.dispatch(reset());
      //listenerApi.cancel();
    }
  },
});
export default listenerMiddleware;
