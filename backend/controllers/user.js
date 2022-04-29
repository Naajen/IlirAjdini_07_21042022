const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//importation du dbconnect
const dbconnect = require('../utils/mysqlBD');
//Avoir acces a la BD
const dbc = dbconnect.getDB();


exports.signup = async (req, res) => {
    const { password } = req.body
    //salage surcouche  mdp
    const salt = await bcrypt.genSalt(10) 
    const hashPassword = await bcrypt.hash(password, salt) 
    const user = { ...req.body, hashPassword }
  
    let sql = 'SELECT u.* FROM users AS u WHERE u.nom = ?'
    db.query(sql, [user.nom], function (err, result, fields) {
      if (result.length > 0) {
        res.status(401).json({ message: 'Pseudo déja utilisé' })
        return
      } else {
        sql =
          'INSERT INTO users (users.nom, users.prenom, users.email, users.password)  VALUES (?,?,?,?)'
        db.query(
          sql,
          [user.nom, user.prenom, user.email, user.hashPassword],
          function (err, result, fields) {
            if (!result) {
              res.status(400).json({ message: 'email déjà utilisé' })
            } else {
              res.status(201).json({ message: 'user créé' })
            }
          }
        )
      }
    })
}





//Emplacement du CRUD pour la DB >>> à voir comment cela fonctionne getDB.db.query("SELECT * FROM ma_table");
