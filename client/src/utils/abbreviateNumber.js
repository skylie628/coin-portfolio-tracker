import numeral from "numeral";
export default function abbreviateNumber(value) {
  return value > 1
    ? numeral(value).format("0.0a")
    : value > 0.00001
    ? value.toFixed(2)
    : value.toExponential(2);
}
