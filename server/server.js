import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/devopsDB")
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Failed:", err));

// ✅ Create Schema & Model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});
const User = mongoose.model("User", userSchema);

// ✅ Register API
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.json({ message: "User registered successfully 🎉" });
  } catch (error) {
    res.status(500).json({ message: "Error saving user ❌" });
  }
});

// ✅ Login API
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found ❌" });
    if (user.password !== password) return res.status(400).json({ message: "Invalid password ⚠️" });
    res.json({ message: "Login successful ✅" });
  } catch (error) {
    res.status(500).json({ message: "Login failed ❌" });
  }
});

// ✅ Server Start
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
