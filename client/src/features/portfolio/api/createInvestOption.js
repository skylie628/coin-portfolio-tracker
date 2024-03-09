import axiosConfig from "@/lib/axios";
export default async function createInvestOptionService({ portid, symbol }) {
  try {
    const portInfo = await axiosConfig.post("invests", {
      portid,
      symbol,
    });
    return portInfo?.data;
  } catch (err) {
    throw new err(err.msg);
  }
}
