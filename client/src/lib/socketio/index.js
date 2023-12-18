import { io } from "socket.io-client";
const socketConnect = () => {
  const socket = io("wss://www.cryptofacilities.com/ws/v1", {
    reconnectionDelayMax: 10000,
  });
  socket.io.on("message", (data) => {
    console.log(data);
  });
};

export default socketConnect;
