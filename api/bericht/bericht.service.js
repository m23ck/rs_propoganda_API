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
  updateBericht: (data, callBack) => {
    pool.query(
      `update bericht set bericht = ?, datum = ? where bericht_id = ?`,
      [
        data.bericht,
        data.datum
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteBericht: (data, callBack) => {
    pool.query(
      `delete from bericht where bericht_id = ?`,
      [data.bericht_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};
