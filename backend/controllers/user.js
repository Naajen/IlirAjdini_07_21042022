const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');
const connectionDB = require("../utils/mysqlDB")

// S'inscrire
exports.signup = (req, res) => {
  bcrypt.hash(req.body.password,10)
    .then((hash) => {
      const user = {
        name: req.body.name,
        email: req.body.email,
        password:hash
      }
      //request SQL table users
      connectionDB.query(
        'INSERT INTO users SET ?', user, (error, results, fields) => {
          if (error) {
            res.json ({error});
          } else {
            console.log(results);
            res.json ({ message : "users créer"});
          }
        }
      )
    })
    .catch((error) => res.status(500).json({error}))
}





//Emplacement du CRUD pour la DB >>> à voir comment cela fonctionne getDB.db.query("SELECT * FROM ma_table");
