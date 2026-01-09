import mongoose from "mongoose"

// ❌ HARD-CODED (NOT SAFE)
const MONGODB_URI = "mongodb+srv://shahin:shahin2013@cluster0.md3tpxu.mongodb.net/shahin?retryWrites=true&w=majority"


let cached = (global as any).mongoose

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null }
}

export async function connectDB() {
  if (cached.conn) return cached.conn

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI)
      .then((mongoose) => mongoose)
  }

  cached.conn = await cached.promise
  return cached.conn
}
