const express = require("express");
const routes = express.Router();

const PostController = require("./app/controllers/PostController");

routes.get("/posts", PostController.index);
routes.post("/posts", PostController.store);
routes.get("/posts/:id", PostController.update);
routes.delete("/posts/:id", PostController.delete);
routes.put("/posts/search", PostController.search);

module.exports = routes;
