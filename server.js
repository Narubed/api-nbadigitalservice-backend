let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let PORT = process.env.PORT || 8002;
require("dotenv").config();
const dbCon = require("./config/db");
const cors = require("cors");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const corsOptions = {
  origin: "*",
  credentials: true,
};
app.use(cors(corsOptions));

const getAllProvince = require("./models/province/getAllProvince");
const getAllAmphur = require("./models/amphur/getAllAmphur");
const getAllDistrict = require("./models/district/getAllDistrict");
const getAllGeo = require("./models/geo/getAllGeo");
const getAllNBAGeo = require("./models/geo/getAllNBAGeo");
const getAllZone = require("./models/zone/getAllZone");
const postProvince = require("./models/province/postProvince");
const postAmphur = require("./models/amphur/postAmphur");
const postDistrict = require("./models/district/postDistrict");
const joinGeoProvince = require("./models/joinGEO/joinNbaGeoProvince");
const joinNbaGeoProvince = require("./models/joinGEO/joinNbaGeoProvince");
const joinZoneProvince = require("./models/joinGEO/joinZoneProvince");
const joinNbdGeoProvinceAmphurDistrict = require("./models/joinGEO/joinNbdGeoProvinceAmphurDistrict");
const joinNbdEgoProvinceAmphur = require("./models/joinGEO/joinNbdGeoProvinceAmphur");
const loginUsers = require("./models/users/loginUsers");
// put
const putProvince = require("./models/province/putProvince");
const putAmphur = require("./models/amphur/putAmphur");
const putDistrict = require("./models/district/putDistrict");

// delete
const deleteProvince = require("./models/province/deleteProvince");
const deleteAmphur = require("./models/amphur/deleteAmphur");
const deleteDistrict = require("./models/district/deleteDistrict");
// homepage route
const api = "/api/nba-geo";
app.get("/", (req, res) => {
  return res.send({
    error: false,
    message: "Welcome to RESTful CRUD API with NodeJS, Express, MYSQL",
    written_by: "Narubed ",
  });
});

// login
app.post(api + "/login", loginUsers);

app.post(api + "/provinces", getAllProvince);
app.post(api + "/districts", getAllDistrict);
app.post(api + "/amphures", getAllAmphur);
app.post(api + "/geo", getAllGeo);
app.post(api + "/nba-geo", getAllNBAGeo);
app.post(api + "/zone", getAllZone);
// join
app.post(api + "/join_geo_province", joinGeoProvince);
app.post(api + "/join_nba_geo_province", joinNbaGeoProvince);
app.post(api + "/join_nba_zone_province", joinZoneProvince);

app.post(api + "/join_nba_geo_province_amphur", joinNbdEgoProvinceAmphur);
app.post(
  api + "/join_nba_geo_province_amphur_district",
  joinNbdGeoProvinceAmphurDistrict
);

//put
app.put(api + "/province", putProvince);
app.put(api + "/amphure", putAmphur);
app.put(api + "/district", putDistrict);

// delete
app.delete(api + "/province/:id", deleteProvince);
app.delete(api + "/amphure/:id", deleteAmphur);
app.delete(api + "/district/:id", deleteDistrict);

app.post(api + "/province", postProvince);
app.post(api + "/amphure", postAmphur);
app.post(api + "/district", postDistrict);

app.post(api + "/sms", require("./models/api.dtac/postSMS"));

app.listen(PORT, () => {
  console.log("Node App is running on port =", PORT);
});

module.exports = app;
