const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const CardModel = mongoose.model("card", CardSchema);

module.exports = CardModel;
