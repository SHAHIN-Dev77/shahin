import mongoose, { Schema, models } from "mongoose"

export interface IUser {
  email: string
  password: string
}

const UserSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
})

export default models.User ||
  mongoose.model<IUser>("User", UserSchema, "users")
