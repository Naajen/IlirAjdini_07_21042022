const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//importation du dbconnect
const dbconnect = require('../utils/mysqlBD');
//Avoir acces a la BD
const db = dbconnect.getDB();


//Surment ici à mettre le getDB.db.query("SELECT * FROM ma_table");
