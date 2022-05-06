const { Sequelize } = require('sequelize');

const db = new Sequelize(
  {
    dialect: "mysql",
    host: "localhost",        
    username: "root",
    password: "12345",
    database: "groupomania"    
  },
);
db.authenticate().then(() => {
    console.log('>>>>>>>>>>>>>>>Connection successfully<<<<<<<<<<<<<<<');
  })
  .catch((err) => {
    console.error(err);
});

module.exports = db;