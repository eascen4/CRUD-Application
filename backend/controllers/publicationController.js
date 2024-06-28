import { Publication } from '../models/PublicationModel.js'

export async function getPublications(req, res) {

    const publications = await Publication.find()

    return res.status(200).json(publications);
}