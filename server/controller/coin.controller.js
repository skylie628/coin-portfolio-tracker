const {
  getTrendingSearch,
  getTopMarketCap,
} = require("../service/coin.service");
module.exports = {
  getTrendingSearch: async (req, res) => {
    try {
      const data = await getTrendingSearch();
      res.status(200).json({
        isSuccess: true,
        data,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        msg: "Unable to get coins",
        isSucess: false,
        data: null,
        error,
      });
    }
  },
  getTopMarketCap: async (req, res) => {
    try {
      const data = await getTopMarketCap();
      res.status(200).json({
        isSuccess: true,
        data,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        msg: "Unable to get coins",
        isSucess: false,
        data: null,
        error,
      });
    }
  },
};
