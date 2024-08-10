// import express from "express";
// import {
//   getCarts,
//   getCartItems,
//   addCartItem,
//   updateCartItem,
//   removeItemFromCart,
//   clearCart,
// } from "../controllers/cartController";

// const CartRouter = express.Router();

// // Route pour obtenir tous les paniers d'un utilisateur
// CartRouter.route("/:userId").get(getCarts);

// // Route pour obtenir tous les éléments d'un panier spécifique
// CartRouter.route("/items/:cartId").get(getCartItems);

// // Route pour ajouter un élément à un panier spécifique
// CartRouter.route("/:cartId/items").post(addCartItem);

// // Route pour mettre à jour un élément dans un panier
// CartRouter.route("/items/:cartItemId")
//   .put(updateCartItem)
//   .delete(removeItemFromCart);

// // Route pour vider tous les éléments d'un panier spécifique
// CartRouter.route("/:cartId").delete(clearCart);

// export default CartRouter;

import express from "express";
import CartController from "../controllers/cartController";

const CartRouter = express.Router();

CartRouter.post("/", CartController.createCart);
CartRouter.get("/:id", CartController.getCartById);
CartRouter.put("/:id", CartController.updateCart);
CartRouter.delete("/:id", CartController.deleteCart);
CartRouter.get("/", CartController.getAllCarts);

export default CartRouter;
