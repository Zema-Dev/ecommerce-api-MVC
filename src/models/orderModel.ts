import mongoose, { Schema, Document } from "mongoose";

export interface IOrder extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  status: string[];
  totalPrice: number;
  items: Array<{
    productId: mongoose.Schema.Types.ObjectId;
    quantity: number;
  }>;
}

const OrderSchema: Schema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: { type: [String], required: true },
    totalPrice: { type: Number, required: true },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const orderModel = mongoose.model<IOrder>("Order", OrderSchema);
export default orderModel;
