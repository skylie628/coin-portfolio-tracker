// suppose that server return data of lasted 3 months
const genRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};
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
