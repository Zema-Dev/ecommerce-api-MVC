import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

const UserSchema: Schema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model<IUser>("User", UserSchema);
export default userModel;
