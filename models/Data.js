const { Schema, model } = require("mongoose");

const dataSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      default: ""
    },
    description: {
      type: String,
      trim: true,
      default: ""
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Data = model("data", dataSchema);
module.exports = Data;
