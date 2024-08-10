// import express from "express";
// import {
//   getCategories,
//   getCategoryById,
//   createCategory,
//   updateCategory,
//   deleteCategory,
// } from "../controllers/categoryController";

// const CategoryRouter = express.Router();

// // Route pour obtenir toutes les catégories
// CategoryRouter.route("/").get(getCategories).post(createCategory);

// // Route pour obtenir, mettre à jour ou supprimer une catégorie spécifique
// CategoryRouter.route("/:id")
//   .get(getCategoryById)
//   .put(updateCategory)
//   .delete(deleteCategory);

// export default CategoryRouter;

import express from "express";
import CategoryController from "../controllers/categoryController";

const CategoryRouter = express.Router();

CategoryRouter.post("/", CategoryController.createCategory);
CategoryRouter.get("/:id", CategoryController.getCategoryById);
CategoryRouter.put("/:id", CategoryController.updateCategory);
CategoryRouter.delete("/:id", CategoryController.deleteCategory);
CategoryRouter.get("/", CategoryController.getAllCategories);

export default CategoryRouter;
