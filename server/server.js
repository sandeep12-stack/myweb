const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Contact = require("./models/Contact");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection cache
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(process.env.MONGO_URI, {
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

// test route
app.get("/", async (req, res) => {
  await connectDB();
  res.send("Backend running");
});

// CONTACT API
app.post("/api/contact", async (req, res) => {
  try {
    await connectDB();
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: "Message saved" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error saving message" });
  }
});

// 🚨 VERCEL EXPORT
module.exports = app;
