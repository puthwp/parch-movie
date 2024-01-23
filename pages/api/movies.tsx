import { PrismaClient } from '@prisma/client'
import Error from 'next/error'
import { prisma } from '@/db/db'

async function moviesList() {
    const moviesList = await prisma.movie.findMany({
        include: {
            tags: true,
            genre: true,
            info: true
        }
    })
    return moviesList
}

moviesList()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e: Error) => {
        console.error(e)
        await prisma.$disconnect()
        // process.exit(1)
    })
    .finally( async () => {
        prisma.$disconnect();
        // process.exit(1)
    })

export default async (req, res) => {
    if (req.method !== 'GET') {
        res.status(400).json({
            code: 400,
            description: 'resquest is not compatible'
        })
    }
    try {
        const fetchMovies = moviesList()
        res.status(200).json({
            code: 200,
            description: "ok",
            data: fetchMovies
        })
    } catch (err) {
        res.status(500).json({
            code: 500,
            description: 'failed to load data',
            error: err
        })
    }
}