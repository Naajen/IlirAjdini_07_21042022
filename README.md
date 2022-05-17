# Projet GROUPOMANIA
En tant que developpeur et travaillant dans la société CONNECT-E, depuis plus de un ans. Ma mission à été de réaliser le réseau social d'entreprise "Groupomania". Le Site actuellement en MVP, il est en cour d'élaboration, mais reste néanmoins une version testable et utilisable

# Voici les exigences émises par le comité de pilotage :

* la présentation des fonctionnalités doit être simple ;
* la création d’un compte doit être simple et possible depuis un téléphone mobile ;
* le profil doit contenir très peu d’informations pour que sa complétion soit rapide ;
* la suppression du compte doit être possible ;
* l’accès à un forum où les salariés publient des contenus multimédias doit être présent ;
* l’accès à un forum où les salariés publient des textes doit être présent ;
* les utilisateurs doivent pouvoir facilement repérer les dernières participations des employés ;
* le ou la chargé-e de communication Groupomania doit pouvoir modérer les interactions entre
salariés ;

# Lancez l'installation BACK-END

```bash
# Connectez vous à votre base de donnée MySQL & Créez les 3 databases
Les 3 databases dans mySQL :
- 1er : groupomania
- 2nd : groupomania_test
- 3eme : groupomania_prod


# install dependencies
$ Projet/cd backend
$ npm install
$ npx sequelize-cli init

# Rendez vous dans le fichier "db.js"
Changer les paramètres suivant:
    username: "votre root ou username",
    password: "votre mot de passe",
    database: "votre base de donnée"

# Rendez vous dans le fichier "config/config.json"

- Dans "development" configurez et indiquez votre "username", "password" la première database "groupomania"
- Dans "test" faites pareil mais changer la database en "groupomania_test"
- Dans "prod" faites pareil mais changer la database en "groupomania_prod"

# Etablir la migration
Ajouter les tables dans la base de données Users,Comments et Posts avec les paramètres présent dans le dossier migration

# Lancez le server sur écoute : localhost:3000
$ nodemon serve
```

# Lancez l'installation FRONT-END

```bash
# install dependencies
$ Projet/cd frontend
$ npm install

# If error
$ npm audit fix --force

# Run frontend : localhost:8080
$ npm run serve

```
