const UserModel = require("../model/user.model");
const bcrypt = require("bcrypt");
module.exports = {
  findUser: async (email) => {
    return UserModel.findOne({ email });
  },
  createUser: async (payload) => {
    return UserModel.create(payload);
  },
  
};
