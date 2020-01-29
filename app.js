require("dotenv").config();
var cors = require('cors')
const express = require("express");
const app = express();
const gebruikerRouter = require("./api/gebruikers/gebruiker.router");
const typeRouter = require("./api/type/type.router");
const ressortRouter = require("./api/ressort/ressort.router");
const presentieRouter = require("./api/presentie/presentie.router");

//Remove when in production

app.use(cors())

app.use(express.json());

app.use("/api/gebruikers", gebruikerRouter);
app.use("/api/type", typeRouter);
app.use("/api/ressort", ressortRouter);
app.use("/api/presentie", presentieRouter);

app.listen(process.env.APP_PORT, () => {
  console.log("Server running on port", process.env.APP_PORT);
});
