const CardModel = require("../model/card.model");

const getCards = async (req, res) => {
  try {
    const { q } = req.query;

    if (q) {
      const regex = new RegExp(q, "i");

      const cards = await CardModel.find({
        $or: [{ title: { $regex: regex } }, { description: { $regex: regex } }],
      });

      res.status(200).send(cards);
    } else {
      const cards = await CardModel.find({});
      res.status(200).send(cards);
    }
  } catch (e) {
    console.log(e);
    res.status(400).error({ err: e.message });
  }
};

const getCard = async (req, res) => {
  try {
    const { title } = req.params;
    const card = await CardModel.findOne({ title });

    if (!card) {
      return res.status(404).json({ error: "Card not found" });
    }

    res.status(200).send(card);
  } catch (e) {
    console.log(e);
    res.status(400).error({ err: e.message });
  }
};

const addCards = async (req, res) => {
  try {
    const card = new CardModel(req.body);
    await card.save();
    res.status(200).send({ msg: "Card Saved" });
  } catch (e) {
    console.log(e);
    res.status(400).error({ err: e.message });
  }
};

module.exports = { getCard, getCards, addCards };
