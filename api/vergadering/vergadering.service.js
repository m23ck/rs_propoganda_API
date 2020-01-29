const pool = require("../../config/config");


module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into vergadering(ressort_id, datum, sprekers) values(?,?,?)`,
            [
                data.ressort_id,
                data.datum,
                data.sprekers
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        );
    },
    getVergadering: callBack => {
        pool.query(
            `select * from vergadering inner join ressort on vergadering.ressort_id=ressort.ressort_id`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getVergaderingById: (vergader_id, callBack) => {
        pool.query(`select * from vergadering inner join ressort on vergadering.ressort_id=ressort.ressort_id where vergader_id = ?`,
            [vergader_id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    updateVergadering: (data, callBack) => {
        pool.query(`update vergadering set ressort_id = ?, datum = ?, sprekers = ? where vergader_id = ?`,
            [
                data.vergader_id,
                data.ressort_id,
                data.datum,
                data.sprekers,
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    deleteVergadering: (vergader_id, callBack) => {
        pool.query(
            `delete from vergadering where vergader_id = ?`,
            [vergader_id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
};