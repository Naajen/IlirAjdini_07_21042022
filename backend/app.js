const express = require('express');
const mysql = require('mysql');
const MySQL = require('mysql-database');
require('dotenv').config();

const connectionDB = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : process.env.mysqlWorld,
    database : process.env.DB
})
//.then(() => console.log('Connexion à la DB réussie !')) //si la connection est bonne
//.catch(() => console.log('Connexion à la DB échouée !')); //si la connection n'est pas bonne

module.exports.getDB = function()
    {
    return connectionDB;
    }


const app = express();

//retire les erreurs CORS / cross origin ressource sharing entre donne l'acces au partage de fichiers entre les localhost des serveurs
app.use((req, res, next) => {
    //Permet d'accéder à l'api depuis n'importe quelle origine
    res.setHeader('Access-Control-Allow-Origin', '*');
    //Permet d'ajouter les headers mentionnée aux requêtes envoyées vers l'api
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    //Permet d'envoyer avec le CRUD (create => post, read => get, update => put, delete => delete) les plus importante
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); //put et patch font sensiblement la meme chose
    next();
});

app.use(express.json());

//exportation du module app pour les autres fichiers s'il n'est pas présent un  "app.set('port', port); erreur" 
module.exports = app;