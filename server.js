const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 8080;

app.get("/", function (req, res) {
  res.send("Welcome to Pen & Paper Server!");
});

const entriesRoutes = require("./routes/entriesRoute");
const templatesRoutes = require("./routes/templatesRoute");

app.use("/entries", entriesRoutes);
app.use("/templates", templatesRoutes);

app.listen(PORT, () => {
  console.log(`🚀🚀 Server running at http://localhost:${PORT} 🚀🚀`);
});
