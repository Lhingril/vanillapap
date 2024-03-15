const mongoose = require ("mongoose")
const { stringify } = require("postcss")


const CategorySchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        unique: true,
      },
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("Category", CategorySchema);