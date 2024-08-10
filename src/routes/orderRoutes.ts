// import express from "express";
// import {
//   getOrders,
//   createOrder,
//   getOrderById,
//   getUserOrders,
//   addOrderItem,
//   getOrderItems,
//   updateOrderStatus,
//   updateOrder,
// } from "../controllers/orderController";

// const OrderRouter = express.Router();

// // Route pour obtenir toutes les commandes
// OrderRouter.route("/").get(getOrders).post(createOrder);

// // Route pour obtenir une commande spécifique par ID
// OrderRouter.route("/:orderId").get(getOrderById).put(updateOrder);

// // Route pour obtenir les commandes d'un utilisateur spécifique
// OrderRouter.route("/user/:id").get(getUserOrders);

// // Route pour ajouter un article à une commande
// OrderRouter.route("/item").post(addOrderItem);

// // Route pour obtenir les articles d'une commande spécifique
// OrderRouter.route("/items/:orderId").get(getOrderItems);

// // Route pour mettre à jour le statut d'une commande spécifique
// OrderRouter.route("/status/:orderId").put(updateOrderStatus);

// export default OrderRouter;

import express from "express";
import OrderController from "../controllers/orderController";

const OrderRouter = express.Router();

OrderRouter.post("/", OrderController.createOrder);
OrderRouter.get("/:id", OrderController.getOrderById);
OrderRouter.put("/:id", OrderController.updateOrder);
OrderRouter.delete("/:id", OrderController.deleteOrder);
OrderRouter.get("/", OrderController.getAllOrders);

export default OrderRouter;
