import axiosConfig from "@/lib/axios";
export default async function getInvestOptionDetailService({ id }) {
  try {
    const portInfo = await axiosConfig.get("invests", {
      params: {
        id,
      },
    });
    return portInfo?.data;
  } catch (err) {
    throw new err(err.msg);
  }
}
