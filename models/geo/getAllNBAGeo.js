const dbCon = require("../../config/db.js");
module.exports = getAllEgo = async (req, res) => {
  dbCon.query("SELECT * FROM nba_geography", (error, results, fields) => {
    if (error) console.log("get All getAllNBAEgo error");
    let message = "";
    if (results === undefined || results.length == 0) {
      message = "getAllNBAEgo table is empty";
    } else {
      message = "Successfully getAllNBAEgo";
    }
    return res.send({
      error: false,
      data: results,
      message: message,
    });
  });
};
