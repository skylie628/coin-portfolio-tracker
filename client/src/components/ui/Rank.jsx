import { Box } from "@chakra-ui/react";
export default function Rank({ value }) {
  let rankStyle = "block font-bold text-green font-bold";
  switch (value) {
    case 1:
      rankStyle = `${rankStyle} text-2xl text-rose-600`;
      break;
    case 2:
      rankStyle = `${rankStyle} text-2xl text-blue-600`;
      break;
    case 3:
      rankStyle = `${rankStyle} text-2xl text-yellow-600`;
      break;
    default:
      rankStyle = `${rankStyle} text-dimgray text-sm`;
      break;
  }
  return <Box className={rankStyle}>{value}</Box>;
}
