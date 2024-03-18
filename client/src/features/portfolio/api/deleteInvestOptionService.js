import axiosConfig from "@/lib/axios";
export default async function deleteInvestOptionService({ investid }) {
  try {
    const rs = axiosConfig
      .delete("/invests", {
        params: { id: investid },
      })
      .then((res) => res?.data);
    return rs;
  } catch (err) {
    throw new err(err.msg);
  }
}
