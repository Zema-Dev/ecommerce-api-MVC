import mongoose, { Schema, Document } from "mongoose";

export interface ICart extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  items: Array<{
    productId: mongoose.Schema.Types.ObjectId;
    quantity: number;
  }>;
}

const CartSchema: Schema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
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

const cartModel = mongoose.model<ICart>("Cart", CartSchema);
export default cartModel;
