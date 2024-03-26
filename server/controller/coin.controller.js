const {
  getTrendingSearch,
  getTopMarketCap,
  getHistory,
  getGeneralInfo,
  getAllCoins,
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
      res.status(400).json({
        msg: "Unable to get coins",
        isSucess: false,
        data: null,
        error,
      });
    }
  },
  getAllCoins: async (req, res) => {
    try {
      const data = await getAllCoins();

      res.status(200).json({
        isSuccess: true,
        data,
      });
    } catch (error) {
      res.status(400).json({
        msg: "Unable to get coins",
        isSucess: false,
        data: null,
        error,
      });
    }
  },
  getHistory: async (req, res) => {
    try {
      const { coinId, quoteCurrency, period } = req.query;
      const data = await getHistory({ coinId, quoteCurrency, period });
      res.status(200).json({
        isSuccess: true,
        data,
      });
    } catch (error) {
      res.status(500).json({
        isSuccess: false,
        message: "Error getting history",
      });
    }
  },
  getGeneralInfo: async (req, res) => {
    try {
      const { quoteCurrency } = req.query;
      const { coinId } = req.params;
      const data = await getGeneralInfo({ coinId, quoteCurrency });
      res.status(200).json({
        isSuccess: true,
        data,
      });
    } catch (error) {
      res.status(500).json({
        isSuccess: false,
        message: "Error getting history",
      });
    }
  },
};
