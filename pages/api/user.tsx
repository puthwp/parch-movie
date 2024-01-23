import { prisma } from "../../lib/prisma";

export default async (req, res) => {
    if (req.method !== "GET" ) {
        return res.status(404).send({code: 404, describe: "request is not compatible"})
    }
    const users = await prisma.user.findFirst();
    return res.status(200).send({ code: 200, data: users })
};