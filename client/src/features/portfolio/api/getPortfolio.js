import axiosConfig from "@/lib/axios";
export default async function getPortfolioService({ userId }) {
  try {
    const portInfo = await axiosConfig.get("portfolio", {
      params: {
        userId,
      },
    });
    return portInfo?.data;
  } catch (err) {
    throw new err(err.msg);
  }
}
