import { prisma } from '../../../lib/prisma'
import Error from 'next/error'

async function moviesList(mid) {
    const moviesList = await prisma.movie.findFirst({
        where: {
            movieId: mid
        },
        include: {
            tags: true,
            genres: true,
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
    const movidId = req.query.id
    try {
        const fetchMovies = await moviesList(movidId)
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