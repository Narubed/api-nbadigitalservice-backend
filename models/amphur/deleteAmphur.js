const connection = require("../../config/db.js");
module.exports = deleteAmphur = (req, res) => {
  console.log("amphur_id", req.params.id);
  console.log(req.body);
  let amphur_id = req.params.id;
  if (!amphur_id) {
    return res.status(400).send({
      error: true,
      message: "Please provide deleteAmphur id",
    });
  } else if (
    !req.body.tokenKey ||
    req.body.tokenKey !== process.env.TOKEN_KEY
  ) {
    res.send({ message: "tokenKey ไม่ถูกต้อง" });
    console.log("error");
  } else {
    connection.query(
      "DELETE FROM nba_amphur WHERE amphur_id = ?",
      [amphur_id],
      (error, results, fields) => {
        // if (error) throw error;

        let message = "";
        if (results.affectedRows === 0) {
          message = "deleteAmphur not found";
        } else {
          message = "vdeleteAmphur successfully deleted";
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
