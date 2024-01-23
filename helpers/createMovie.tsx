import { faker } from "@faker-js/faker";
import { PrismaClient } from '@prisma/client';
import { error } from "node:console";
export const prisma = new PrismaClient()

export async function clean() {
    await prisma.user.deleteMany()
    await prisma.tag.deleteMany()
    await prisma.category.deleteMany()
    await prisma.movie.deleteMany()
    await prisma.poster.deleteMany()
    await prisma.metaInfo.deleteMany()
    await prisma.userPref.deleteMany()
    await prisma.theme.deleteMany()
}


async function createGenres() {
    const genrePromises = await Array(15)
    .fill(null)
    .map(() => {
        return prisma.category.create({
            data: {
                name: faker.music.genre(),
                info: faker.lorem.lines({min: 2, max: 4})
            }
        });
    });
    return prisma.$transaction(genrePromises)
}

async function getAllGenre() {
    return await prisma.category.findMany()
}

// function randomGenre() {
//     return await prisma.$transaction(getAllGenre[(Math.floor(Math.random() * getAllGenre.length))])
// }

async function randomTags() {
    const mockTags = faker.word.words({ count: { min: 0, max: 10 } }).toLowerCase().split(' ');
    const tags = await mockTags.map((tag) => {
        return prisma.tag.create({
            data: {
                name: tag
            }
        });
    });
    return prisma.$transaction(tags)
}

async function createMovies() {
    const moviesPromises = Array(50).fill(null).map(() => {
        // const tags = await randomTags();
        const released = faker.date.recent({ refDate: '2000-01-01T00:00:00.000Z' });
        return prisma.movie.create( {
            data: {
                title: faker.lorem.sentence({ min: 1, max: 12 }),
                description: faker.lorem.lines({min: 2, max: 6}),
                length: faker.number.int({ min: 90, max: 240 }),
                released: released,
                available: faker.date.soon({ refDate: released }),
                // tags: {
                //     connect: tags
                // },
                genre: {
                    create: {
                        name: faker.music.genre(),
                        info: faker.lorem.lines({ min: 1, max: 3 })
                    }
                }
            },
        })
    });
    // const tagPromises = Array(20).fill(null).map(() => {
    //     return prisma.tag.create({
    //         data: {
    //             name: faker.music.genre(),
    //             movies: {
    //                 connect: {
    //                     id: movieId
    //                 },
    //             },
    //         },
    //     });
    // });
    // const tags =await prisma.$transaction(tagPromises);
    return prisma.$transaction(moviesPromises)
}