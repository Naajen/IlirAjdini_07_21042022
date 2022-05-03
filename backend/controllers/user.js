const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connectionDB = require("../utils/mysqlDB")

// S'inscrire
exports.signup = async (req, res) => {
  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  const sqlInsert = 'INSERT INTO users SET ?';
  if (regex.test(req.body.password)) {
    await bcrypt.hash(req.body.password,10)
    .then((hash) => {
      const user = {
        name: req.body.name,
        email: req.body.email, //Un hashage du mail est posible avec crypto-JS
        password:hash
      }
      //request SQL table users ? évite les injection SQL on envoi le array user après le INSERT
      connectionDB.query(sqlInsert, user, (error, results, fields) => {
          if (error) {
            res.json ({error});
          } else {
            res.json ({ message : "user créer"});
          }
        }
      )
    })
    .catch((error) => res.status(500).json({error}))
  } else {
    return res.status(401).json({
      message: 'Le mot de passe doit avoir au moins 8 caractères, un chiffre, et une majuscule'
    })
  }
}
//Se connecter
exports.login = (req, res, next) => {
    const email = req.body.email;
    const sqlMail = 'SELECT * FROM users WHERE email = ?';
    //vérifier si le compte est déjà existant
    connectionDB.query(sqlMail, email, (err, results, fields) => {
        if (results == 0) {
          return res.status(403).json({ error: 'Utilisateur inéxistant'});
        }
        bcrypt.compare(req.body.password, results[0].password)
        .then((passwordValid) => {
          if (!passwordValid) {
          //si le mdp est INCORRECT
          return res.status(403).json({ error: 'Mdp incorrect'});
          }
          //si le mdp est  CORRECT
          const token = jwt.sign( 
            {userId: results[0].id}, 
            'RANDOM_TOKEN_SECRET', 
            {expiresIn: '24h'}
          )
          //reponse du serve avec userId et le token
          return res.status(200).json ({
            userId: results[0].id,
            token
          })
        })
        .catch((error) => res.status(500).json({ error }))
    })
}

