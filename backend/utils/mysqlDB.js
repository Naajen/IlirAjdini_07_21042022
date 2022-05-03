//import mysql
const mysql = require('mysql')

//paramètre de connexion à la Database
const connectionDB = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'groupomania'
})
//Connexion à la BDD
connectionDB.connect(function (err) {
    if (err) 
    throw err;
    console.log(">>>>Connecté à la base de données MySQL!<<<<");
})

module.exports = connectionDB;