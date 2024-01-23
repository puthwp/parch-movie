import { faker } from "@faker-js/faker";
import { prisma } from "../lib/prisma";

async function createGenres() {
  const genrePromises = Array('Action','Animation','Comedy','Crime','Drama','Fantasy','Historical','Horror','Romance','Science Fiction','Thriller','Western','Other')
    .map((g) => {
      return prisma.genre.upsert({
        where: {
          name: g,
        },
        update: {
          info: faker.lorem.lines({ min: 2, max: 4 })
        },
        create: {
          name: g,
          info: faker.lorem.lines({ min: 2, max: 4 }),
        },
      });
    });
  return prisma.$transaction(genrePromises);
}

async function getAllGenre() {
  return await prisma.genre.findMany();
}

async function randomGenre() {
    return getAllGenre[(Math.floor(Math.random() * getAllGenre.length))]
}

async function createThemes() {
  return await prisma.theme.upsert({
    where: {
      themeName: 'default'
    },
    update: {
      themeName: 'default',
      themeColor: faker.color.rgb()
    },
    create: {
      themeName: 'default',
      themeColor: faker.color.rgb()
    }
  })
}

async function getDefaultTheme() {
  return await prisma.theme.findFirst({
    where: {
      themeName: 'default'
    }
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
        name: tag
      },
      update: {
        name: tag
      },
      create: {
        name: tag,
      },
    });
  });
  return mockTags
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
  // for (const u of userData) {
  //   const user = await prisma.user.create({
  //     data: u,
  //   })
  //   console.log(`Created user with id: ${user.id}`)
  // }

  //Seeding Genre
  const genre = await createGenres();
  console.log("Genre generated...");
  console.log({ genre });

  //Seeding Theme
  const theme = await createThemes()
  console.log("Default theme generated...")
  console.log({theme})

  // Seeding Users
  console.log("Start seeding Users")
  const numberOfUsers = Math.floor(Math.random() * 10)
  const usersWithGenresPromises = await Array(numberOfUsers).fill(null)
                                    .map((_, i) => {
                                      const firstname = faker.person.firstName();
                                      const lastname = faker.person.lastName();
                                      const email = faker.internet.email({
                                                          firstName: firstname,
                                                          lastName: lastname,
                                                          provider: 'gmail.com'
                                                        });
                                      const phone = faker.phone.number('0#########');
                                      return prisma.profile.upsert({
                                        where: {
                                          user: {
                                            userEmail: email
                                          }
                                        },
                                        update: {
                                          firstname: firstname,
                                          lastname: lastname,
                                          phoneNumber: phone
                                        },
                                        create: {
                                          firstname: firstname,
                                          lastname: lastname,
                                          phoneNumber: phone,
                                          user: {
                                            connectOrCreate: {
                                              where: {
                                                userEmail: email
                                              },
                                              create: {
                                                userEmail: email
                                              }
                                            }
                                          },
                                          usrTheme: {
                                            connectOrCreate: {
                                              where: {
                                                themeName: 'default'
                                              },
                                              create: {
                                                themeColor: faker.color.rgb(),
                                                themeName: faker.color.human()
                                              }
                                            }
                                          }
                                        }
                                      })
                                    });
  const usersWithGenre = await prisma.$transaction(usersWithGenresPromises)
  console.log("Generated Users")
  console.log({ usersWithGenre })
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
