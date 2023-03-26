const { Sequelize } = require("sequelize");
const configDB = require("../config/database");

const Post = require("../app/models/Post");

const connection = new Sequelize(
  configDB.database,
  configDB.username,
  configDB.password,
  {
    dialect: configDB.dialect,
    host: configDB.host,
  }
);
try {
  connection.authenticate();
  console.log("Banco de dados rodando com sucesso");
} catch (error) {
  console.log("[ERROR]:", error);
}

Post.init(connection);

module.exports = connection;
