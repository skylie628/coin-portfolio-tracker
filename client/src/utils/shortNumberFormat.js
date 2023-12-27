import numeral from "numeral";
export default function shortNumberFormat(value) {
  return numeral(value).format("0.0a");
}
