import express from "express";
import { createPublication, deletePublication, getPublications } from "../controllers/publicationController.js";

const publicationRouter = express.Router();

publicationRouter.get('/', getPublications)
publicationRouter.post('/', createPublication)
publicationRouter.post('/delete', deletePublication)

export {publicationRouter}