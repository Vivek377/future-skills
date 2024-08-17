const express = require("express");
const cors = require("cors");
const connection = require("./db");
const cardRoute = require("./routes/card.routes");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.use(cardRoute)

app.get("/ping", () => {
  res.send("Working");
});

app.listen(process.env.PORT, async (req, res) => {
  try {
    await connection;
    console.log("connected");
  } catch (e) {
    console.log(e);
  }
});
