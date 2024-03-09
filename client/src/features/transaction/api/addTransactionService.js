import axiosConfig from "@/lib/axios";
export default async function addTransactionService({
  quantity,
  price,
  type,
  date,
  status,
  investid,
}) {
  try {
    const returnedValue = await axiosConfig.post("transactions", {
      quantity,
      price,
      type,
      date,
      status,
      investid,
    });
    return returnedValue?.data;
  } catch (err) {
    throw new err(err.msg);
  }
}
