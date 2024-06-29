import express from "express";
import mongoose from "mongoose";
import 'dotenv/config'

import { publicationRouter } from "./routes/publication.js";
import { userRouter } from "./routes/user.js";

import cors from 'cors'

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}))

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use("/api/publications", publicationRouter);
app.use("/api/users", userRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
