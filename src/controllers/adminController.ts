import { Request, Response, NextFunction } from "express";
import * as administratorService from "../services/adminService";
import { ErrorHandler } from "../utils/errorHandler";

export const getAllAdministrators = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const administrators = await administratorService.getAllAdministrators();

    if (administrators.length === 0) {
      return res.status(200).json({
        status: 200,
        data: administrators,
        message: "Aucun administrateur trouvé.",
      });
    }

    return res.status(200).json({
      status: 200,
      data: administrators,
      message: "Administrateurs récupérés avec succès.",
    });
  } catch (error) {
    next(new ErrorHandler(500, "Erreur serveur"));
  }
};

export const getAdministratorById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const admin = await administratorService.getAdministratorById(
      req.params.adminId
    );

    if (admin) {
      return res.status(200).json({
        status: 200,
        data: admin,
        message: "Administrateur récupéré avec succès.",
      });
    } else {
      next(new ErrorHandler(404, "Administrateur non trouvé"));
    }
  } catch (error) {
    next(new ErrorHandler(500, "Erreur serveur"));
  }
};

export const getAdministratorByEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const admin = await administratorService.getAdministratorByEmail(
      req.params.email
    );

    if (admin) {
      return res.status(200).json({
        status: 200,
        data: admin,
        message: "Administrateur récupéré avec succès.",
      });
    } else {
      next(new ErrorHandler(404, "Administrateur non trouvé"));
    }
  } catch (error) {
    next(new ErrorHandler(500, "Erreur serveur"));
  }
};

export const createAdministrator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const admin = await administratorService.createAdministrator(req.body);
    return res.status(201).json({
      status: 201,
      data: admin,
      message: "Administrateur créé avec succès.",
    });
  } catch (error) {
    next(
      new ErrorHandler(400, "Erreur lors de la création de l'administrateur")
    );
  }
};

export const updateAdministrator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const admin = await administratorService.updateAdministrator(
      req.params.adminId,
      req.body
    );

    if (admin) {
      return res.status(200).json({
        status: 200,
        data: admin,
        message: "Administrateur mis à jour avec succès.",
      });
    } else {
      next(new ErrorHandler(404, "Administrateur non trouvé"));
    }
  } catch (error) {
    next(
      new ErrorHandler(400, "Erreur lors de la mise à jour de l'administrateur")
    );
  }
};

export const deleteAdministrator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const admin = await administratorService.deleteAdministrator(
      req.params.adminId
    );

    if (admin) {
      return res.status(200).json({
        status: 200,
        message: "Administrateur supprimé avec succès.",
      });
    } else {
      next(new ErrorHandler(404, "Administrateur non trouvé"));
    }
  } catch (error) {
    next(new ErrorHandler(500, "Erreur serveur"));
  }
};
