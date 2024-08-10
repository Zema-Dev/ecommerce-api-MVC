import administratorModel, { IAdministrator } from "../models/adminModel";
import bcrypt from "bcrypt";

// Récupérer tous les administrateurs
export const getAllAdministrators = async (): Promise<IAdministrator[]> => {
  try {
    const administrators = await administratorModel.find().exec();
    return administrators;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Récupérer un administrateur par ID
export const getAdministratorById = async (
  adminId: string
): Promise<IAdministrator | null> => {
  try {
    return await administratorModel.findById(adminId).exec();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Récupérer un administrateur par email
export const getAdministratorByEmail = async (
  email: string
): Promise<IAdministrator | null> => {
  try {
    return await administratorModel.findOne({ email }).exec();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Créer un nouvel administrateur
export const createAdministrator = async (
  admin: IAdministrator
): Promise<IAdministrator> => {
  try {
    const hashedPassword = await bcrypt.hash(admin.password, 10);
    const newAdmin = new administratorModel({
      ...admin,
      password: hashedPassword,
    });
    return await newAdmin.save();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Mettre à jour un administrateur existant
export const updateAdministrator = async (
  adminId: string,
  newAdmin: Partial<IAdministrator>
): Promise<IAdministrator | null> => {
  try {
    if (newAdmin.password) {
      const hashedPassword = await bcrypt.hash(newAdmin.password, 10);
      newAdmin.password = hashedPassword;
    }
    return await administratorModel
      .findByIdAndUpdate(adminId, newAdmin, { new: true })
      .exec();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Supprimer un administrateur
export const deleteAdministrator = async (
  adminId: string
): Promise<IAdministrator | null> => {
  try {
    return await administratorModel.findByIdAndDelete(adminId).exec();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
