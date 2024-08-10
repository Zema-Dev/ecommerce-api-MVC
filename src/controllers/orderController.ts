import { Request, Response, NextFunction } from "express";
import * as orderService from "../services/orderService";
import { ErrorHandler } from "../utils/errorHandler";

export const getAllOrders = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const orders = await orderService.getAllOrders();
    if (orders.length === 0) {
      return res.status(200).json({
        status: 200,
        data: orders,
        message: "Aucune commande trouvée.",
      });
    }
    return res.status(200).json({
      status: 200,
      data: orders,
      message: "Commandes récupérées avec succès.",
    });
  } catch (error) {
    next(new ErrorHandler(500, "Erreur serveur"));
  }
};

export const getOrderById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = await orderService.getOrderById(req.params.orderId);
    if (order) {
      return res.status(200).json({
        status: 200,
        data: order,
        message: "Commande récupérée avec succès.",
      });
    } else {
      next(new ErrorHandler(404, "Commande non trouvée"));
    }
  } catch (error) {
    next(new ErrorHandler(500, "Erreur serveur"));
  }
};

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = await orderService.createOrder(req.body);
    return res.status(201).json({
      status: 201,
      data: order,
      message: "Commande créée avec succès.",
    });
  } catch (error) {
    next(new ErrorHandler(400, "Erreur lors de la création de la commande"));
  }
};

export const updateOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = await orderService.updateOrder(req.params.orderId, req.body);
    if (order) {
      return res.status(200).json({
        status: 200,
        data: order,
        message: "Commande mise à jour avec succès.",
      });
    } else {
      next(new ErrorHandler(404, "Commande non trouvée"));
    }
  } catch (error) {
    next(new ErrorHandler(400, "Erreur lors de la mise à jour de la commande"));
  }
};

export const deleteOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = await orderService.deleteOrder(req.params.orderId);
    if (order) {
      return res.status(200).json({
        status: 200,
        message: "Commande supprimée avec succès.",
      });
    } else {
      next(new ErrorHandler(404, "Commande non trouvée"));
    }
  } catch (error) {
    next(new ErrorHandler(500, "Erreur serveur"));
  }
};
