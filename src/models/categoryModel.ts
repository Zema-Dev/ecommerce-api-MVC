import mongoose, { Document, Schema } from "mongoose";

export interface ICategory extends Document {
  name: string;
  description: string;
}

const categorySchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const categoryModel = mongoose.model<ICategory>("Category", categorySchema);
export default categoryModel;
