const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 8080;
const SECRET_KEY = process.env.SECRET_KEY;

// app.use((req, res, next) => {
//   // Signup and login are public URLs that don't require a token
//   if (req.url === "/signup" || req.url === "/login") {
//     next();
//   } else {
//     // Format of request is BEARER <token>. Splitting on ' ' will create an
//     // array where the token is at index 1
//     const token = getToken(req);

//     if (token) {
//       console.log("Auth Token:", token);
//       if (jwt.verify(token, jsonSecretKey)) {
//         // Decode the token to pass along to end-points that may need
//         // access to data stored in the token.
//         req.decode = jwt.decode(token);
//         next();
//       } else {
//         res.status(403).json({ error: "Not Authorized." });
//       }
//     } else {
//       res.status(403).json({ error: "No token. Unauthorized." });
//     }
//   }
// });

// function getToken(req) {
//   return req.headers.authorization.split(" ")[1];
// }

const entriesRoutes = require("./routes/entriesRoute");
const templatesRoutes = require("./routes/templatesRoute");
const signupRoutes = require("./routes/signupRoute");
const loginRoutes = require("./routes/loginRoute");

app.use("/entries", entriesRoutes);
app.use("/templates", templatesRoutes);
app.use("/signup", signupRoutes);
app.use("/login", loginRoutes);

// app.get("/user", (req, res) => {
//   res.json(req.decode);
// });

app.listen(PORT, () => {
  console.log(`🚀🚀 Server running at http://localhost:${PORT} 🚀🚀`);
});
