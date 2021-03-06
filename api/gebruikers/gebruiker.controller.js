const {
    create,
    getGebruikerById,
    getGebruikers,
    updateGebruiker,
    deleteGebruiker,
    getGebruikerByGebruikernaam
} = require("./gebruiker.service");

const {
    genSaltSync,
    hashSync,
    compareSync
} = require("bcrypt");
const {
    sign
} = require("jsonwebtoken");

module.exports = {
    createGebruiker: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.wachtwoord = hashSync(body.wachtwoord, salt);
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    getGebruikerById: (req, res) => {
        const gebruiker_id = req.params.gebruiker_id;
        getGebruikerById(gebruiker_id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.status(404).json({
                    succes: 0,
                    message: "Record niet gevonden!"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    getGebruikers: (req, res) => {
        getGebruikers((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.status(204).json({
                    success: 0,
                    message: "Op dit moment is er niet genoeg data om op te halen"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    updateGebruiker: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.wachtwoord = hashSync(body.wachtwoord, salt);
        const gebruiker_id = req.params.gebruiker_id;
        getGebruikerById(gebruiker_id, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!result) {
                return res.status(404).json({
                    success: 0,
                    message: "Gebruiker bestaat niet!"
                });
            } else {
                updateGebruiker(body, gebruiker_id, (err, results) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    return res.status(200).json({
                        success: 1,
                        message: "update Succesvol!"
                    });
                });
            }
        });


    },
    deleteGebruiker: (req, res) => {
        const data = req.params.gebruiker_id;
        getGebruikerById(data, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!result) {
                return res.status(404).json({
                    success: 0,
                    message: "Gebruiker niet gevonden!"
                });
            } else {
                deleteGebruiker(data, (err) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    return res.status(200).json({
                        success: 1,
                        message: "Gebruiker succesvol verwijderd!"
                    });
                });
            }
        });

    },
    login: (req, res) => {
        const body = req.body;
        getGebruikerByGebruikernaam(body.gebruikernaam, (err, results) => {
            if (err) {
                console.log(err);
            }
            if (!results) {
                return res.status(401).json({
                    success: 0,
                    data: "gebruikersnaam of wachtwoord onjuist!"
                });
            }
            const result = compareSync(body.wachtwoord, results.wachtwoord);
            // incase theres an error when testing this moet je ipv results.wachtwoord: results[0].wachtwoord schrijven
            if (result) {
                results.wachtwoord = undefined;
                const jsonToken = sign({
                    result: results
                }, process.env.KEY, {
                    expiresIn: "10h"
                });
                return res.status(200).json({
                    success: 1,
                    message: "Login Succesvol",
                    token: jsonToken,
                    gebruiker_id: results.gebruiker_id
                });
            } else {
                return res.status(401).json({
                    success: 0,
                    data: "gebruikersnaam of wachtwoord onjuist!"
                });
            }
        });
    }
};