// import mongoose, { Document, Schema } from "mongoose";

// export interface IPayment extends Document {
//   amount: string;
//   paymentMethod: string;
//   paymentStatus: string;
//   userId: mongoose.Schema.Types.ObjectId;
//   orderId: mongoose.Schema.Types.ObjectId;
// }

// const paymentSchema: Schema = new Schema(
//   {
//     amount: { type: String, required: true },
//     paymentMethod: { type: String, required: true },
//     paymentStatus: { type: String, required: true },
//     paymentDate: { type: Date, required: true },
//     orderId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Order",
//       required: true,
//     },
//     userId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const paymentModel = mongoose.model<IPayment>("Payment", paymentSchema);

// export default paymentModel;
