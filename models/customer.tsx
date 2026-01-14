import mongoose, { Schema, models } from "mongoose"

export interface ICustomer {
  name: string
  email: string
  message: string
  userId: string
  createdAt?: Date
  service: string
  status: string
  updatedAt?: Date
}

const CustomerSchema = new Schema<ICustomer>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    userId: { type: String, required: true },
    service: { type: String, required: true },
    status: { type: String, required: true },
  },
  {
    timestamps: true, // 👈 Mongoose auto adds Date fields
  }
)

export default models.Customer ||
  mongoose.model<ICustomer>("Customer", CustomerSchema, "customers")
