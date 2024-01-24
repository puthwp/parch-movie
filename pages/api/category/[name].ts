import { prisma } from "../../../lib/prisma";

export default async function handle(req, res) {
    const genre = req.query.name;

    if (req.method === "GET") {
        handleGenre(genre, res);
    } else {
        throw new Error(`The HTTP ${req.method} method is not supported at this route.`);
    }
}

async function handleGenre(genre, res) {
    const movies = await prisma.genre.findFirst({
        where: {
            name: {
                contains: genre
            },
        },
        include: {
            movies: true
        }
    });
    res.json(movies);
}
