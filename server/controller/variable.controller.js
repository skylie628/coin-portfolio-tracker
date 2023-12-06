const variableService = require("../service/variable.service");
module.exports = {
  getVariables: async (req, res) => {
    try {
      const variables = await variableService.getVariables();
      res.status(200).json({
        msg: "Get variables sucessfully",
        isSucess: true,
        data: variables,
      });
    } catch (error) {
      res.status(400).json({
        msg: "Unable to get variables",
        isSucess: false,
        data: null,
        error: error,
      });
    }
  },
};
