import { describe } from "node:test";
import { prisma } from "../../../lib/prisma";
import { Movie, Profile, Theme, User } from "@prisma/client";



// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
if (req.method !== "GET") {
    return res.status(400).send({
    code: 400,
    describe: "request is not compatible",
    data: {},
    });
}
const uid = req.query.id;
try {
    const users = await prisma.user.findFirst({
    where: {
        uid: uid,
    },
    include: {
        profile: {
        include: {
            lovedGenres: {
                select: {
                    name: true
                }
            },
            lovedMovies: {
            select: {
                title: true,
                description: true,
                created: true,
                updated: true,
                info: {
                select: {
                    poster: {
                        select: {
                            imgUrl:true
                        }
                    },
                }
                },
            },
            },
            usrTheme: true,
        },
        },
    },
    });
    // const response = exclude(users?.profile?.lovedGenres, ['gid','updated','created'])
    return res.status(200).send({
    code: 200,
    describe: "ok",
    data: users,
    });
} catch (e) {
    prisma.$disconnect();
    return res.status(500).send({
    code: 500,
    describe: e,
    data: {},
    });
} finally {
    prisma.$disconnect();
}
};
