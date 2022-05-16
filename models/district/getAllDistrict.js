const dbCon = require("../../config/db.js");
module.exports = getAllDistrict = async (req, res) => {
  console.log(req.body);
  if (!req.body.tokenKey || req.body.tokenKey !== process.env.TOKEN_KEY) {
    res.send({ message: "tokenKey ไม่ถูกต้อง" });
    console.log("error");
  } else {
    dbCon.query("SELECT * FROM nba_district", (error, results, fields) => {
      if (error) console.log("get All district = ");
      let message = "";
      if (results === undefined || results.length == 0) {
        message = "district table is empty";
      } else {
        message = "Successfully retrieved all district";
      }
      return res.send({
        error: false,
        data: results,
        message: message,
      });
    });
  }
};
