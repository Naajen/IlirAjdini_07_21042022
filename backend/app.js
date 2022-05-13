const express = require ('express')
const helmet = require('helmet');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config/db');
const cors = require("cors");

const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');



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
app.use(helmet({crossOriginResourcePolicy: false,}));
app.use(bodyParser.json());
app.use(cors());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/auth', userRoutes);
app.use('/api/posts', postRoutes);
//exportation du module app pour les autres fichiers s'il n'est pas présent un  "app.set('port', port); erreur" 
module.exports = app;