import express from "express";
import { createPublication, getPublications } from "../controllers/publicationController.js";

const publicationRouter = express.Router();

publicationRouter.get('/', getPublications)
publicationRouter.post('/', createPublication)

export {publicationRouter}