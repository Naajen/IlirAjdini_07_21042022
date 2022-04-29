const mysql = require('mysql');

const connectionDB = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'L49r0ss3d3r3-93',
    database : 'groupomania'
})
connectionDB.connect(function (err) {
    if (err) 
    throw err;
    console.log(">>>>Connecté à la base de données MySQL!<<<<");
})
//.then(() => console.log('Connexion à la DB réussie !')) //si la connection est bonne
//.catch(() => console.log('Connexion à la DB échouée !')); //si la connection n'est pas bonne

module.exports.getDB = function()
{
    return connectionDB;
}

