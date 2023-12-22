import { genRandomColor } from "./genRandomColor";
// suppose that server return data of lasted 3 months
export const genMockData = (variable, type) => {
  switch (type) {
    case "pie":
      return {
        color: genRandomColor(),
        value: Math.floor(Math.random() * 10) + 5,
        ...variable,
      };
    case "line":
      return {
        color: genRandomColor(),
        value: new Array(10)
          .fill(0)
          .map((x) => Math.floor(Math.random() * 10) + 5),
        ...variable,
      };
  }
};
