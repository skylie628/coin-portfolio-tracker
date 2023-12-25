export default function getSummarySentence(str, amount) {
  return str.split(".").slice(0, amount).join(".");
}
