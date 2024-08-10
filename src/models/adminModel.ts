import mongoose, { Schema, Document } from "mongoose";

export interface IAdministrator extends Document {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: string;
}

const AdministratorSchema: Schema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, default: "admin" },
  },
  {
    timestamps: true,
  }
);

const administratorModel = mongoose.model<IAdministrator>(
  "Administrator",
  AdministratorSchema
);
export default administratorModel;
