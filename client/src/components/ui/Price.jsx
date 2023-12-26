import clsx from "clsx";
export default function Price({
  className = "",
  currencyCode = "",
  amount,
  currencyCodeClassName = "",
  type = "fiat",
}) {
  if (!amount) return <p>_</p>;
  const value =
    type === "crypto"
      ? amount.toLocaleString(undefined, { minimumFractionDigits: 2 })
      : `${new Intl.NumberFormat(undefined, {
          style: "currency",
          currency: currencyCode,
          currencyDisplay: "narrowSymbol",
        }).format(parseFloat(amount))}`;
  return (
    <p suppressHydrationWarning={true} className={clsx(" ", className)}>
      {value}
      <span
        className={clsx("ml-1 inline ", currencyCodeClassName)}
      >{`${currencyCode}`}</span>
    </p>
  );
}
