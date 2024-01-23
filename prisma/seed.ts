import { faker } from "@faker-js/faker";
import { prisma } from "../src/db/prisma";

const userData = [
  {
    name: "Alice",
    email: "alice@prisma.io",
    posts: {
      create: [
        {
          title: "Join the Prisma Slack",
          content: "https://slack.prisma.io",
          published: true,
        },
      ],
    },
  },
  {
    name: "Nilu",
    email: "nilu@prisma.io",
    posts: {
      create: [
        {
          title: "Follow Prisma on Twitter",
          content: "https://www.twitter.com/prisma",
          published: true,
          viewCount: 42,
        },
      ],
    },
  },
  {
    name: "Mahmoud",
    email: "mahmoud@prisma.io",
    posts: {
      create: [
        {
          title: "Ask a question about Prisma on GitHub",
          content: "https://www.github.com/prisma/prisma/discussions",
          published: true,
          viewCount: 128,
        },
        {
          title: "Prisma on YouTube",
          content: "https://pris.ly/youtube",
        },
      ],
    },
  },
];

async function createGenres() {
  const genrePromises = Array(15)
    .fill(null)
    .map(() => {
      const g = faker.music.genre();
      return prisma.category.upsert({
        where: {
          name: g,
        },
        update: {},
        create: {
          name: g,
          info: faker.lorem.lines({ min: 2, max: 4 }),
        },
      });
    });
  return prisma.$transaction(genrePromises);
}

async function getAllGenre() {
  return await prisma.category.findMany();
}

async function randomGenre() {
    return await prisma.$transaction(getAllGenre[(Math.floor(Math.random() * getAllGenre.length))])
}

async function randomTags() {
  const mockTags = faker.word
    .words({ count: { min: 0, max: 10 } })
    .toLowerCase()
    .split(" ");
  const tags = mockTags.map((tag) => {
    return prisma.tag.create({
      data: {
        name: tag,
      },
    });
  });
  return tags//prisma.$transaction(tags);
}

async function createMovies() {
  const moviesPromises = Array(50)
    .fill(null)
    .map(() => {
      // const tags = await randomTags();
      const released = faker.date.recent({
        refDate: "2000-01-01T00:00:00.000Z",
      });
      const tags = randomTags()
      return prisma.movie.upsert({
        where: {},
        update: {},
        create: {
          title: faker.lorem.sentence({ min: 1, max: 12 }),
          description: faker.lorem.lines({ min: 2, max: 6 }),
          length: faker.number.int({ min: 90, max: 240 }),
          released: released,
          available: faker.date.soon({ refDate: released }),
          // tags: {
          //     connect: tags
          // },
          // genre: randomGenre(),
        },
      });
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
  return prisma.$transaction(moviesPromises);
}

async function main() {
  console.log(`Start seeding ...`);
  // for (const u of userData) {
  //   const user = await prisma.user.create({
  //     data: u,
  //   })
  //   console.log(`Created user with id: ${user.id}`)
  // }
  const genre = await createGenres();
  console.log("Genre generated...");
  console.log({ genre });

  // const movies = await createMovies();
  // console.log("Movies generated...");
  // console.log({ movies });

  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
