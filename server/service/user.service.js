const UserModel = require("../model/user.model");
const bcrypt = require("bcrypt");
module.exports = {
  findUser: async (email) => {
    user = UserModel.findOne({ email });
    // console.log(user)
    return user;
  },
  createUser: async (payload) => {
    return UserModel.create(payload);
  },
};
