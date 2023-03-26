const express = require("express");
const App = express();

const cors = require("cors");
const routes = require("./routes");
require("./database");

App.use(cors());
App.use(express.urlencoded({ extended: true }));
App.use(express.json());

App.use(routes);

module.exports = App;
