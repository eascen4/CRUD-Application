import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PublicationSchema = new Schema({
    student_id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
});

const Publication = mongoose.model("Publication", PublicationSchema);
export { Publication };