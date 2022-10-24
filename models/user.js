const { isNull } = require("lodash");
const mongoose = require("mongoose");

//we require this variable to be able to write and pass data
const Schema = mongoose.Schema;

//creating the user schema using the properties of name city,age and has children

const userSchema = new Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    City: {
      type: String,
      required: true,
    },
    Age: {
      type: Number,
      required: true,
    },
    HasChildren: {
      type: Boolean,
      required: true,
    },
  },

  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
