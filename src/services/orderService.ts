import orderModel, { IOrder } from "../models/orderModel";

export const getAllOrders = async (): Promise<IOrder[]> => {
  return orderModel.find();
};
export const createOrder = async (orderData: IOrder): Promise<IOrder> => {
  return orderModel.create(orderData);
};

export const getOrderById = async (orderId: string): Promise<IOrder | null> => {
  return orderModel.findById(orderId);
};

export const getUserOrders = async (userId: string): Promise<IOrder[]> => {
  return orderModel.find({ user: userId });
};

export const updateOrderStatus = async (
  orderId: string,
  status: string
): Promise<IOrder | null> => {
  return orderModel.findByIdAndUpdate(orderId, { status }, { new: true });
};
export const updateOrder = async (
  orderId: string,
  updateData: Partial<IOrder>
): Promise<IOrder | null> => {
  return orderModel.findByIdAndUpdate(orderId, updateData, { new: true });
};

export const deleteOrder = async (orderId: string): Promise<IOrder | null> => {
  return orderModel.findByIdAndDelete(orderId);
};
