const dbCon = require("../../config/db.js");
module.exports = join_ego_province = async (req, res) => {
  if (!req.body.tokenKey || req.body.tokenKey !== process.env.TOKEN_KEY) {
    res.send({ message: "tokenKey ไม่ถูกต้อง" });
    console.log("error");
  } else {
    dbCon.query(
      "SELECT * FROM geography INNER JOIN nba_province ON geography.GEO_ID = nba_province.geo_id",
      (error, results, fields) => {
        if (error) console.log("ไม่สามารถดึงข้อมูลได้");
        let message = "";
        if (results === undefined || results.length == 0) {
          message = "หาค่าไม่เจอ";
        } else {
          message = "Successfully ข้อมูล ego ของ nba + จังหวัด";
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
