import { describe } from "node:test";
import { prisma } from "../../../lib/prisma";
import { Movie } from "@prisma/client";

function exclude<Movie, Key extends keyof Movie>(
    movie: Movie,
    keys: Key[]
): Omit<Movie, Key> {
    return Object.fromEntries(
        Object.entries(movie).filter(([key]) => !keys.includes(key))
    );
}

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
			lovedGenres: true,
			lovedMovies: {
			  include: {
				info: {
				  include: {
					poster: true,
				  },
				},
			  },
			},
			usrTheme: true,
		  },
		},
	  },
	});
	const responseUser = exclude(users, [
	  "length",
	  "description",
	  "released",
	  "available",
	  "metaInfoId",
	]);
	return res.status(200).send({
	  code: 200,
	  describe: "ok",
	  data: responseUser,
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
