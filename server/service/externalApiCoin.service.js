const axios = require("axios");

const getTopCoin = async () => {
  const response = await axios({
    method: "get",
    url: `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD&api_key=${process.env.API_KEY}`,
  })
    .then((response) => {
      // console.log(response.data.Data);
      return response.data;
    })
    .catch(function (error) {});
  return response;
};

const getCoinPrice = async (coin_name) => {
  const response = await axios({
    method: "get",
    url: `https://min-api.cryptocompare.com/data/price?fsym=${coin_name}&tsyms=USD&api_key=${process.env.API_KEY}`,
  })
    .then((response) => {
      // console.log(response.data.Data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return response.USD;
};

const getAssetbySymbol = async (symbol) => {
  const response = await axios({
    method: "get",
    url: `https://data-api.cryptocompare.com/asset/v1/data/by/symbol?asset_symbol=${symbol}&api_key${process.env.API_KEY}`,
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
  return response;
};
module.exports = { getTopCoin, getCoinPrice, getAssetbySymbol };
