import mongoose, { Schema, models } from "mongoose"

export interface IContact {
  name: string
  email: string
  message: string
  userId: string
  createdAt?: Date
  updatedAt?: Date
}

const ContactSchema = new Schema<IContact>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    userId: { type: String, required: true },
  },
  {
    timestamps: true, // 👈 Mongoose auto adds Date fields
  }
)

export default models.Contact ||
  mongoose.model<IContact>("Contact", ContactSchema, "contacts")
