const pool = require("../../config/config");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into bericht(bericht, gebruiker_id) values(?,?)`,
      [
        data.bericht,
        data.gebruiker_id
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getBericht: callBack => {
    pool.query(
      `select bericht_id, bericht, datum, gebruiker_id from bericht`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getBerichtById: (bericht_id, callBack) => {
    pool.query(
      `select bericht_id, bericht, datum, gebruiker_id from bericht where bericht_id = ?`,
      [bericht_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateBericht: (bericht_id, bericht, callBack) => {
    pool.query(
      `update bericht set bericht = ? where bericht_id = ?`,
      [
        bericht_id,
        bericht
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteBericht: (bericht_id, callBack) => {
    pool.query(
      `delete from bericht where bericht_id = ?`,
      [bericht_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};
