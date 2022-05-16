const dbCon = require("../../config/db.js");
module.exports = getAllZone = async (req, res) => {
  console.log(req.body);
  if (!req.body.tokenKey || req.body.tokenKey !== process.env.TOKEN_KEY) {
    res.send({ message: "tokenKey ไม่ถูกต้อง" });
    console.log("error");
  } else {
    dbCon.query("SELECT * FROM nba_zone", (error, results, fields) => {
      if (error) console.log("get All zone error");
      let message = "";
      if (results === undefined || results.length == 0) {
        message = "zone table is empty";
      } else {
        message = "Successfully zone";
      }
      return res.send({
        error: false,
        data: results,
        message: message,
      });
    });
  }
};
