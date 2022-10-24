//mongoose has to be required first
const mongoose = require("mongoose");

//require the schema too of where the data will be written and passed
const Schema = mongoose.Schema;

//creating the Blog Schema using properties of tittle,snippet,body or etc

const blogSchema = new Schema(
  {
    tittle: {
      type: Number,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    actors : {
      type: String,
      required: true
    }
    //this generates timestamps for blog document  any time the objesct is created its going to auto value those properties
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
