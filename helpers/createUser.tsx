import { faker } from "@faker-js/faker";
import { prisma } from "@/db/db";

export async function createDefaultTheme() {
  return await prisma.theme.upsert({
    where: {
      themeName: "dark",
    },
    update: {
      themeColor: "#121212",
      themeName: "dark",
    },
    create: {
      themeName: "dark",
      themeColor: "#121212",
    },
  });
}
export async function getDefaultTheme() {
  return await prisma.theme.findFirst({
    where: {
      themeName: "dark",
    },
  });
}

// export async function createPreference(usr) {
//     const defaultTheme = await getDefaultTheme();
//     return await prisma.userPref.create({
//         data: {
//             usrTheme: defaultTheme,
//             user: usr
//         }
//     })
// }

export async function createUser() {
//   const usrPref = await createPreference();
  const usersPromises = await Array(6)
    .fill(null)
    .map(() => {
      return prisma.user.create({
        data: {
          userEmail: faker.internet.email(),
          phoneNumber: faker.phone.number("0#########"),
        }
        // connect: {
        //   usrPrefId: usrPref.id,
        // },
      })
    })
  return await prisma.$transaction(usersPromises);
}
