import categoryModel, { ICategory } from "../models/categoryModel";

export const getAllCategories = async (): Promise<ICategory[]> => {
  return categoryModel.find();
};

export const getCategoryById = async (
  categoryId: string
): Promise<ICategory[]> => {
  return categoryModel.find({ category: categoryId });
};

export const createCategory = async (
  category: ICategory
): Promise<ICategory> => {
  return categoryModel.create(category);
};

export const updateCategory = async (
  categoryId: string,
  newCategory: ICategory
): Promise<ICategory | null> => {
  return categoryModel.findByIdAndUpdate(categoryId, newCategory, {});
};

export const deleteCategory = async (
  categoryId: string
): Promise<ICategory | null> => {
  return categoryModel.findByIdAndDelete(categoryId);
};
