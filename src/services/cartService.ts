import Cart, { ICart } from "../models/cartModel";

export const getAllCarts = async (): Promise<ICart[]> => {
  return Cart.find();
};

export const getCartById = async (cartId: string): Promise<ICart | null> => {
  return Cart.findById(cartId);
};

export const createCart = async (cart: ICart): Promise<ICart> => {
  return Cart.create(cart);
};

export const updateCart = async (
  cartId: string,
  newCart: ICart
): Promise<ICart | null> => {
  return Cart.findByIdAndUpdate(cartId, newCart, { new: true });
};

export const deleteCart = async (cartId: string): Promise<ICart | null> => {
  return Cart.findByIdAndDelete(cartId);
};
