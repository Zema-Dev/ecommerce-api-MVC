import { Request, Response, NextFunction } from "express";
import * as cartService from "../services/cartService";
import { ErrorHandler } from "../utils/errorHandler";

export const getAllCarts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const carts = await cartService.getAllCarts();
    if (carts.length === 0) {
      return res.status(200).json({
        status: 200,
        data: carts,
        message: "Aucun panier trouvé.",
      });
    }
    return res.status(200).json({
      status: 200,
      data: carts,
      message: "Paniers récupérés avec succès.",
    });
  } catch (error) {
    next(new ErrorHandler(500, "Erreur serveur"));
  }
};

export const getCartById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cart = await cartService.getCartById(req.params.cartId);
    if (cart) {
      return res.status(200).json({
        status: 200,
        data: cart,
        message: "Panier récupéré avec succès.",
      });
    } else {
      next(new ErrorHandler(404, "Panier non trouvé"));
    }
  } catch (error) {
    next(new ErrorHandler(500, "Erreur serveur"));
  }
};

export const createCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cart = await cartService.createCart(req.body);
    return res.status(201).json({
      status: 201,
      data: cart,
      message: "Panier créé avec succès.",
    });
  } catch (error) {
    next(new ErrorHandler(400, "Erreur lors de la création du panier"));
  }
};

export const updateCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cart = await cartService.updateCart(req.params.cartId, req.body);
    if (cart) {
      return res.status(200).json({
        status: 200,
        data: cart,
        message: "Panier mis à jour avec succès.",
      });
    } else {
      next(new ErrorHandler(404, "Panier non trouvé"));
    }
  } catch (error) {
    next(new ErrorHandler(400, "Erreur lors de la mise à jour du panier"));
  }
};

export const deleteCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cart = await cartService.deleteCart(req.params.cartId);
    if (cart) {
      return res.status(200).json({
        status: 200,
        message: "Panier supprimé avec succès.",
      });
    } else {
      next(new ErrorHandler(404, "Panier non trouvé"));
    }
  } catch (error) {
    next(new ErrorHandler(500, "Erreur serveur"));
  }
};
