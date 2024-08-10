import mongoose, { Schema, Document } from "mongoose";

export interface IPayment extends Document {
  amount: string;
  paymentMethod: string;
  paymentStatus: string;
  userId: mongoose.Schema.Types.ObjectId;
  orderId: mongoose.Schema.Types.ObjectId;
}

const PaymentSchema: Schema = new Schema(
  {
    amount: { type: String, required: true },
    paymentMethod: { type: String, required: true },
    paymentStatus: { type: String, required: true },
    paymentDate: { type: Date, required: true },
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const paymentModel = mongoose.model<IPayment>("Payment", PaymentSchema);
export default paymentModel;
