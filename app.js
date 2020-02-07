require("dotenv").config();
var cors = require('cors')
const express = require("express");
const morgan = require("morgan");
var bodyParser = require('body-parser')

const app = express();
const gebruikerRouter = require("./api/gebruikers/gebruiker.router");
const typeRouter = require("./api/type/type.router");
const ressortRouter = require("./api/ressort/ressort.router");
const presentieRouter = require("./api/presentie/presentie.router");
const berichtRouter = require("./api/bericht/bericht.router");
const vergaderingRouter = require("./api/vergadering/vergadering.router");
const commentaarRouter = require("./api/commentaar/commentaar.router");

//Remove when in production
app.use(cors({
    credentials: true,
    origin: true
}));
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.json());



app.use("/api/gebruikers", gebruikerRouter);
app.use("/api/type", typeRouter);
app.use("/api/ressort", ressortRouter);
app.use("/api/presentie", presentieRouter);
app.use("/api/bericht", berichtRouter);
app.use("/api/vergadering", vergaderingRouter);
app.use("/api/commentaar", commentaarRouter);



app.listen(process.env.APP_PORT, () => {
    console.log("Server running on port", process.env.APP_PORT);
})


//When route does not exist, show the requester this message
app.get('*', (req, res) => {
    res.json({
        message: "Welcome to the RSP API"
    });
});
