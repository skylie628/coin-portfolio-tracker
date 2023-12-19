import clsx from "clsx";
export default function Price({
  className = "",
  currencyCode = "",
  amount,
  currencyCodeClassName = "",
}) {
  return (
    <p suppressHydrationWarning={true} className={clsx(" ", className)}>
      {`${new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: currencyCode,
        currencyDisplay: "narrowSymbol",
      }).format(parseFloat(amount))}`}
      <span
        className={clsx("ml-1 inline ", currencyCodeClassName)}
      >{`${currencyCode}`}</span>
    </p>
  );
}
