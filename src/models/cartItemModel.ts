// import mongoose, { Document, Schema } from "mongoose";

// export interface ICartItem extends Document {
//   cartId: mongoose.Schema.Types.ObjectId;
//   productId: mongoose.Schema.Types.ObjectId;
//   quantity: number;
// }

// const cartItemSchema: Schema = new Schema(
//   {
//     cartId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Cart",
//       required: true,
//     },
//     productId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Product",
//       required: true,
//     },
//     quantity: { type: Number, required: true },
//   },
//   {
//     timestamps: true,
//   }
// );

// const cartItemModel = mongoose.model<ICartItem>("CartItem", cartItemSchema);

// export default cartItemModel;
