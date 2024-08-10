// import express from "express";
// import {
//   createPayment,
//   deletePayment,
//   getPaymentById,
//   getPayments,
//   updatePaymentStatus,
// } from "../controllers/paymentController";

// const PaymentRouter = express.Router();

// // Route pour obtenir tous les paiements
// PaymentRouter.route("/").get(getPayments).post(createPayment);

// // Route pour obtenir un paiement spécifique par ID
// PaymentRouter.route("/:paymentId")
//   .get(getPaymentById)
//   .put(updatePaymentStatus)
//   .delete(deletePayment);

// export default PaymentRouter;

import express from "express";
import PaymentController from "../controllers/paymentController";

const PaymentRouter = express.Router();

PaymentRouter.post("/", PaymentController.createPayment);
PaymentRouter.get("/:id", PaymentController.getPaymentById);
PaymentRouter.put("/:id", PaymentController.updatePayment);
PaymentRouter.delete("/:id", PaymentController.deletePayment);
PaymentRouter.get("/", PaymentController.getAllPayments);

export default PaymentRouter;
