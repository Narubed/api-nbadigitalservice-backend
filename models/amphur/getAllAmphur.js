const dbCon = require("../../config/db.js");
module.exports = getAllAmphur = async (req, res) => {
  console.log(req.body);
  if (!req.body.tokenKey || req.body.tokenKey !== process.env.TOKEN_KEY) {
    res.send({ message: "tokenKey ไม่ถูกต้อง" });
    console.log("error");
  } else {
    dbCon.query("SELECT * FROM nba_amphur", (error, results, fields) => {
      if (error) console.log("get All amphur = ");
      let message = "";
      if (results === undefined || results.length == 0) {
        message = "amphur table is empty";
      } else {
        message = "Successfully retrieved all amphur";
      }
      return res.send({
        error: false,
        data: results,
        message: message,
      });
    });
  }
};
