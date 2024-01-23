import { prisma } from '../../lib/prisma'
export default async (req, res) => {
    const { searchString } = req.query
    if (req.method !== 'GET') {
        return res.status(400)
                    .send({
                        code: 400,
                        describe: 'request is not compatible',
                        data: {}
                    });
    }
    try {
        const users = await prisma.category.findMany();
        return res.status(200)
                    .send({
                        code: 200,
                        describe: 'ok',
                        data: users
                    })
    } catch (e) {
        prisma.$disconnect()
    } finally {
        prisma.$disconnect()
        process.exit(1)
    }
}