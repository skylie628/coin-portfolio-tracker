import axios from "axios";
console.log("mt la", import.meta.env.VITE_REACT_APP_SERVER_URL);
const instance = axios.create({
  baseURL: import.meta.env.VITE_REACT_SERVER_URL,
});
export default instance;
