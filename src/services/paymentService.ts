import paymentModel, { IPayment } from "../models/paymentModel";

export const getAllPayments = async (): Promise<IPayment[]> => {
  return paymentModel.find();
};

export const createPayment = async (
  order: string,
  amount: number,
  method: string,
  status: string,
  transactionId: string
): Promise<IPayment> => {
  return paymentModel.create({ order, amount, method, status, transactionId });
};

export const getPaymentById = async (
  paymentId: string
): Promise<IPayment | null> => {
  return paymentModel.findById(paymentId);
};

export const updatePaymentStatus = async (
  paymentId: string,
  status: string
): Promise<IPayment | null> => {
  return paymentModel.findByIdAndUpdate(paymentId, { status }, { new: true });
};

export const deletePayment = async (
  paymentId: string
): Promise<IPayment | null> => {
  return paymentModel.findByIdAndDelete(paymentId);
};
