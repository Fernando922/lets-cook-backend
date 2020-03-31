const express = require("express");
const categoryController = require("./controllers/categoryController");
const recipeController = require("./controllers/recipeController");
const ingredientController = require("./controllers/ingredientController");
const prepareModeController = require("./controllers/prepareModeController");
const tipController = require("./controllers/tipController");

const routes = express.Router();

routes.post("/categories", categoryController.store);
routes.get("/categories", categoryController.index);
routes.delete("/categories/:id", categoryController.delete);

routes.post("/recipes", recipeController.store);
routes.get("/recipes", recipeController.index);

routes.post("/ingredients", ingredientController.store);
routes.get("/ingredients", ingredientController.index);
routes.delete("/ingredients/:id", ingredientController.delete);

routes.post("/prepareModes", prepareModeController.store);
routes.get("/prepareModes", prepareModeController.index);
routes.delete("/prepareModes/:id", prepareModeController.delete);

routes.post("/tips", tipController.store);
routes.get("/tips", tipController.index);
routes.delete("/tips/:id", tipController.delete);

module.exports = routes;
