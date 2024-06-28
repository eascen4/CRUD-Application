import { Publication } from '../models/PublicationModel.js'

export async function getPublications(req, res) {

    const publications = await Publication.find()

    return res.status(200).json(publications);
}

export async function createPublication(req, res) {
    
    console.log(req.body)

    const { student_id, title, year } = req.body

    if (!student_id || !title || !year) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    try {
        const publicationInstance = await Publication.create({ student_id, title, year })
        return res.status(200).json(publicationInstance)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}