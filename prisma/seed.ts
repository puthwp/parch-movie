import { faker } from "@faker-js/faker";
import { prisma } from "../lib/prisma";
import { profile } from 'node:console';

const baseGenres = Array(
  "Action",
  "Animation",
  "Comedy",
  "Crime",
  "Drama",
  "Fantasy",
  "Historical",
  "Horror",
  "Romance",
  "Science Fiction",
  "Thriller",
  "Western",
  "Other"
);

async function createGenres() {
  const genrePromises = baseGenres.map((g) => {
    const gl = g.toLowerCase();
    return prisma.genre.upsert({
      where: {
        name: gl,
      },
      update: {
        info: faker.lorem.lines({ min: 2, max: 4 }),
      },
      create: {
        name: gl,
        info: faker.lorem.lines({ min: 2, max: 4 }),
      },
    });
  });
  return prisma.$transaction(genrePromises);
}

async function createThemes() {
  return await prisma.theme.upsert({
    where: {
      themeName: "default",
    },
    update: {
      themeName: "default",
      themeColor: faker.color.rgb(),
    },
    create: {
      themeName: "default",
      themeColor: faker.color.rgb(),
    },
  });
}

async function getDefaultTheme() {
  return await prisma.theme.findFirst({
    where: {
      themeName: "default",
    },
  });
}

async function getRandomTags() {
  const mockTags = faker.word
    .words({ count: { min: 0, max: 10 } })
    .toLowerCase()
    .split(" ");
  const tags = mockTags.map((tag) => {
    return prisma.tag.upsert({
      where: {
        name: tag,
      },
      update: {
        name: tag,
      },
      create: {
        name: tag,
      },
    });
  });
  return mockTags;
}

// async function createMovies() {
//   const moviesPromises = Array(50)
//     .fill(null)
//     .map(() => {
//       const released = faker.date.recent({
//         refDate: "2000-01-01T00:00:00.000Z",
//       });
//       return prisma.movie.upsert({
//         where: {},
//         update: {},
//         create: {
//           title: faker.lorem.sentence({ min: 1, max: 12 }),
//           description: faker.lorem.lines({ min: 2, max: 6 }),
//           length: faker.number.int({ min: 90, max: 240 }),
//           released: released,
//           available: faker.date.soon({ refDate: released }),
//           tags: {
//             create: getRandomTags
//           },
//           genre: {
//             connect: {
//               id: randomGenre.bind
//             }
//           }
//           // genre: randomGenre(),
//         },
//       });
//     });
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
// return prisma.$transaction(moviesPromises);
// }

async function main() {
  console.log(`Start seeding ...`);

  //Seeding Genre
  const genre = await createGenres();
  console.log("Genre generated...");
  console.log({ genre });

  //Seeding Theme
  const theme = await createThemes();
  console.log("Default theme generated...");
  console.log({ theme });

  // Seeding Users
  console.log("Start seeding Users");
  const numberOfUsers = Math.floor(Math.random() * 10);
  const usersWithGenresPromises = await Array(numberOfUsers)
    .fill(null)
    .map((_, i) => {
      const genfirstname = faker.person.firstName();
      const genlastname = faker.person.lastName();
      const genemail = faker.internet.email({
        firstName: genfirstname,
        lastName: genlastname,
        provider: "gmail.com",
      }).toLowerCase();
      const genphone = faker.helpers.fromRegExp("0[6,8,9][d]{8}");
      // const randGenres = _.sample(
      //   baseGenres,
      //   Math.floor(Math.random() * baseGenres.length)
      // );
      return prisma.user.upsert({
        where: {
          email: genemail,
        },
        update: {},
        create: {
          email: genemail,
          profile: {
            connectOrCreate: {
              where: {
                pid: '0'
              },
              create: {
                firstname: genfirstname,
                lastname: genlastname,
                phone: genphone,
                usrTheme: {
                  connectOrCreate: {
                    where: {
                      themeName: "default",
                    },
                    create: {
                      themeName: "default",
                      themeColor: faker.color.rgb(),
                    },
                  },
                },
              },
            },
          },
        },
        include: {
          profile: true,
        },
      });
    });
  const usersWithGenre = await prisma.$transaction(usersWithGenresPromises);
  console.log("Generated " + numberOfUsers + " Users");
  console.log({ usersWithGenre });
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
