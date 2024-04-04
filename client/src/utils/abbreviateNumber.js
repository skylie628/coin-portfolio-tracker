import numeral from "numeral";
export default function abbreviateNumber(value) {
  return value > 1
    ? numeral(value.toFixed(4)).format("0.0a")
    : value > 0.0001
    ? value.toFixed(4)
    : value.toExponential(2);
}
