import mongoose from "mongoose";
import { User } from "../models/userModel.js";

export async function getUsers(req, res) {
  const users = await User.find();

  return res.status(200).json(users);
}

export async function createUser(req, res) {
  const { first_name, last_name, email } = req.body;

  if (!first_name || !last_name || !email) {
    console.log("All fields are required");
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const userInstance = await User.create({ first_name, last_name, email });
    return res.status(200).json(userInstance);
  } catch (error) {
    console.log("Error creating user", error.message);
    return res.status(401).json({ message: error.message });
  }
}

export async function deleteUser(req, res) {
  const { id } = req.body;

  if (!id) {
    console.log("User ID is required");
    return res.status(400).json({ message: "User ID is required" });
  }

  if(!mongoose.Types.ObjectId.isValid(id)) {
    console.log("Invalid user ID");
    return res.status(400).json({ message: "Invalid user ID" });
  }

  const user = await User.findById(id);

  if (!user) {
    console.log("User not found");
    return res.status(404).json({ message: "User not found" });
  }

  try {
    await User.findByIdAndDelete(id);
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log("Error deleting user", error.message);
    return res.status(401).json({ message: error.message });
  }
}
