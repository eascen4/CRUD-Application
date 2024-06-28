import express from "express";
import { getPublications } from "../controllers/publicationController.js";

const publicationRouter = express.Router();

publicationRouter.get('/', getPublications)

export {publicationRouter}