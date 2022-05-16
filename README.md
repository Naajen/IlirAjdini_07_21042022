# Projet GROUPOMANIA
 
Projet de réseau social d'entreprise


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

# Rendez vous dans le fichier "config/config.json"

- Dans "development" configurez et indiquez votre "username", "password" la première database "groupomania"
- Dans "test" faites pareil mais changer la database en "groupomania_test"
- Dans "prod" faites pareil mais changer la database en "groupomania_prod"

# Etablir la migration
$ sequelize db:migrate

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

# Run frontend
$ npm run serve

```
