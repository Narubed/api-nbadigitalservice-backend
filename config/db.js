let mysql = require('mysql2');
// connection to mysql database

var dbCon = mysql.createConnection({
    host: '163.44.198.61',
    user: 'cp383586_aof',
    password: '*9111NBADigital',
    database: 'cp383586_thailand'
    // host: '203.159.92.65',
    // user: 'nbadigit_express',
    // password: 'U18XcYBs',
    // database: 'nbadigit_express'
})
dbCon.connect();
module.exports = dbCon;