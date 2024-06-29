import { Publication } from "../models/PublicationModel.js";

export async function getPublications(req, res) {
  const publications = await Publication.find();

  return res.status(200).json(publications);
}

export async function createPublication(req, res) {
  console.log(req.body);

  const { title, student_id, year } = req.body;

  console.log(title, student_id, year)
  
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
