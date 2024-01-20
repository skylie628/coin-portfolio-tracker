import axiosConfig from "@/lib/axios";
export default async function getAllCoins() {
  try {
    const coins = axiosConfig
      .get("/coin/all", {
        params: {},
      })
      .then((res) => res?.data?.data);
    return coins;
  } catch (err) {
    throw new err(err.msg);
  }
}
