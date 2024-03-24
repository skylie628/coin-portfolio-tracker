import axiosConfig from "@/lib/axios";
export default async function deleteInvestOptionService({ id }) {
  try {
    const rs = axiosConfig
      .delete("/invests", {
        params: { id },
      })
      .then((res) => res?.data);
    return rs;
  } catch (err) {
    throw new err(err.msg);
  }
}
