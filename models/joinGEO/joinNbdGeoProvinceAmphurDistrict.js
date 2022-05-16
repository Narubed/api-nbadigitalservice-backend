const dbCon = require("../../config/db.js");
module.exports = joinNbdEgoProvinceAmphurDistrict = async (req, res) => {
  if (!req.body.tokenKey || req.body.tokenKey !== process.env.TOKEN_KEY) {
    res.send({ message: "tokenKey ไม่ถูกต้อง" });
    console.log("error");
  } else {
    dbCon.query(
      "SELECT * FROM nba_geography INNER JOIN nba_province ON nba_geography.nba_geo_id = nba_province.nba_geo_id INNER JOIN nba_amphur ON nba_province.province_id = nba_amphur.province_id INNER JOIN nba_district ON nba_amphur.amphur_id = nba_district.amphur_id",
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
