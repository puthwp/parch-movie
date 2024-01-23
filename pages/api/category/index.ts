import { prisma } from '../../../lib/prisma'
export default async (req, res) => {
    if (req.method !== 'GET') {
        return res.status(400)
                    .send({
                        code: 400,
                        describe: 'request is not compatible',
                        data: {}
                    });
    }
    try {
        const genres = await prisma.genre.findMany();
        return res.status(200)
                    .send({
                        code: 200,
                        describe: 'ok',
                        data: genres
                    })
    } catch (e) {
        prisma.$disconnect()
    } finally {
        prisma.$disconnect()
        // process.exit(1)
    }
}