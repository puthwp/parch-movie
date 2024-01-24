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
        return res.status(500)
                    .send({
                        code: 500,
                        describe: e,
                        data: {}
                    })
    } finally {
        prisma.$disconnect()
    }
}