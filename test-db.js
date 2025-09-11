import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

async function run() {
  try {
    await mongoose.connect(uri, {
      ssl: true,
      tlsAllowInvalidCertificates: false,
      serverSelectionTimeoutMS: 5000,
    });
    console.log("✅ Connected to MongoDB with Mongoose!");
  } catch (err) {
    console.error("❌ Connection error:", err);
  }
}

run();
