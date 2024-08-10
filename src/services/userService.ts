import userModel, { IUser } from "../models/userModel";
import bcrypt from "bcrypt";

export const getAllUsers = async (): Promise<IUser[]> => {
  return userModel.find();
};

export const getUserById = async (userId: string): Promise<IUser | null> => {
  return userModel.findById(userId);
};

export const getUserByEmail = async (email: string): Promise<IUser | null> => {
  return userModel.findOne({ email });
};

export const createUser = async (user: IUser): Promise<IUser> => {
  const hashedPassword = await bcrypt.hash(user.password, 10);
  user.password = hashedPassword;
  return userModel.create(user);
};

export const updateUser = async (
  userId: string,
  newUser: IUser
): Promise<IUser | null> => {
  if (newUser.password) {
    const hashedPassword = await bcrypt.hash(newUser.password, 10);
    newUser.password = hashedPassword;
  }
  return userModel.findByIdAndUpdate(userId, newUser, {});
};

export const deleteUser = async (userId: string): Promise<IUser | null> => {
  return userModel.findByIdAndDelete(userId);
};
