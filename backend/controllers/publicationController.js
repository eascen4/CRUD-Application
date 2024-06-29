import mongoose from "mongoose";
import { Publication } from "../models/PublicationModel.js";
import { User } from "../models/userModel.js";

export async function getPublications(req, res) {
  const publications = await Publication.find();

  return res.status(200).json(publications);
}

export async function createPublication(req, res) {

  const { title, student_id, year } = req.body;

  if (!student_id || !title || !year) {
    console.log("All fields are required");
    return res.status(400).json({ message: "All fields are required" });
  }

  if(!mongoose.Types.ObjectId.isValid(student_id)) {
    console.log("Invalid student ID");
    return res.status(400).json({ message: "Invalid student ID" });
  }

  const student = await User.findById(student_id);
  
  if(!student) {
    console.log("Student not found");
    return res.status(404).json({ message: "Student not found" });
  }

  try {
    const publicationInstance = await Publication.create({
      student_id,
      title,
      year,
    });
    console.log("Publication created successfully");
    return res.status(200).json(publicationInstance);
  } catch (error) {
    console.log("Error creating publication", error.message);
    return res.status(400).json({ message: error.message });
  }
}

export async function deletePublication(req, res) {
  const { id } = req.body;

  if (!id) {
    console.log("Publication ID is required");
    return res.status(400).json({ message: "Publication ID is required" });
  }

  if(!mongoose.Types.ObjectId.isValid(id)) {
    console.log("Invalid publication ID");
    return res.status(400).json({ message: "Invalid publication ID" });
  }

  const publication = await Publication.findById(id);

  if (!publication) {
    console.log("Publication not found");
    return res.status(404).json({ message: "Publication not found" });
  }

  try {
    await Publication.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ message: "Publication deleted successfully" });
  } catch (error) {
    console.log("Error deleting publication", error.message);
    return res.status(401).json({ message: error.message });
  }
}
