import express from "express";
import { createPublication, deletePublication, getPublications, updatePublication } from "../controllers/publicationController.js";

const publicationRouter = express.Router();

publicationRouter.get('/', getPublications)
publicationRouter.post('/', createPublication)
publicationRouter.post('/delete', deletePublication)
publicationRouter.post('/update', updatePublication)

export {publicationRouter}