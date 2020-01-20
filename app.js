require("dotenv").config();
const express = require("express");
const app = express();
const gebruikerRouter = require("./api/gebruikers/gebruiker.router")

app.use(express.json());


app.use("/api/gebruikers", gebruikerRouter);
app.listen(process.env.APP_PORT, ()=>{
    console.log("Server running on port", process.env.APP_PORT);
})