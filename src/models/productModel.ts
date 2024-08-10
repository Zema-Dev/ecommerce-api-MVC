import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  price: number;
  description: string;
  image_url: string;
  stock: number;
  category: string;
}

const ProductSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image_url: { type: String, required: true },
    stock: { type: Number, required: true },
    category: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const productModel = mongoose.model<IProduct>("Product", ProductSchema);
export default productModel;
