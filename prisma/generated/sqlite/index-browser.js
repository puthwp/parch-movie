
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.3.0
 * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
 */
Prisma.prismaVersion = {
  client: "4.3.0",
  engine: "78caf6feeaed953168c64e15a249c3e9a033ebe2"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.MovieScalarFieldEnum = makeEnum({
  movieId: 'movieId',
  title: 'title',
  description: 'description',
  length: 'length',
  released: 'released',
  available: 'available',
  infoId: 'infoId',
  created: 'created',
  updated: 'updated'
});

exports.Prisma.MetaInfoScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  description: 'description',
  movieId: 'movieId',
  created: 'created',
  updated: 'updated'
});

exports.Prisma.GenreScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  info: 'info',
  created: 'created',
  updated: 'updated'
});

exports.Prisma.TagScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  created: 'created',
  updated: 'updated'
});

exports.Prisma.PosterScalarFieldEnum = makeEnum({
  id: 'id',
  imgUrl: 'imgUrl',
  metaInfoId: 'metaInfoId'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  userEmail: 'userEmail',
  created: 'created',
  updated: 'updated'
});

exports.Prisma.ProfileScalarFieldEnum = makeEnum({
  id: 'id',
  phoneNumber: 'phoneNumber',
  firstname: 'firstname',
  lastname: 'lastname',
  created: 'created',
  updated: 'updated',
  themeId: 'themeId',
  userId: 'userId'
});

exports.Prisma.ThemeScalarFieldEnum = makeEnum({
  id: 'id',
  themeName: 'themeName',
  themeColor: 'themeColor',
  created: 'created',
  updated: 'updated'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.NullsOrder = makeEnum({
  first: 'first',
  last: 'last'
});


exports.Prisma.ModelName = makeEnum({
  Movie: 'Movie',
  MetaInfo: 'MetaInfo',
  Genre: 'Genre',
  Tag: 'Tag',
  Poster: 'Poster',
  User: 'User',
  Profile: 'Profile',
  Theme: 'Theme'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
