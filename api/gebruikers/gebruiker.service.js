const pool = require("../../config/config");


module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into gebruikers(naam, voornaam, adres, telefoonnummer, email, gebruikernaam, wachtwoord, type_id) values(?,?,?,?,?,?,?,?)`,
            [
                data.naam,
                data.voornaam,
                data.adres,
                data.telefoonnummer,
                data.email,
                data.gebruikernaam,
                data.wachtwoord,
                data.type_id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        );
    },
    getGebruikers: callBack => {
        pool.query(
            `select * from gebruikers inner join type on gebruikers.type_id=type.type_id`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getGebruikerById: (gebruiker_id, callBack) => {
        pool.query(`select * from gebruikers inner join type on gebruikers.type_id=type.type_id where gebruiker_id = ?`,
            [gebruiker_id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    updateGebruiker: (data, callBack) => {
        pool.query(`update gebruikers set naam = ?, voornaam = ?, adres = ?, telefoonnummer = ?, email = ?, gebruikernaam = ?, wachtwoord = ?, type_id = ? where gebruiker_id = ?`,
            [
                data.naam,
                data.voornaam,
                data.adres,
                data.telefoonnummer,
                data.email,
                data.gebruikernaam,
                data.wachtwoord,
                data.type_id,
                data.gebruiker_id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    deleteGebruiker: (gebruiker_id, callBack) => {
        pool.query(
            `delete from gebruikers where gebruiker_id = ?`,
            [gebruiker_id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getGebruikerByGebruikernaam: (gebruikernaam, callBack) => {
        pool.query(
            `select * from gebruikers where gebruikernaam = ?`,
            [gebruikernaam],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );

    }
};