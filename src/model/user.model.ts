import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
    username: string;
    password: string;
    email: string;
    refreshtokenDB: string | null;
}
const userSchema = new Schema<IUser>({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String },
    refreshtokenDB: { type: String },
  });
  export default mongoose.model<IUser>("User", userSchema);