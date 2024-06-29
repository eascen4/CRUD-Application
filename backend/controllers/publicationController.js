import { Publication } from "../models/PublicationModel.js";

export async function getPublications(req, res) {
  const publications = await Publication.find();

  return res.status(200).json(publications);
}

export async function createPublication(req, res) {
  console.log(req.body);

  const { title, student_id, year } = req.body;

  console.log(title, student_id, year);

  if (!student_id || !title || !year) {
    console.log("All fields are required");
    return res.status(400).json({ message: "All fields are required" });
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

  if(!id) {
    console.log("Publication ID is required");
    return res.status(400).json({ message: "Publication ID is required" });
  }

  const publication = await Publication.findById(id);

  if(!publication) {
    console.log("Publication not found");
    return res.status(404).json({ message: "Publication not found" });
  }

  try {
      await Publication.findByIdAndDelete(id);
    return res.status(200).json({ message: "Publication deleted successfully" });
  } catch (error) {
    console.log("Error deleting publication", error.message);
    return res.status(401).json({ message: error.message });
  }
}
