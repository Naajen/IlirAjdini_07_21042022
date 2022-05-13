# Projet GROUPOMANIA
 
Projet de réseau social d'entreprise


# Lancé l'installation BACKEND

```bash
# Connecté vous à vôtre base de donnée mySQL & Créer les 3 databases
Les 3 databases dans mySQL :
- 1er : groupomania
- 2nd : groupomania_test
- 3eme : groupomania_prod


# install dependencies
$ Projet cd backend
$ npm install
$ npx sequelize-cli init

# Rendez vous dans le fichier "config/config.json"

- Dans development configurer indiquer vôtre "username", "password" la première databases "groupomania"
- Dans test faite pareil  mais changer la databases en "groupomania_test"
- Dans prod faite pareil  mais changer la databases en "groupomania_prod"

# Etablir la migration
$ sequelize db:migrate

# Lancer le server sur  écoute : localhost:3000
$ nodemon serve
```

# Lancé l'installation BACKEND

```bash
# install dependencies
$ Projet cd frontend
$ npm install
# If error
$ npm audit fix --force
# Run frontend
$ npm run serve

```
