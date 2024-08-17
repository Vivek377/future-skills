const express=require("express");
const { getCards, addCards, getCard } = require("../controller/card.controller");

const cardRoute=express.Router();

cardRoute.get("/cards",getCards)
cardRoute.post("/cards",addCards);
cardRoute.get("/cards/:title", getCard)

module.exports=cardRoute;
