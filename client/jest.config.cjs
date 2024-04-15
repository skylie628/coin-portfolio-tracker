module.exports = {
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["/node_modules/(?!swiper|ssr-window|dom7)"],
  moduleNameMapper: {
    "swiper/css": "swiper/swiper.min.css",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
