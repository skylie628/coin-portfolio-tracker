const VariableModel = require("../model/variable.model");

module.exports = {
  getVariables: async () => {
    const variables = await VariableModel.find({}).lean();
    return variables;
  },
};
