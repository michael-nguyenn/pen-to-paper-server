const express = require("express");
const cors = require("cors");
const entriesRoutes = require("./routes/entriesRoute");

require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

app.get("/", function (req, res) {
  res.send("Welcome to Pen & Paper Server!");
});

app.use("/entries", entriesRoutes);

app.listen(PORT, () => {
  console.log(`🚀🚀 Server running at http://localhost:${PORT} 🚀🚀`);
});
