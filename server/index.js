const express = require("express");
const app = express();
const massive = require("massive");
require("dotenv").config();
app.use(express.json());
const session = require("express-session");

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;

const { register } = require("./userController");

app.use(
  session({
    saveUninitialized: false,
    secret: SESSION_SECRET,
    resave: true,
    cookie: {
      maxAge: 1209600000 // 2week cookie
    }
  })
);

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db is connected");
});

// user EndPoints
app.post("/api/register", register);

app.listen(SERVER_PORT, () => console.log(`Listening on PORT ${SERVER_PORT}`));
