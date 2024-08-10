import { Request, Response, NextFunction } from "express";
import * as paymentService from "../services/paymentService";
import { ErrorHandler } from "../utils/errorHandler";

export const getAllPayments = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const payments = await paymentService.getAllPayments();
    if (payments.length === 0) {
      return res.status(200).json({
        status: 200,
        data: payments,
        message: "Aucun paiement trouvé.",
      });
    }
    return res.status(200).json({
      status: 200,
      data: payments,
      message: "Paiements récupérés avec succès.",
    });
  } catch (error) {
    next(new ErrorHandler(500, "Erreur serveur"));
  }
};

export const getPaymentById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const payment = await paymentService.getPaymentById(req.params.id);
    if (payment) {
      return res.status(200).json({
        status: 200,
        data: payment,
        message: "Paiement récupéré avec succès.",
      });
    } else {
      next(new ErrorHandler(404, "Paiement non trouvé"));
    }
  } catch (error) {
    next(new ErrorHandler(500, "Erreur serveur"));
  }
};

export const createPayment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { order, amount, method, status, transactionId } = req.body;
    const payment = await paymentService.createPayment(
      order,
      amount,
      method,
      status,
      transactionId
    );
    return res.status(201).json({
      status: 201,
      data: payment,
      message: "Paiement créé avec succès.",
    });
  } catch (error) {
    next(new ErrorHandler(400, "Erreur lors de la création du paiement"));
  }
};

export const updatePaymentStatus = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const payment = await paymentService.updatePaymentStatus(
      req.params.id,
      req.body.status
    );
    if (payment) {
      return res.status(200).json({
        status: 200,
        data: payment,
        message: "Statut du paiement mis à jour avec succès.",
      });
    } else {
      next(new ErrorHandler(404, "Paiement non trouvé"));
    }
  } catch (error) {
    next(
      new ErrorHandler(
        400,
        "Erreur lors de la mise à jour du statut du paiement"
      )
    );
  }
};

export const deletePayment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const payment = await paymentService.deletePayment(req.params.id);
    if (payment) {
      return res.status(200).json({
        status: 200,
        message: "Paiement supprimé avec succès.",
      });
    } else {
      next(new ErrorHandler(404, "Paiement non trouvé"));
    }
  } catch (error) {
    next(new ErrorHandler(500, "Erreur serveur"));
  }
};
