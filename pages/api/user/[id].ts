import { describe } from "node:test";
import { prisma } from "../../../lib/prisma";

export default async (req, res) => {
    if (req.method !== "GET" ) {
        return res.status(400).send({
            code: 400,
            describe: "request is not compatible",
            data: {}
        })
    }
    const uid = req.query.id
    try {
        const users = await prisma.user.findFirst({
            where: {
                uid: uid
            },
            include: {
                profile: {
                    include: {
                        lovedGenres: true,
                        lovedMovies: true,
                        usrTheme: true
                    }
                }
            }
        });
        return res.status(200).send({
            code: 200,
            describe:'ok',
            data: users
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
};