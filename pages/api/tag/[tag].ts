import { prisma } from '../../../lib/prisma'
import Error from 'next/error'

async function fetchMoviesWithTag(tag) {
    const tags = await prisma.tag.findMany({
        where: {
            name: tag
        },
        include: {
            movies: {
                include: {
                    info: {
                        include:{
                            poster: true
                        }
                    }
                }
            }
        }
    })
    return tags
}

export default async (req, res) => {
    if (req.method !== 'GET') {
        return res.status(400).json({
            code: 400,
            description: 'resquest is not compatible',
            data: {}
        })
    }
    const tag = req.query.tag;
    try {
        const fetchMovies = await fetchMoviesWithTag(tag)
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