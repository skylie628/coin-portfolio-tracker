import axiosConfig from "@/lib/axios";
export default async function getPortfolio({ portId }) {
  try {
    const portInfo = axiosConfig.get("/port", {
      params: {
        portId: portId,
      },
    });
    return portInfo;
  } catch (err) {
    throw new err(err.msg);
  }
}
