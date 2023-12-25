export default function getSummarySentence(str, amount) {
  console.log(str);
  return str.split(".").slice(0, amount).join(".");
}
