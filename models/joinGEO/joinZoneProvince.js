const dbCon = require("../../config/db.js");
module.exports = joinZoneProvince = async (req, res) => {
  if (!req.body.tokenKey || req.body.tokenKey !== process.env.TOKEN_KEY) {
    res.send({ message: "tokenKey ไม่ถูกต้อง" });
    console.log("error");
  } else {
    dbCon.query(
      "SELECT * FROM nba_zone INNER JOIN nba_province ON nba_zone.nba_zone = nba_province.nba_zone",
      (error, results, fields) => {
        if (error) console.log("ไม่สามารถดึงข้อมูลได้");
        let message = "";
        if (results === undefined || results.length == 0) {
          message = "หาค่าไม่เจอ";
        } else {
          message = "Successfully ข้อมูล zone ของ nba + จังหวัด";
        }
        return res.send({
          error: false,
          data: results,
          message: message,
        });
      }
    );
  }
};
