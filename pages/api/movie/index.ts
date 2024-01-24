import { prisma } from '../../../lib/prisma'
import Error from 'next/error'

async function moviesList() {
    const moviesList = await prisma.movie.findMany({
        include: {
            info: true
        }
    })
    return moviesList
}

export default async (req, res) => {
    if (req.method !== 'GET') {
        return res.status(400).json({
            code: 400,
            description: 'resquest is not compatible',
            data: {}
        })
    }
    try {
        const fetchMovies = await moviesList()
        return res.status(200).json({
            code: 200,
            description: "ok",
            data: fetchMovies
        })
    } catch (e) {
        prisma.$disconnect()
        return res.status(500).json({
            code: 500,
            description: e,
            data: {}
        })
    } finally {
        prisma.$disconnect()
    }
}