const db=require('mysql2');

const dbservice=db.createConnection({
    host:"localhost",
    user:"root",
    password:"Sanjaybhai4581",
    database:"sanjaydb1"
})
module.exports=dbservice;
