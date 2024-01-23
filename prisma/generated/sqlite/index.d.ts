
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Movie
 * 
 */
export type Movie = {
  movieId: string
  title: string
  description: string | null
  length: number | null
  released: Date | null
  available: Date | null
  infoId: string
  created: Date
  updated: Date
}

/**
 * Model MetaInfo
 * 
 */
export type MetaInfo = {
  id: string
  title: string
  description: string
  movieId: string
  created: Date
  updated: Date
}

/**
 * Model Genre
 * 
 */
export type Genre = {
  id: string
  name: string
  info: string
  created: Date
  updated: Date
}

/**
 * Model Tag
 * 
 */
export type Tag = {
  id: string
  name: string
  created: Date
  updated: Date
}

/**
 * Model Poster
 * 
 */
export type Poster = {
  id: string
  imgUrl: string
  metaInfoId: string | null
}

/**
 * Model User
 * 
 */
export type User = {
  id: string
  userEmail: string
  created: Date
  updated: Date
}

/**
 * Model Profile
 * 
 */
export type Profile = {
  id: string
  phoneNumber: string
  firstname: string
  lastname: string
  created: Date
  updated: Date
  themeId: bigint
  userId: string
}

/**
 * Model Theme
 * 
 */
export type Theme = {
  id: bigint
  themeName: string
  themeColor: string
  created: Date
  updated: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Movies
 * const movies = await prisma.movie.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Movies
   * const movies = await prisma.movie.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.movie`: Exposes CRUD operations for the **Movie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movie.findMany()
    * ```
    */
  get movie(): Prisma.MovieDelegate<GlobalReject>;

  /**
   * `prisma.metaInfo`: Exposes CRUD operations for the **MetaInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MetaInfos
    * const metaInfos = await prisma.metaInfo.findMany()
    * ```
    */
  get metaInfo(): Prisma.MetaInfoDelegate<GlobalReject>;

  /**
   * `prisma.genre`: Exposes CRUD operations for the **Genre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genre.findMany()
    * ```
    */
  get genre(): Prisma.GenreDelegate<GlobalReject>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<GlobalReject>;

  /**
   * `prisma.poster`: Exposes CRUD operations for the **Poster** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posters
    * const posters = await prisma.poster.findMany()
    * ```
    */
  get poster(): Prisma.PosterDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<GlobalReject>;

  /**
   * `prisma.theme`: Exposes CRUD operations for the **Theme** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Themes
    * const themes = await prisma.theme.findMany()
    * ```
    */
  get theme(): Prisma.ThemeDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.3.0
   * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export import FieldRef = runtime.FieldRef

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Movie: 'Movie',
    MetaInfo: 'MetaInfo',
    Genre: 'Genre',
    Tag: 'Tag',
    Poster: 'Poster',
    User: 'User',
    Profile: 'Profile',
    Theme: 'Theme'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MovieCountOutputType
   */


  export type MovieCountOutputType = {
    genre: number
    tags: number
    profile: number
  }

  export type MovieCountOutputTypeSelect = {
    genre?: boolean | MovieCountOutputTypeCountGenreArgs
    tags?: boolean | MovieCountOutputTypeCountTagsArgs
    profile?: boolean | MovieCountOutputTypeCountProfileArgs
  }

  export type MovieCountOutputTypeGetPayload<
    S extends boolean | null | undefined | MovieCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? MovieCountOutputType
    : S extends undefined
    ? never
    : S extends MovieCountOutputTypeArgs
    ?'include' extends U
    ? MovieCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof MovieCountOutputType ? MovieCountOutputType[P] : never
  } 
    : MovieCountOutputType
  : MovieCountOutputType




  // Custom InputTypes

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the MovieCountOutputType
     * 
    **/
    select?: MovieCountOutputTypeSelect | null
  }


  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountGenreArgs = {
    where?: GenreWhereInput
  }


  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountTagsArgs = {
    where?: TagWhereInput
  }


  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountProfileArgs = {
    where?: ProfileWhereInput
  }



  /**
   * Count Type MetaInfoCountOutputType
   */


  export type MetaInfoCountOutputType = {
    poster: number
  }

  export type MetaInfoCountOutputTypeSelect = {
    poster?: boolean | MetaInfoCountOutputTypeCountPosterArgs
  }

  export type MetaInfoCountOutputTypeGetPayload<
    S extends boolean | null | undefined | MetaInfoCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? MetaInfoCountOutputType
    : S extends undefined
    ? never
    : S extends MetaInfoCountOutputTypeArgs
    ?'include' extends U
    ? MetaInfoCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof MetaInfoCountOutputType ? MetaInfoCountOutputType[P] : never
  } 
    : MetaInfoCountOutputType
  : MetaInfoCountOutputType




  // Custom InputTypes

  /**
   * MetaInfoCountOutputType without action
   */
  export type MetaInfoCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the MetaInfoCountOutputType
     * 
    **/
    select?: MetaInfoCountOutputTypeSelect | null
  }


  /**
   * MetaInfoCountOutputType without action
   */
  export type MetaInfoCountOutputTypeCountPosterArgs = {
    where?: PosterWhereInput
  }



  /**
   * Count Type GenreCountOutputType
   */


  export type GenreCountOutputType = {
    movies: number
    profile: number
  }

  export type GenreCountOutputTypeSelect = {
    movies?: boolean | GenreCountOutputTypeCountMoviesArgs
    profile?: boolean | GenreCountOutputTypeCountProfileArgs
  }

  export type GenreCountOutputTypeGetPayload<
    S extends boolean | null | undefined | GenreCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? GenreCountOutputType
    : S extends undefined
    ? never
    : S extends GenreCountOutputTypeArgs
    ?'include' extends U
    ? GenreCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof GenreCountOutputType ? GenreCountOutputType[P] : never
  } 
    : GenreCountOutputType
  : GenreCountOutputType




  // Custom InputTypes

  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the GenreCountOutputType
     * 
    **/
    select?: GenreCountOutputTypeSelect | null
  }


  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeCountMoviesArgs = {
    where?: MovieWhereInput
  }


  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeCountProfileArgs = {
    where?: ProfileWhereInput
  }



  /**
   * Count Type TagCountOutputType
   */


  export type TagCountOutputType = {
    movies: number
  }

  export type TagCountOutputTypeSelect = {
    movies?: boolean | TagCountOutputTypeCountMoviesArgs
  }

  export type TagCountOutputTypeGetPayload<
    S extends boolean | null | undefined | TagCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? TagCountOutputType
    : S extends undefined
    ? never
    : S extends TagCountOutputTypeArgs
    ?'include' extends U
    ? TagCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof TagCountOutputType ? TagCountOutputType[P] : never
  } 
    : TagCountOutputType
  : TagCountOutputType




  // Custom InputTypes

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     * 
    **/
    select?: TagCountOutputTypeSelect | null
  }


  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountMoviesArgs = {
    where?: MovieWhereInput
  }



  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    profile: number
  }

  export type UserCountOutputTypeSelect = {
    profile?: boolean | UserCountOutputTypeCountProfileArgs
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProfileArgs = {
    where?: ProfileWhereInput
  }



  /**
   * Count Type ProfileCountOutputType
   */


  export type ProfileCountOutputType = {
    lovedMovies: number
    lovedCategories: number
  }

  export type ProfileCountOutputTypeSelect = {
    lovedMovies?: boolean | ProfileCountOutputTypeCountLovedMoviesArgs
    lovedCategories?: boolean | ProfileCountOutputTypeCountLovedCategoriesArgs
  }

  export type ProfileCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ProfileCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ProfileCountOutputType
    : S extends undefined
    ? never
    : S extends ProfileCountOutputTypeArgs
    ?'include' extends U
    ? ProfileCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ProfileCountOutputType ? ProfileCountOutputType[P] : never
  } 
    : ProfileCountOutputType
  : ProfileCountOutputType




  // Custom InputTypes

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     * 
    **/
    select?: ProfileCountOutputTypeSelect | null
  }


  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountLovedMoviesArgs = {
    where?: MovieWhereInput
  }


  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountLovedCategoriesArgs = {
    where?: GenreWhereInput
  }



  /**
   * Count Type ThemeCountOutputType
   */


  export type ThemeCountOutputType = {
    userPref: number
  }

  export type ThemeCountOutputTypeSelect = {
    userPref?: boolean | ThemeCountOutputTypeCountUserPrefArgs
  }

  export type ThemeCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ThemeCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ThemeCountOutputType
    : S extends undefined
    ? never
    : S extends ThemeCountOutputTypeArgs
    ?'include' extends U
    ? ThemeCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ThemeCountOutputType ? ThemeCountOutputType[P] : never
  } 
    : ThemeCountOutputType
  : ThemeCountOutputType




  // Custom InputTypes

  /**
   * ThemeCountOutputType without action
   */
  export type ThemeCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ThemeCountOutputType
     * 
    **/
    select?: ThemeCountOutputTypeSelect | null
  }


  /**
   * ThemeCountOutputType without action
   */
  export type ThemeCountOutputTypeCountUserPrefArgs = {
    where?: ProfileWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Movie
   */


  export type AggregateMovie = {
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  export type MovieAvgAggregateOutputType = {
    length: number | null
  }

  export type MovieSumAggregateOutputType = {
    length: number | null
  }

  export type MovieMinAggregateOutputType = {
    movieId: string | null
    title: string | null
    description: string | null
    length: number | null
    released: Date | null
    available: Date | null
    infoId: string | null
    created: Date | null
    updated: Date | null
  }

  export type MovieMaxAggregateOutputType = {
    movieId: string | null
    title: string | null
    description: string | null
    length: number | null
    released: Date | null
    available: Date | null
    infoId: string | null
    created: Date | null
    updated: Date | null
  }

  export type MovieCountAggregateOutputType = {
    movieId: number
    title: number
    description: number
    length: number
    released: number
    available: number
    infoId: number
    created: number
    updated: number
    _all: number
  }


  export type MovieAvgAggregateInputType = {
    length?: true
  }

  export type MovieSumAggregateInputType = {
    length?: true
  }

  export type MovieMinAggregateInputType = {
    movieId?: true
    title?: true
    description?: true
    length?: true
    released?: true
    available?: true
    infoId?: true
    created?: true
    updated?: true
  }

  export type MovieMaxAggregateInputType = {
    movieId?: true
    title?: true
    description?: true
    length?: true
    released?: true
    available?: true
    infoId?: true
    created?: true
    updated?: true
  }

  export type MovieCountAggregateInputType = {
    movieId?: true
    title?: true
    description?: true
    length?: true
    released?: true
    available?: true
    infoId?: true
    created?: true
    updated?: true
    _all?: true
  }

  export type MovieAggregateArgs = {
    /**
     * Filter which Movie to aggregate.
     * 
    **/
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     * 
    **/
    orderBy?: Enumerable<MovieOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movies
    **/
    _count?: true | MovieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieMaxAggregateInputType
  }

  export type GetMovieAggregateType<T extends MovieAggregateArgs> = {
        [P in keyof T & keyof AggregateMovie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovie[P]>
      : GetScalarType<T[P], AggregateMovie[P]>
  }




  export type MovieGroupByArgs = {
    where?: MovieWhereInput
    orderBy?: Enumerable<MovieOrderByWithAggregationInput>
    by: Array<MovieScalarFieldEnum>
    having?: MovieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieCountAggregateInputType | true
    _avg?: MovieAvgAggregateInputType
    _sum?: MovieSumAggregateInputType
    _min?: MovieMinAggregateInputType
    _max?: MovieMaxAggregateInputType
  }


  export type MovieGroupByOutputType = {
    movieId: string
    title: string
    description: string | null
    length: number | null
    released: Date | null
    available: Date | null
    infoId: string
    created: Date
    updated: Date
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  type GetMovieGroupByPayload<T extends MovieGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MovieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieGroupByOutputType[P]>
            : GetScalarType<T[P], MovieGroupByOutputType[P]>
        }
      >
    >


  export type MovieSelect = {
    movieId?: boolean
    title?: boolean
    description?: boolean
    length?: boolean
    released?: boolean
    available?: boolean
    infoId?: boolean
    created?: boolean
    updated?: boolean
    genre?: boolean | GenreFindManyArgs
    tags?: boolean | TagFindManyArgs
    info?: boolean | MetaInfoArgs
    profile?: boolean | ProfileFindManyArgs
    _count?: boolean | MovieCountOutputTypeArgs
  }

  export type MovieInclude = {
    genre?: boolean | GenreFindManyArgs
    tags?: boolean | TagFindManyArgs
    info?: boolean | MetaInfoArgs
    profile?: boolean | ProfileFindManyArgs
    _count?: boolean | MovieCountOutputTypeArgs
  }

  export type MovieGetPayload<
    S extends boolean | null | undefined | MovieArgs,
    U = keyof S
      > = S extends true
        ? Movie
    : S extends undefined
    ? never
    : S extends MovieArgs | MovieFindManyArgs
    ?'include' extends U
    ? Movie  & {
    [P in TrueKeys<S['include']>]:
        P extends 'genre' ? Array < GenreGetPayload<S['include'][P]>>  :
        P extends 'tags' ? Array < TagGetPayload<S['include'][P]>>  :
        P extends 'info' ? MetaInfoGetPayload<S['include'][P]> :
        P extends 'profile' ? Array < ProfileGetPayload<S['include'][P]>>  :
        P extends '_count' ? MovieCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'genre' ? Array < GenreGetPayload<S['select'][P]>>  :
        P extends 'tags' ? Array < TagGetPayload<S['select'][P]>>  :
        P extends 'info' ? MetaInfoGetPayload<S['select'][P]> :
        P extends 'profile' ? Array < ProfileGetPayload<S['select'][P]>>  :
        P extends '_count' ? MovieCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Movie ? Movie[P] : never
  } 
    : Movie
  : Movie


  type MovieCountArgs = Merge<
    Omit<MovieFindManyArgs, 'select' | 'include'> & {
      select?: MovieCountAggregateInputType | true
    }
  >

  export interface MovieDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Movie that matches the filter.
     * @param {MovieFindUniqueArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MovieFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MovieFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Movie'> extends True ? CheckSelect<T, Prisma__MovieClient<Movie>, Prisma__MovieClient<MovieGetPayload<T>>> : CheckSelect<T, Prisma__MovieClient<Movie | null >, Prisma__MovieClient<MovieGetPayload<T> | null >>

    /**
     * Find the first Movie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MovieFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MovieFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Movie'> extends True ? CheckSelect<T, Prisma__MovieClient<Movie>, Prisma__MovieClient<MovieGetPayload<T>>> : CheckSelect<T, Prisma__MovieClient<Movie | null >, Prisma__MovieClient<MovieGetPayload<T> | null >>

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movie.findMany()
     * 
     * // Get first 10 Movies
     * const movies = await prisma.movie.findMany({ take: 10 })
     * 
     * // Only select the `movieId`
     * const movieWithMovieIdOnly = await prisma.movie.findMany({ select: { movieId: true } })
     * 
    **/
    findMany<T extends MovieFindManyArgs>(
      args?: SelectSubset<T, MovieFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Movie>>, PrismaPromise<Array<MovieGetPayload<T>>>>

    /**
     * Create a Movie.
     * @param {MovieCreateArgs} args - Arguments to create a Movie.
     * @example
     * // Create one Movie
     * const Movie = await prisma.movie.create({
     *   data: {
     *     // ... data to create a Movie
     *   }
     * })
     * 
    **/
    create<T extends MovieCreateArgs>(
      args: SelectSubset<T, MovieCreateArgs>
    ): CheckSelect<T, Prisma__MovieClient<Movie>, Prisma__MovieClient<MovieGetPayload<T>>>

    /**
     * Create many Movies.
     *     @param {MovieCreateManyArgs} args - Arguments to create many Movies.
     *     @example
     *     // Create many Movies
     *     const movie = await prisma.movie.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MovieCreateManyArgs>(
      args?: SelectSubset<T, MovieCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Movie.
     * @param {MovieDeleteArgs} args - Arguments to delete one Movie.
     * @example
     * // Delete one Movie
     * const Movie = await prisma.movie.delete({
     *   where: {
     *     // ... filter to delete one Movie
     *   }
     * })
     * 
    **/
    delete<T extends MovieDeleteArgs>(
      args: SelectSubset<T, MovieDeleteArgs>
    ): CheckSelect<T, Prisma__MovieClient<Movie>, Prisma__MovieClient<MovieGetPayload<T>>>

    /**
     * Update one Movie.
     * @param {MovieUpdateArgs} args - Arguments to update one Movie.
     * @example
     * // Update one Movie
     * const movie = await prisma.movie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MovieUpdateArgs>(
      args: SelectSubset<T, MovieUpdateArgs>
    ): CheckSelect<T, Prisma__MovieClient<Movie>, Prisma__MovieClient<MovieGetPayload<T>>>

    /**
     * Delete zero or more Movies.
     * @param {MovieDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MovieDeleteManyArgs>(
      args?: SelectSubset<T, MovieDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MovieUpdateManyArgs>(
      args: SelectSubset<T, MovieUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Movie.
     * @param {MovieUpsertArgs} args - Arguments to update or create a Movie.
     * @example
     * // Update or create a Movie
     * const movie = await prisma.movie.upsert({
     *   create: {
     *     // ... data to create a Movie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movie we want to update
     *   }
     * })
    **/
    upsert<T extends MovieUpsertArgs>(
      args: SelectSubset<T, MovieUpsertArgs>
    ): CheckSelect<T, Prisma__MovieClient<Movie>, Prisma__MovieClient<MovieGetPayload<T>>>

    /**
     * Find one Movie that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {MovieFindUniqueOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MovieFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MovieFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__MovieClient<Movie>, Prisma__MovieClient<MovieGetPayload<T>>>

    /**
     * Find the first Movie that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MovieFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MovieFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__MovieClient<Movie>, Prisma__MovieClient<MovieGetPayload<T>>>

    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movie.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
    **/
    count<T extends MovieCountArgs>(
      args?: Subset<T, MovieCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovieAggregateArgs>(args: Subset<T, MovieAggregateArgs>): PrismaPromise<GetMovieAggregateType<T>>

    /**
     * Group by Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MovieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieGroupByArgs['orderBy'] }
        : { orderBy?: MovieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MovieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Movie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MovieClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    genre<T extends GenreFindManyArgs = {}>(args?: Subset<T, GenreFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Genre>>, PrismaPromise<Array<GenreGetPayload<T>>>>;

    tags<T extends TagFindManyArgs = {}>(args?: Subset<T, TagFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Tag>>, PrismaPromise<Array<TagGetPayload<T>>>>;

    info<T extends MetaInfoArgs = {}>(args?: Subset<T, MetaInfoArgs>): CheckSelect<T, Prisma__MetaInfoClient<MetaInfo | null >, Prisma__MetaInfoClient<MetaInfoGetPayload<T> | null >>;

    profile<T extends ProfileFindManyArgs = {}>(args?: Subset<T, ProfileFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Profile>>, PrismaPromise<Array<ProfileGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Movie base type for findUnique actions
   */
  export type MovieFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
    /**
     * Filter, which Movie to fetch.
     * 
    **/
    where: MovieWhereUniqueInput
  }

  /**
   * Movie: findUnique
   */
  export interface MovieFindUniqueArgs extends MovieFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Movie base type for findFirst actions
   */
  export type MovieFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
    /**
     * Filter, which Movie to fetch.
     * 
    **/
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     * 
    **/
    orderBy?: Enumerable<MovieOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     * 
    **/
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     * 
    **/
    distinct?: Enumerable<MovieScalarFieldEnum>
  }

  /**
   * Movie: findFirst
   */
  export interface MovieFindFirstArgs extends MovieFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Movie findMany
   */
  export type MovieFindManyArgs = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
    /**
     * Filter, which Movies to fetch.
     * 
    **/
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     * 
    **/
    orderBy?: Enumerable<MovieOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movies.
     * 
    **/
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MovieScalarFieldEnum>
  }


  /**
   * Movie create
   */
  export type MovieCreateArgs = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
    /**
     * The data needed to create a Movie.
     * 
    **/
    data: XOR<MovieCreateInput, MovieUncheckedCreateInput>
  }


  /**
   * Movie createMany
   */
  export type MovieCreateManyArgs = {
    /**
     * The data used to create many Movies.
     * 
    **/
    data: Enumerable<MovieCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Movie update
   */
  export type MovieUpdateArgs = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
    /**
     * The data needed to update a Movie.
     * 
    **/
    data: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
    /**
     * Choose, which Movie to update.
     * 
    **/
    where: MovieWhereUniqueInput
  }


  /**
   * Movie updateMany
   */
  export type MovieUpdateManyArgs = {
    /**
     * The data used to update Movies.
     * 
    **/
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     * 
    **/
    where?: MovieWhereInput
  }


  /**
   * Movie upsert
   */
  export type MovieUpsertArgs = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
    /**
     * The filter to search for the Movie to update in case it exists.
     * 
    **/
    where: MovieWhereUniqueInput
    /**
     * In case the Movie found by the `where` argument doesn't exist, create a new Movie with this data.
     * 
    **/
    create: XOR<MovieCreateInput, MovieUncheckedCreateInput>
    /**
     * In case the Movie was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
  }


  /**
   * Movie delete
   */
  export type MovieDeleteArgs = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
    /**
     * Filter which Movie to delete.
     * 
    **/
    where: MovieWhereUniqueInput
  }


  /**
   * Movie deleteMany
   */
  export type MovieDeleteManyArgs = {
    /**
     * Filter which Movies to delete
     * 
    **/
    where?: MovieWhereInput
  }


  /**
   * Movie: findUniqueOrThrow
   */
  export type MovieFindUniqueOrThrowArgs = MovieFindUniqueArgsBase
      

  /**
   * Movie: findFirstOrThrow
   */
  export type MovieFindFirstOrThrowArgs = MovieFindFirstArgsBase
      

  /**
   * Movie without action
   */
  export type MovieArgs = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
  }



  /**
   * Model MetaInfo
   */


  export type AggregateMetaInfo = {
    _count: MetaInfoCountAggregateOutputType | null
    _min: MetaInfoMinAggregateOutputType | null
    _max: MetaInfoMaxAggregateOutputType | null
  }

  export type MetaInfoMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    movieId: string | null
    created: Date | null
    updated: Date | null
  }

  export type MetaInfoMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    movieId: string | null
    created: Date | null
    updated: Date | null
  }

  export type MetaInfoCountAggregateOutputType = {
    id: number
    title: number
    description: number
    movieId: number
    created: number
    updated: number
    _all: number
  }


  export type MetaInfoMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    movieId?: true
    created?: true
    updated?: true
  }

  export type MetaInfoMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    movieId?: true
    created?: true
    updated?: true
  }

  export type MetaInfoCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    movieId?: true
    created?: true
    updated?: true
    _all?: true
  }

  export type MetaInfoAggregateArgs = {
    /**
     * Filter which MetaInfo to aggregate.
     * 
    **/
    where?: MetaInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetaInfos to fetch.
     * 
    **/
    orderBy?: Enumerable<MetaInfoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: MetaInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetaInfos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetaInfos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MetaInfos
    **/
    _count?: true | MetaInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetaInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetaInfoMaxAggregateInputType
  }

  export type GetMetaInfoAggregateType<T extends MetaInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateMetaInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetaInfo[P]>
      : GetScalarType<T[P], AggregateMetaInfo[P]>
  }




  export type MetaInfoGroupByArgs = {
    where?: MetaInfoWhereInput
    orderBy?: Enumerable<MetaInfoOrderByWithAggregationInput>
    by: Array<MetaInfoScalarFieldEnum>
    having?: MetaInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetaInfoCountAggregateInputType | true
    _min?: MetaInfoMinAggregateInputType
    _max?: MetaInfoMaxAggregateInputType
  }


  export type MetaInfoGroupByOutputType = {
    id: string
    title: string
    description: string
    movieId: string
    created: Date
    updated: Date
    _count: MetaInfoCountAggregateOutputType | null
    _min: MetaInfoMinAggregateOutputType | null
    _max: MetaInfoMaxAggregateOutputType | null
  }

  type GetMetaInfoGroupByPayload<T extends MetaInfoGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MetaInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetaInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetaInfoGroupByOutputType[P]>
            : GetScalarType<T[P], MetaInfoGroupByOutputType[P]>
        }
      >
    >


  export type MetaInfoSelect = {
    id?: boolean
    title?: boolean
    description?: boolean
    movieId?: boolean
    created?: boolean
    updated?: boolean
    poster?: boolean | PosterFindManyArgs
    Movie?: boolean | MovieArgs
    _count?: boolean | MetaInfoCountOutputTypeArgs
  }

  export type MetaInfoInclude = {
    poster?: boolean | PosterFindManyArgs
    Movie?: boolean | MovieArgs
    _count?: boolean | MetaInfoCountOutputTypeArgs
  }

  export type MetaInfoGetPayload<
    S extends boolean | null | undefined | MetaInfoArgs,
    U = keyof S
      > = S extends true
        ? MetaInfo
    : S extends undefined
    ? never
    : S extends MetaInfoArgs | MetaInfoFindManyArgs
    ?'include' extends U
    ? MetaInfo  & {
    [P in TrueKeys<S['include']>]:
        P extends 'poster' ? Array < PosterGetPayload<S['include'][P]>>  :
        P extends 'Movie' ? MovieGetPayload<S['include'][P]> | null :
        P extends '_count' ? MetaInfoCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'poster' ? Array < PosterGetPayload<S['select'][P]>>  :
        P extends 'Movie' ? MovieGetPayload<S['select'][P]> | null :
        P extends '_count' ? MetaInfoCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof MetaInfo ? MetaInfo[P] : never
  } 
    : MetaInfo
  : MetaInfo


  type MetaInfoCountArgs = Merge<
    Omit<MetaInfoFindManyArgs, 'select' | 'include'> & {
      select?: MetaInfoCountAggregateInputType | true
    }
  >

  export interface MetaInfoDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one MetaInfo that matches the filter.
     * @param {MetaInfoFindUniqueArgs} args - Arguments to find a MetaInfo
     * @example
     * // Get one MetaInfo
     * const metaInfo = await prisma.metaInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MetaInfoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MetaInfoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'MetaInfo'> extends True ? CheckSelect<T, Prisma__MetaInfoClient<MetaInfo>, Prisma__MetaInfoClient<MetaInfoGetPayload<T>>> : CheckSelect<T, Prisma__MetaInfoClient<MetaInfo | null >, Prisma__MetaInfoClient<MetaInfoGetPayload<T> | null >>

    /**
     * Find the first MetaInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaInfoFindFirstArgs} args - Arguments to find a MetaInfo
     * @example
     * // Get one MetaInfo
     * const metaInfo = await prisma.metaInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MetaInfoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MetaInfoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'MetaInfo'> extends True ? CheckSelect<T, Prisma__MetaInfoClient<MetaInfo>, Prisma__MetaInfoClient<MetaInfoGetPayload<T>>> : CheckSelect<T, Prisma__MetaInfoClient<MetaInfo | null >, Prisma__MetaInfoClient<MetaInfoGetPayload<T> | null >>

    /**
     * Find zero or more MetaInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaInfoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MetaInfos
     * const metaInfos = await prisma.metaInfo.findMany()
     * 
     * // Get first 10 MetaInfos
     * const metaInfos = await prisma.metaInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metaInfoWithIdOnly = await prisma.metaInfo.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MetaInfoFindManyArgs>(
      args?: SelectSubset<T, MetaInfoFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<MetaInfo>>, PrismaPromise<Array<MetaInfoGetPayload<T>>>>

    /**
     * Create a MetaInfo.
     * @param {MetaInfoCreateArgs} args - Arguments to create a MetaInfo.
     * @example
     * // Create one MetaInfo
     * const MetaInfo = await prisma.metaInfo.create({
     *   data: {
     *     // ... data to create a MetaInfo
     *   }
     * })
     * 
    **/
    create<T extends MetaInfoCreateArgs>(
      args: SelectSubset<T, MetaInfoCreateArgs>
    ): CheckSelect<T, Prisma__MetaInfoClient<MetaInfo>, Prisma__MetaInfoClient<MetaInfoGetPayload<T>>>

    /**
     * Create many MetaInfos.
     *     @param {MetaInfoCreateManyArgs} args - Arguments to create many MetaInfos.
     *     @example
     *     // Create many MetaInfos
     *     const metaInfo = await prisma.metaInfo.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MetaInfoCreateManyArgs>(
      args?: SelectSubset<T, MetaInfoCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a MetaInfo.
     * @param {MetaInfoDeleteArgs} args - Arguments to delete one MetaInfo.
     * @example
     * // Delete one MetaInfo
     * const MetaInfo = await prisma.metaInfo.delete({
     *   where: {
     *     // ... filter to delete one MetaInfo
     *   }
     * })
     * 
    **/
    delete<T extends MetaInfoDeleteArgs>(
      args: SelectSubset<T, MetaInfoDeleteArgs>
    ): CheckSelect<T, Prisma__MetaInfoClient<MetaInfo>, Prisma__MetaInfoClient<MetaInfoGetPayload<T>>>

    /**
     * Update one MetaInfo.
     * @param {MetaInfoUpdateArgs} args - Arguments to update one MetaInfo.
     * @example
     * // Update one MetaInfo
     * const metaInfo = await prisma.metaInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MetaInfoUpdateArgs>(
      args: SelectSubset<T, MetaInfoUpdateArgs>
    ): CheckSelect<T, Prisma__MetaInfoClient<MetaInfo>, Prisma__MetaInfoClient<MetaInfoGetPayload<T>>>

    /**
     * Delete zero or more MetaInfos.
     * @param {MetaInfoDeleteManyArgs} args - Arguments to filter MetaInfos to delete.
     * @example
     * // Delete a few MetaInfos
     * const { count } = await prisma.metaInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MetaInfoDeleteManyArgs>(
      args?: SelectSubset<T, MetaInfoDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetaInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MetaInfos
     * const metaInfo = await prisma.metaInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MetaInfoUpdateManyArgs>(
      args: SelectSubset<T, MetaInfoUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one MetaInfo.
     * @param {MetaInfoUpsertArgs} args - Arguments to update or create a MetaInfo.
     * @example
     * // Update or create a MetaInfo
     * const metaInfo = await prisma.metaInfo.upsert({
     *   create: {
     *     // ... data to create a MetaInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MetaInfo we want to update
     *   }
     * })
    **/
    upsert<T extends MetaInfoUpsertArgs>(
      args: SelectSubset<T, MetaInfoUpsertArgs>
    ): CheckSelect<T, Prisma__MetaInfoClient<MetaInfo>, Prisma__MetaInfoClient<MetaInfoGetPayload<T>>>

    /**
     * Find one MetaInfo that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {MetaInfoFindUniqueOrThrowArgs} args - Arguments to find a MetaInfo
     * @example
     * // Get one MetaInfo
     * const metaInfo = await prisma.metaInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MetaInfoFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MetaInfoFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__MetaInfoClient<MetaInfo>, Prisma__MetaInfoClient<MetaInfoGetPayload<T>>>

    /**
     * Find the first MetaInfo that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaInfoFindFirstOrThrowArgs} args - Arguments to find a MetaInfo
     * @example
     * // Get one MetaInfo
     * const metaInfo = await prisma.metaInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MetaInfoFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MetaInfoFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__MetaInfoClient<MetaInfo>, Prisma__MetaInfoClient<MetaInfoGetPayload<T>>>

    /**
     * Count the number of MetaInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaInfoCountArgs} args - Arguments to filter MetaInfos to count.
     * @example
     * // Count the number of MetaInfos
     * const count = await prisma.metaInfo.count({
     *   where: {
     *     // ... the filter for the MetaInfos we want to count
     *   }
     * })
    **/
    count<T extends MetaInfoCountArgs>(
      args?: Subset<T, MetaInfoCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetaInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MetaInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MetaInfoAggregateArgs>(args: Subset<T, MetaInfoAggregateArgs>): PrismaPromise<GetMetaInfoAggregateType<T>>

    /**
     * Group by MetaInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MetaInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetaInfoGroupByArgs['orderBy'] }
        : { orderBy?: MetaInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MetaInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetaInfoGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for MetaInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MetaInfoClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    poster<T extends PosterFindManyArgs = {}>(args?: Subset<T, PosterFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Poster>>, PrismaPromise<Array<PosterGetPayload<T>>>>;

    Movie<T extends MovieArgs = {}>(args?: Subset<T, MovieArgs>): CheckSelect<T, Prisma__MovieClient<Movie | null >, Prisma__MovieClient<MovieGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * MetaInfo base type for findUnique actions
   */
  export type MetaInfoFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the MetaInfo
     * 
    **/
    select?: MetaInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MetaInfoInclude | null
    /**
     * Filter, which MetaInfo to fetch.
     * 
    **/
    where: MetaInfoWhereUniqueInput
  }

  /**
   * MetaInfo: findUnique
   */
  export interface MetaInfoFindUniqueArgs extends MetaInfoFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MetaInfo base type for findFirst actions
   */
  export type MetaInfoFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the MetaInfo
     * 
    **/
    select?: MetaInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MetaInfoInclude | null
    /**
     * Filter, which MetaInfo to fetch.
     * 
    **/
    where?: MetaInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetaInfos to fetch.
     * 
    **/
    orderBy?: Enumerable<MetaInfoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetaInfos.
     * 
    **/
    cursor?: MetaInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetaInfos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetaInfos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetaInfos.
     * 
    **/
    distinct?: Enumerable<MetaInfoScalarFieldEnum>
  }

  /**
   * MetaInfo: findFirst
   */
  export interface MetaInfoFindFirstArgs extends MetaInfoFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MetaInfo findMany
   */
  export type MetaInfoFindManyArgs = {
    /**
     * Select specific fields to fetch from the MetaInfo
     * 
    **/
    select?: MetaInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MetaInfoInclude | null
    /**
     * Filter, which MetaInfos to fetch.
     * 
    **/
    where?: MetaInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetaInfos to fetch.
     * 
    **/
    orderBy?: Enumerable<MetaInfoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MetaInfos.
     * 
    **/
    cursor?: MetaInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetaInfos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetaInfos.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MetaInfoScalarFieldEnum>
  }


  /**
   * MetaInfo create
   */
  export type MetaInfoCreateArgs = {
    /**
     * Select specific fields to fetch from the MetaInfo
     * 
    **/
    select?: MetaInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MetaInfoInclude | null
    /**
     * The data needed to create a MetaInfo.
     * 
    **/
    data: XOR<MetaInfoCreateInput, MetaInfoUncheckedCreateInput>
  }


  /**
   * MetaInfo createMany
   */
  export type MetaInfoCreateManyArgs = {
    /**
     * The data used to create many MetaInfos.
     * 
    **/
    data: Enumerable<MetaInfoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * MetaInfo update
   */
  export type MetaInfoUpdateArgs = {
    /**
     * Select specific fields to fetch from the MetaInfo
     * 
    **/
    select?: MetaInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MetaInfoInclude | null
    /**
     * The data needed to update a MetaInfo.
     * 
    **/
    data: XOR<MetaInfoUpdateInput, MetaInfoUncheckedUpdateInput>
    /**
     * Choose, which MetaInfo to update.
     * 
    **/
    where: MetaInfoWhereUniqueInput
  }


  /**
   * MetaInfo updateMany
   */
  export type MetaInfoUpdateManyArgs = {
    /**
     * The data used to update MetaInfos.
     * 
    **/
    data: XOR<MetaInfoUpdateManyMutationInput, MetaInfoUncheckedUpdateManyInput>
    /**
     * Filter which MetaInfos to update
     * 
    **/
    where?: MetaInfoWhereInput
  }


  /**
   * MetaInfo upsert
   */
  export type MetaInfoUpsertArgs = {
    /**
     * Select specific fields to fetch from the MetaInfo
     * 
    **/
    select?: MetaInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MetaInfoInclude | null
    /**
     * The filter to search for the MetaInfo to update in case it exists.
     * 
    **/
    where: MetaInfoWhereUniqueInput
    /**
     * In case the MetaInfo found by the `where` argument doesn't exist, create a new MetaInfo with this data.
     * 
    **/
    create: XOR<MetaInfoCreateInput, MetaInfoUncheckedCreateInput>
    /**
     * In case the MetaInfo was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<MetaInfoUpdateInput, MetaInfoUncheckedUpdateInput>
  }


  /**
   * MetaInfo delete
   */
  export type MetaInfoDeleteArgs = {
    /**
     * Select specific fields to fetch from the MetaInfo
     * 
    **/
    select?: MetaInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MetaInfoInclude | null
    /**
     * Filter which MetaInfo to delete.
     * 
    **/
    where: MetaInfoWhereUniqueInput
  }


  /**
   * MetaInfo deleteMany
   */
  export type MetaInfoDeleteManyArgs = {
    /**
     * Filter which MetaInfos to delete
     * 
    **/
    where?: MetaInfoWhereInput
  }


  /**
   * MetaInfo: findUniqueOrThrow
   */
  export type MetaInfoFindUniqueOrThrowArgs = MetaInfoFindUniqueArgsBase
      

  /**
   * MetaInfo: findFirstOrThrow
   */
  export type MetaInfoFindFirstOrThrowArgs = MetaInfoFindFirstArgsBase
      

  /**
   * MetaInfo without action
   */
  export type MetaInfoArgs = {
    /**
     * Select specific fields to fetch from the MetaInfo
     * 
    **/
    select?: MetaInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MetaInfoInclude | null
  }



  /**
   * Model Genre
   */


  export type AggregateGenre = {
    _count: GenreCountAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  export type GenreMinAggregateOutputType = {
    id: string | null
    name: string | null
    info: string | null
    created: Date | null
    updated: Date | null
  }

  export type GenreMaxAggregateOutputType = {
    id: string | null
    name: string | null
    info: string | null
    created: Date | null
    updated: Date | null
  }

  export type GenreCountAggregateOutputType = {
    id: number
    name: number
    info: number
    created: number
    updated: number
    _all: number
  }


  export type GenreMinAggregateInputType = {
    id?: true
    name?: true
    info?: true
    created?: true
    updated?: true
  }

  export type GenreMaxAggregateInputType = {
    id?: true
    name?: true
    info?: true
    created?: true
    updated?: true
  }

  export type GenreCountAggregateInputType = {
    id?: true
    name?: true
    info?: true
    created?: true
    updated?: true
    _all?: true
  }

  export type GenreAggregateArgs = {
    /**
     * Filter which Genre to aggregate.
     * 
    **/
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     * 
    **/
    orderBy?: Enumerable<GenreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenreMaxAggregateInputType
  }

  export type GetGenreAggregateType<T extends GenreAggregateArgs> = {
        [P in keyof T & keyof AggregateGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenre[P]>
      : GetScalarType<T[P], AggregateGenre[P]>
  }




  export type GenreGroupByArgs = {
    where?: GenreWhereInput
    orderBy?: Enumerable<GenreOrderByWithAggregationInput>
    by: Array<GenreScalarFieldEnum>
    having?: GenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenreCountAggregateInputType | true
    _min?: GenreMinAggregateInputType
    _max?: GenreMaxAggregateInputType
  }


  export type GenreGroupByOutputType = {
    id: string
    name: string
    info: string
    created: Date
    updated: Date
    _count: GenreCountAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  type GetGenreGroupByPayload<T extends GenreGroupByArgs> = PrismaPromise<
    Array<
      PickArray<GenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenreGroupByOutputType[P]>
            : GetScalarType<T[P], GenreGroupByOutputType[P]>
        }
      >
    >


  export type GenreSelect = {
    id?: boolean
    name?: boolean
    info?: boolean
    created?: boolean
    updated?: boolean
    movies?: boolean | MovieFindManyArgs
    profile?: boolean | ProfileFindManyArgs
    _count?: boolean | GenreCountOutputTypeArgs
  }

  export type GenreInclude = {
    movies?: boolean | MovieFindManyArgs
    profile?: boolean | ProfileFindManyArgs
    _count?: boolean | GenreCountOutputTypeArgs
  }

  export type GenreGetPayload<
    S extends boolean | null | undefined | GenreArgs,
    U = keyof S
      > = S extends true
        ? Genre
    : S extends undefined
    ? never
    : S extends GenreArgs | GenreFindManyArgs
    ?'include' extends U
    ? Genre  & {
    [P in TrueKeys<S['include']>]:
        P extends 'movies' ? Array < MovieGetPayload<S['include'][P]>>  :
        P extends 'profile' ? Array < ProfileGetPayload<S['include'][P]>>  :
        P extends '_count' ? GenreCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'movies' ? Array < MovieGetPayload<S['select'][P]>>  :
        P extends 'profile' ? Array < ProfileGetPayload<S['select'][P]>>  :
        P extends '_count' ? GenreCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Genre ? Genre[P] : never
  } 
    : Genre
  : Genre


  type GenreCountArgs = Merge<
    Omit<GenreFindManyArgs, 'select' | 'include'> & {
      select?: GenreCountAggregateInputType | true
    }
  >

  export interface GenreDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Genre that matches the filter.
     * @param {GenreFindUniqueArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GenreFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GenreFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Genre'> extends True ? CheckSelect<T, Prisma__GenreClient<Genre>, Prisma__GenreClient<GenreGetPayload<T>>> : CheckSelect<T, Prisma__GenreClient<Genre | null >, Prisma__GenreClient<GenreGetPayload<T> | null >>

    /**
     * Find the first Genre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GenreFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GenreFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Genre'> extends True ? CheckSelect<T, Prisma__GenreClient<Genre>, Prisma__GenreClient<GenreGetPayload<T>>> : CheckSelect<T, Prisma__GenreClient<Genre | null >, Prisma__GenreClient<GenreGetPayload<T> | null >>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genre.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genreWithIdOnly = await prisma.genre.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GenreFindManyArgs>(
      args?: SelectSubset<T, GenreFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Genre>>, PrismaPromise<Array<GenreGetPayload<T>>>>

    /**
     * Create a Genre.
     * @param {GenreCreateArgs} args - Arguments to create a Genre.
     * @example
     * // Create one Genre
     * const Genre = await prisma.genre.create({
     *   data: {
     *     // ... data to create a Genre
     *   }
     * })
     * 
    **/
    create<T extends GenreCreateArgs>(
      args: SelectSubset<T, GenreCreateArgs>
    ): CheckSelect<T, Prisma__GenreClient<Genre>, Prisma__GenreClient<GenreGetPayload<T>>>

    /**
     * Create many Genres.
     *     @param {GenreCreateManyArgs} args - Arguments to create many Genres.
     *     @example
     *     // Create many Genres
     *     const genre = await prisma.genre.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GenreCreateManyArgs>(
      args?: SelectSubset<T, GenreCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Genre.
     * @param {GenreDeleteArgs} args - Arguments to delete one Genre.
     * @example
     * // Delete one Genre
     * const Genre = await prisma.genre.delete({
     *   where: {
     *     // ... filter to delete one Genre
     *   }
     * })
     * 
    **/
    delete<T extends GenreDeleteArgs>(
      args: SelectSubset<T, GenreDeleteArgs>
    ): CheckSelect<T, Prisma__GenreClient<Genre>, Prisma__GenreClient<GenreGetPayload<T>>>

    /**
     * Update one Genre.
     * @param {GenreUpdateArgs} args - Arguments to update one Genre.
     * @example
     * // Update one Genre
     * const genre = await prisma.genre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GenreUpdateArgs>(
      args: SelectSubset<T, GenreUpdateArgs>
    ): CheckSelect<T, Prisma__GenreClient<Genre>, Prisma__GenreClient<GenreGetPayload<T>>>

    /**
     * Delete zero or more Genres.
     * @param {GenreDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GenreDeleteManyArgs>(
      args?: SelectSubset<T, GenreDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GenreUpdateManyArgs>(
      args: SelectSubset<T, GenreUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Genre.
     * @param {GenreUpsertArgs} args - Arguments to update or create a Genre.
     * @example
     * // Update or create a Genre
     * const genre = await prisma.genre.upsert({
     *   create: {
     *     // ... data to create a Genre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genre we want to update
     *   }
     * })
    **/
    upsert<T extends GenreUpsertArgs>(
      args: SelectSubset<T, GenreUpsertArgs>
    ): CheckSelect<T, Prisma__GenreClient<Genre>, Prisma__GenreClient<GenreGetPayload<T>>>

    /**
     * Find one Genre that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {GenreFindUniqueOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GenreFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, GenreFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__GenreClient<Genre>, Prisma__GenreClient<GenreGetPayload<T>>>

    /**
     * Find the first Genre that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GenreFindFirstOrThrowArgs>(
      args?: SelectSubset<T, GenreFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__GenreClient<Genre>, Prisma__GenreClient<GenreGetPayload<T>>>

    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genre.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenreCountArgs>(
      args?: Subset<T, GenreCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenreAggregateArgs>(args: Subset<T, GenreAggregateArgs>): PrismaPromise<GetGenreAggregateType<T>>

    /**
     * Group by Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenreGroupByArgs['orderBy'] }
        : { orderBy?: GenreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenreGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Genre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GenreClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    movies<T extends MovieFindManyArgs = {}>(args?: Subset<T, MovieFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Movie>>, PrismaPromise<Array<MovieGetPayload<T>>>>;

    profile<T extends ProfileFindManyArgs = {}>(args?: Subset<T, ProfileFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Profile>>, PrismaPromise<Array<ProfileGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Genre base type for findUnique actions
   */
  export type GenreFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Genre
     * 
    **/
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GenreInclude | null
    /**
     * Filter, which Genre to fetch.
     * 
    **/
    where: GenreWhereUniqueInput
  }

  /**
   * Genre: findUnique
   */
  export interface GenreFindUniqueArgs extends GenreFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Genre base type for findFirst actions
   */
  export type GenreFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Genre
     * 
    **/
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GenreInclude | null
    /**
     * Filter, which Genre to fetch.
     * 
    **/
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     * 
    **/
    orderBy?: Enumerable<GenreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     * 
    **/
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     * 
    **/
    distinct?: Enumerable<GenreScalarFieldEnum>
  }

  /**
   * Genre: findFirst
   */
  export interface GenreFindFirstArgs extends GenreFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Genre findMany
   */
  export type GenreFindManyArgs = {
    /**
     * Select specific fields to fetch from the Genre
     * 
    **/
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GenreInclude | null
    /**
     * Filter, which Genres to fetch.
     * 
    **/
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     * 
    **/
    orderBy?: Enumerable<GenreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     * 
    **/
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     * 
    **/
    skip?: number
    distinct?: Enumerable<GenreScalarFieldEnum>
  }


  /**
   * Genre create
   */
  export type GenreCreateArgs = {
    /**
     * Select specific fields to fetch from the Genre
     * 
    **/
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GenreInclude | null
    /**
     * The data needed to create a Genre.
     * 
    **/
    data: XOR<GenreCreateInput, GenreUncheckedCreateInput>
  }


  /**
   * Genre createMany
   */
  export type GenreCreateManyArgs = {
    /**
     * The data used to create many Genres.
     * 
    **/
    data: Enumerable<GenreCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Genre update
   */
  export type GenreUpdateArgs = {
    /**
     * Select specific fields to fetch from the Genre
     * 
    **/
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GenreInclude | null
    /**
     * The data needed to update a Genre.
     * 
    **/
    data: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
    /**
     * Choose, which Genre to update.
     * 
    **/
    where: GenreWhereUniqueInput
  }


  /**
   * Genre updateMany
   */
  export type GenreUpdateManyArgs = {
    /**
     * The data used to update Genres.
     * 
    **/
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     * 
    **/
    where?: GenreWhereInput
  }


  /**
   * Genre upsert
   */
  export type GenreUpsertArgs = {
    /**
     * Select specific fields to fetch from the Genre
     * 
    **/
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GenreInclude | null
    /**
     * The filter to search for the Genre to update in case it exists.
     * 
    **/
    where: GenreWhereUniqueInput
    /**
     * In case the Genre found by the `where` argument doesn't exist, create a new Genre with this data.
     * 
    **/
    create: XOR<GenreCreateInput, GenreUncheckedCreateInput>
    /**
     * In case the Genre was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
  }


  /**
   * Genre delete
   */
  export type GenreDeleteArgs = {
    /**
     * Select specific fields to fetch from the Genre
     * 
    **/
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GenreInclude | null
    /**
     * Filter which Genre to delete.
     * 
    **/
    where: GenreWhereUniqueInput
  }


  /**
   * Genre deleteMany
   */
  export type GenreDeleteManyArgs = {
    /**
     * Filter which Genres to delete
     * 
    **/
    where?: GenreWhereInput
  }


  /**
   * Genre: findUniqueOrThrow
   */
  export type GenreFindUniqueOrThrowArgs = GenreFindUniqueArgsBase
      

  /**
   * Genre: findFirstOrThrow
   */
  export type GenreFindFirstOrThrowArgs = GenreFindFirstArgsBase
      

  /**
   * Genre without action
   */
  export type GenreArgs = {
    /**
     * Select specific fields to fetch from the Genre
     * 
    **/
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GenreInclude | null
  }



  /**
   * Model Tag
   */


  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
    created: Date | null
    updated: Date | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    created: Date | null
    updated: Date | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    created: number
    updated: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    created?: true
    updated?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    created?: true
    updated?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    created?: true
    updated?: true
    _all?: true
  }

  export type TagAggregateArgs = {
    /**
     * Filter which Tag to aggregate.
     * 
    **/
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     * 
    **/
    orderBy?: Enumerable<TagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs = {
    where?: TagWhereInput
    orderBy?: Enumerable<TagOrderByWithAggregationInput>
    by: Array<TagScalarFieldEnum>
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }


  export type TagGroupByOutputType = {
    id: string
    name: string
    created: Date
    updated: Date
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect = {
    id?: boolean
    name?: boolean
    created?: boolean
    updated?: boolean
    movies?: boolean | MovieFindManyArgs
    _count?: boolean | TagCountOutputTypeArgs
  }

  export type TagInclude = {
    movies?: boolean | MovieFindManyArgs
    _count?: boolean | TagCountOutputTypeArgs
  }

  export type TagGetPayload<
    S extends boolean | null | undefined | TagArgs,
    U = keyof S
      > = S extends true
        ? Tag
    : S extends undefined
    ? never
    : S extends TagArgs | TagFindManyArgs
    ?'include' extends U
    ? Tag  & {
    [P in TrueKeys<S['include']>]:
        P extends 'movies' ? Array < MovieGetPayload<S['include'][P]>>  :
        P extends '_count' ? TagCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'movies' ? Array < MovieGetPayload<S['select'][P]>>  :
        P extends '_count' ? TagCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Tag ? Tag[P] : never
  } 
    : Tag
  : Tag


  type TagCountArgs = Merge<
    Omit<TagFindManyArgs, 'select' | 'include'> & {
      select?: TagCountAggregateInputType | true
    }
  >

  export interface TagDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TagFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TagFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Tag'> extends True ? CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>> : CheckSelect<T, Prisma__TagClient<Tag | null >, Prisma__TagClient<TagGetPayload<T> | null >>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TagFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TagFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Tag'> extends True ? CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>> : CheckSelect<T, Prisma__TagClient<Tag | null >, Prisma__TagClient<TagGetPayload<T> | null >>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TagFindManyArgs>(
      args?: SelectSubset<T, TagFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Tag>>, PrismaPromise<Array<TagGetPayload<T>>>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
    **/
    create<T extends TagCreateArgs>(
      args: SelectSubset<T, TagCreateArgs>
    ): CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>>

    /**
     * Create many Tags.
     *     @param {TagCreateManyArgs} args - Arguments to create many Tags.
     *     @example
     *     // Create many Tags
     *     const tag = await prisma.tag.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TagCreateManyArgs>(
      args?: SelectSubset<T, TagCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
    **/
    delete<T extends TagDeleteArgs>(
      args: SelectSubset<T, TagDeleteArgs>
    ): CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TagUpdateArgs>(
      args: SelectSubset<T, TagUpdateArgs>
    ): CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TagDeleteManyArgs>(
      args?: SelectSubset<T, TagDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TagUpdateManyArgs>(
      args: SelectSubset<T, TagUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
    **/
    upsert<T extends TagUpsertArgs>(
      args: SelectSubset<T, TagUpsertArgs>
    ): CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>>

    /**
     * Find one Tag that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TagFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>>

    /**
     * Find the first Tag that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TagFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>>

    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TagClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    movies<T extends MovieFindManyArgs = {}>(args?: Subset<T, MovieFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Movie>>, PrismaPromise<Array<MovieGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Tag base type for findUnique actions
   */
  export type TagFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * Filter, which Tag to fetch.
     * 
    **/
    where: TagWhereUniqueInput
  }

  /**
   * Tag: findUnique
   */
  export interface TagFindUniqueArgs extends TagFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Tag base type for findFirst actions
   */
  export type TagFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * Filter, which Tag to fetch.
     * 
    **/
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     * 
    **/
    orderBy?: Enumerable<TagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     * 
    **/
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     * 
    **/
    distinct?: Enumerable<TagScalarFieldEnum>
  }

  /**
   * Tag: findFirst
   */
  export interface TagFindFirstArgs extends TagFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Tag findMany
   */
  export type TagFindManyArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * Filter, which Tags to fetch.
     * 
    **/
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     * 
    **/
    orderBy?: Enumerable<TagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     * 
    **/
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TagScalarFieldEnum>
  }


  /**
   * Tag create
   */
  export type TagCreateArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * The data needed to create a Tag.
     * 
    **/
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }


  /**
   * Tag createMany
   */
  export type TagCreateManyArgs = {
    /**
     * The data used to create many Tags.
     * 
    **/
    data: Enumerable<TagCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Tag update
   */
  export type TagUpdateArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * The data needed to update a Tag.
     * 
    **/
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     * 
    **/
    where: TagWhereUniqueInput
  }


  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs = {
    /**
     * The data used to update Tags.
     * 
    **/
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     * 
    **/
    where?: TagWhereInput
  }


  /**
   * Tag upsert
   */
  export type TagUpsertArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * The filter to search for the Tag to update in case it exists.
     * 
    **/
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     * 
    **/
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }


  /**
   * Tag delete
   */
  export type TagDeleteArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * Filter which Tag to delete.
     * 
    **/
    where: TagWhereUniqueInput
  }


  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs = {
    /**
     * Filter which Tags to delete
     * 
    **/
    where?: TagWhereInput
  }


  /**
   * Tag: findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs = TagFindUniqueArgsBase
      

  /**
   * Tag: findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs = TagFindFirstArgsBase
      

  /**
   * Tag without action
   */
  export type TagArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
  }



  /**
   * Model Poster
   */


  export type AggregatePoster = {
    _count: PosterCountAggregateOutputType | null
    _min: PosterMinAggregateOutputType | null
    _max: PosterMaxAggregateOutputType | null
  }

  export type PosterMinAggregateOutputType = {
    id: string | null
    imgUrl: string | null
    metaInfoId: string | null
  }

  export type PosterMaxAggregateOutputType = {
    id: string | null
    imgUrl: string | null
    metaInfoId: string | null
  }

  export type PosterCountAggregateOutputType = {
    id: number
    imgUrl: number
    metaInfoId: number
    _all: number
  }


  export type PosterMinAggregateInputType = {
    id?: true
    imgUrl?: true
    metaInfoId?: true
  }

  export type PosterMaxAggregateInputType = {
    id?: true
    imgUrl?: true
    metaInfoId?: true
  }

  export type PosterCountAggregateInputType = {
    id?: true
    imgUrl?: true
    metaInfoId?: true
    _all?: true
  }

  export type PosterAggregateArgs = {
    /**
     * Filter which Poster to aggregate.
     * 
    **/
    where?: PosterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posters to fetch.
     * 
    **/
    orderBy?: Enumerable<PosterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PosterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posters from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posters.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posters
    **/
    _count?: true | PosterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PosterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PosterMaxAggregateInputType
  }

  export type GetPosterAggregateType<T extends PosterAggregateArgs> = {
        [P in keyof T & keyof AggregatePoster]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoster[P]>
      : GetScalarType<T[P], AggregatePoster[P]>
  }




  export type PosterGroupByArgs = {
    where?: PosterWhereInput
    orderBy?: Enumerable<PosterOrderByWithAggregationInput>
    by: Array<PosterScalarFieldEnum>
    having?: PosterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PosterCountAggregateInputType | true
    _min?: PosterMinAggregateInputType
    _max?: PosterMaxAggregateInputType
  }


  export type PosterGroupByOutputType = {
    id: string
    imgUrl: string
    metaInfoId: string | null
    _count: PosterCountAggregateOutputType | null
    _min: PosterMinAggregateOutputType | null
    _max: PosterMaxAggregateOutputType | null
  }

  type GetPosterGroupByPayload<T extends PosterGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PosterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PosterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PosterGroupByOutputType[P]>
            : GetScalarType<T[P], PosterGroupByOutputType[P]>
        }
      >
    >


  export type PosterSelect = {
    id?: boolean
    imgUrl?: boolean
    metaInfoId?: boolean
    MetaInfo?: boolean | MetaInfoArgs
  }

  export type PosterInclude = {
    MetaInfo?: boolean | MetaInfoArgs
  }

  export type PosterGetPayload<
    S extends boolean | null | undefined | PosterArgs,
    U = keyof S
      > = S extends true
        ? Poster
    : S extends undefined
    ? never
    : S extends PosterArgs | PosterFindManyArgs
    ?'include' extends U
    ? Poster  & {
    [P in TrueKeys<S['include']>]:
        P extends 'MetaInfo' ? MetaInfoGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'MetaInfo' ? MetaInfoGetPayload<S['select'][P]> | null :  P extends keyof Poster ? Poster[P] : never
  } 
    : Poster
  : Poster


  type PosterCountArgs = Merge<
    Omit<PosterFindManyArgs, 'select' | 'include'> & {
      select?: PosterCountAggregateInputType | true
    }
  >

  export interface PosterDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Poster that matches the filter.
     * @param {PosterFindUniqueArgs} args - Arguments to find a Poster
     * @example
     * // Get one Poster
     * const poster = await prisma.poster.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PosterFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PosterFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Poster'> extends True ? CheckSelect<T, Prisma__PosterClient<Poster>, Prisma__PosterClient<PosterGetPayload<T>>> : CheckSelect<T, Prisma__PosterClient<Poster | null >, Prisma__PosterClient<PosterGetPayload<T> | null >>

    /**
     * Find the first Poster that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosterFindFirstArgs} args - Arguments to find a Poster
     * @example
     * // Get one Poster
     * const poster = await prisma.poster.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PosterFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PosterFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Poster'> extends True ? CheckSelect<T, Prisma__PosterClient<Poster>, Prisma__PosterClient<PosterGetPayload<T>>> : CheckSelect<T, Prisma__PosterClient<Poster | null >, Prisma__PosterClient<PosterGetPayload<T> | null >>

    /**
     * Find zero or more Posters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosterFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posters
     * const posters = await prisma.poster.findMany()
     * 
     * // Get first 10 Posters
     * const posters = await prisma.poster.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const posterWithIdOnly = await prisma.poster.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PosterFindManyArgs>(
      args?: SelectSubset<T, PosterFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Poster>>, PrismaPromise<Array<PosterGetPayload<T>>>>

    /**
     * Create a Poster.
     * @param {PosterCreateArgs} args - Arguments to create a Poster.
     * @example
     * // Create one Poster
     * const Poster = await prisma.poster.create({
     *   data: {
     *     // ... data to create a Poster
     *   }
     * })
     * 
    **/
    create<T extends PosterCreateArgs>(
      args: SelectSubset<T, PosterCreateArgs>
    ): CheckSelect<T, Prisma__PosterClient<Poster>, Prisma__PosterClient<PosterGetPayload<T>>>

    /**
     * Create many Posters.
     *     @param {PosterCreateManyArgs} args - Arguments to create many Posters.
     *     @example
     *     // Create many Posters
     *     const poster = await prisma.poster.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PosterCreateManyArgs>(
      args?: SelectSubset<T, PosterCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Poster.
     * @param {PosterDeleteArgs} args - Arguments to delete one Poster.
     * @example
     * // Delete one Poster
     * const Poster = await prisma.poster.delete({
     *   where: {
     *     // ... filter to delete one Poster
     *   }
     * })
     * 
    **/
    delete<T extends PosterDeleteArgs>(
      args: SelectSubset<T, PosterDeleteArgs>
    ): CheckSelect<T, Prisma__PosterClient<Poster>, Prisma__PosterClient<PosterGetPayload<T>>>

    /**
     * Update one Poster.
     * @param {PosterUpdateArgs} args - Arguments to update one Poster.
     * @example
     * // Update one Poster
     * const poster = await prisma.poster.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PosterUpdateArgs>(
      args: SelectSubset<T, PosterUpdateArgs>
    ): CheckSelect<T, Prisma__PosterClient<Poster>, Prisma__PosterClient<PosterGetPayload<T>>>

    /**
     * Delete zero or more Posters.
     * @param {PosterDeleteManyArgs} args - Arguments to filter Posters to delete.
     * @example
     * // Delete a few Posters
     * const { count } = await prisma.poster.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PosterDeleteManyArgs>(
      args?: SelectSubset<T, PosterDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posters
     * const poster = await prisma.poster.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PosterUpdateManyArgs>(
      args: SelectSubset<T, PosterUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Poster.
     * @param {PosterUpsertArgs} args - Arguments to update or create a Poster.
     * @example
     * // Update or create a Poster
     * const poster = await prisma.poster.upsert({
     *   create: {
     *     // ... data to create a Poster
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Poster we want to update
     *   }
     * })
    **/
    upsert<T extends PosterUpsertArgs>(
      args: SelectSubset<T, PosterUpsertArgs>
    ): CheckSelect<T, Prisma__PosterClient<Poster>, Prisma__PosterClient<PosterGetPayload<T>>>

    /**
     * Find one Poster that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {PosterFindUniqueOrThrowArgs} args - Arguments to find a Poster
     * @example
     * // Get one Poster
     * const poster = await prisma.poster.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PosterFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PosterFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__PosterClient<Poster>, Prisma__PosterClient<PosterGetPayload<T>>>

    /**
     * Find the first Poster that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosterFindFirstOrThrowArgs} args - Arguments to find a Poster
     * @example
     * // Get one Poster
     * const poster = await prisma.poster.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PosterFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PosterFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__PosterClient<Poster>, Prisma__PosterClient<PosterGetPayload<T>>>

    /**
     * Count the number of Posters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosterCountArgs} args - Arguments to filter Posters to count.
     * @example
     * // Count the number of Posters
     * const count = await prisma.poster.count({
     *   where: {
     *     // ... the filter for the Posters we want to count
     *   }
     * })
    **/
    count<T extends PosterCountArgs>(
      args?: Subset<T, PosterCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PosterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Poster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PosterAggregateArgs>(args: Subset<T, PosterAggregateArgs>): PrismaPromise<GetPosterAggregateType<T>>

    /**
     * Group by Poster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PosterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PosterGroupByArgs['orderBy'] }
        : { orderBy?: PosterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PosterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPosterGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Poster.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PosterClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    MetaInfo<T extends MetaInfoArgs = {}>(args?: Subset<T, MetaInfoArgs>): CheckSelect<T, Prisma__MetaInfoClient<MetaInfo | null >, Prisma__MetaInfoClient<MetaInfoGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Poster base type for findUnique actions
   */
  export type PosterFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Poster
     * 
    **/
    select?: PosterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PosterInclude | null
    /**
     * Filter, which Poster to fetch.
     * 
    **/
    where: PosterWhereUniqueInput
  }

  /**
   * Poster: findUnique
   */
  export interface PosterFindUniqueArgs extends PosterFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Poster base type for findFirst actions
   */
  export type PosterFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Poster
     * 
    **/
    select?: PosterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PosterInclude | null
    /**
     * Filter, which Poster to fetch.
     * 
    **/
    where?: PosterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posters to fetch.
     * 
    **/
    orderBy?: Enumerable<PosterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posters.
     * 
    **/
    cursor?: PosterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posters from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posters.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posters.
     * 
    **/
    distinct?: Enumerable<PosterScalarFieldEnum>
  }

  /**
   * Poster: findFirst
   */
  export interface PosterFindFirstArgs extends PosterFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Poster findMany
   */
  export type PosterFindManyArgs = {
    /**
     * Select specific fields to fetch from the Poster
     * 
    **/
    select?: PosterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PosterInclude | null
    /**
     * Filter, which Posters to fetch.
     * 
    **/
    where?: PosterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posters to fetch.
     * 
    **/
    orderBy?: Enumerable<PosterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posters.
     * 
    **/
    cursor?: PosterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posters from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posters.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PosterScalarFieldEnum>
  }


  /**
   * Poster create
   */
  export type PosterCreateArgs = {
    /**
     * Select specific fields to fetch from the Poster
     * 
    **/
    select?: PosterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PosterInclude | null
    /**
     * The data needed to create a Poster.
     * 
    **/
    data: XOR<PosterCreateInput, PosterUncheckedCreateInput>
  }


  /**
   * Poster createMany
   */
  export type PosterCreateManyArgs = {
    /**
     * The data used to create many Posters.
     * 
    **/
    data: Enumerable<PosterCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Poster update
   */
  export type PosterUpdateArgs = {
    /**
     * Select specific fields to fetch from the Poster
     * 
    **/
    select?: PosterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PosterInclude | null
    /**
     * The data needed to update a Poster.
     * 
    **/
    data: XOR<PosterUpdateInput, PosterUncheckedUpdateInput>
    /**
     * Choose, which Poster to update.
     * 
    **/
    where: PosterWhereUniqueInput
  }


  /**
   * Poster updateMany
   */
  export type PosterUpdateManyArgs = {
    /**
     * The data used to update Posters.
     * 
    **/
    data: XOR<PosterUpdateManyMutationInput, PosterUncheckedUpdateManyInput>
    /**
     * Filter which Posters to update
     * 
    **/
    where?: PosterWhereInput
  }


  /**
   * Poster upsert
   */
  export type PosterUpsertArgs = {
    /**
     * Select specific fields to fetch from the Poster
     * 
    **/
    select?: PosterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PosterInclude | null
    /**
     * The filter to search for the Poster to update in case it exists.
     * 
    **/
    where: PosterWhereUniqueInput
    /**
     * In case the Poster found by the `where` argument doesn't exist, create a new Poster with this data.
     * 
    **/
    create: XOR<PosterCreateInput, PosterUncheckedCreateInput>
    /**
     * In case the Poster was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PosterUpdateInput, PosterUncheckedUpdateInput>
  }


  /**
   * Poster delete
   */
  export type PosterDeleteArgs = {
    /**
     * Select specific fields to fetch from the Poster
     * 
    **/
    select?: PosterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PosterInclude | null
    /**
     * Filter which Poster to delete.
     * 
    **/
    where: PosterWhereUniqueInput
  }


  /**
   * Poster deleteMany
   */
  export type PosterDeleteManyArgs = {
    /**
     * Filter which Posters to delete
     * 
    **/
    where?: PosterWhereInput
  }


  /**
   * Poster: findUniqueOrThrow
   */
  export type PosterFindUniqueOrThrowArgs = PosterFindUniqueArgsBase
      

  /**
   * Poster: findFirstOrThrow
   */
  export type PosterFindFirstOrThrowArgs = PosterFindFirstArgsBase
      

  /**
   * Poster without action
   */
  export type PosterArgs = {
    /**
     * Select specific fields to fetch from the Poster
     * 
    **/
    select?: PosterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PosterInclude | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    userEmail: string | null
    created: Date | null
    updated: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    userEmail: string | null
    created: Date | null
    updated: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userEmail: number
    created: number
    updated: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    userEmail?: true
    created?: true
    updated?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userEmail?: true
    created?: true
    updated?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userEmail?: true
    created?: true
    updated?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    userEmail: string
    created: Date
    updated: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    userEmail?: boolean
    created?: boolean
    updated?: boolean
    profile?: boolean | ProfileFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    profile?: boolean | ProfileFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'profile' ? Array < ProfileGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'profile' ? Array < ProfileGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find one User that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    profile<T extends ProfileFindManyArgs = {}>(args?: Subset<T, ProfileFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Profile>>, PrismaPromise<Array<ProfileGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User: findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User: findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User: findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = UserFindUniqueArgsBase
      

  /**
   * User: findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = UserFindFirstArgsBase
      

  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Profile
   */


  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    themeId: number | null
  }

  export type ProfileSumAggregateOutputType = {
    themeId: bigint | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    phoneNumber: string | null
    firstname: string | null
    lastname: string | null
    created: Date | null
    updated: Date | null
    themeId: bigint | null
    userId: string | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    phoneNumber: string | null
    firstname: string | null
    lastname: string | null
    created: Date | null
    updated: Date | null
    themeId: bigint | null
    userId: string | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    phoneNumber: number
    firstname: number
    lastname: number
    created: number
    updated: number
    themeId: number
    userId: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    themeId?: true
  }

  export type ProfileSumAggregateInputType = {
    themeId?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    phoneNumber?: true
    firstname?: true
    lastname?: true
    created?: true
    updated?: true
    themeId?: true
    userId?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    phoneNumber?: true
    firstname?: true
    lastname?: true
    created?: true
    updated?: true
    themeId?: true
    userId?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    phoneNumber?: true
    firstname?: true
    lastname?: true
    created?: true
    updated?: true
    themeId?: true
    userId?: true
    _all?: true
  }

  export type ProfileAggregateArgs = {
    /**
     * Filter which Profile to aggregate.
     * 
    **/
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     * 
    **/
    orderBy?: Enumerable<ProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs = {
    where?: ProfileWhereInput
    orderBy?: Enumerable<ProfileOrderByWithAggregationInput>
    by: Array<ProfileScalarFieldEnum>
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }


  export type ProfileGroupByOutputType = {
    id: string
    phoneNumber: string
    firstname: string
    lastname: string
    created: Date
    updated: Date
    themeId: bigint
    userId: string
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect = {
    id?: boolean
    phoneNumber?: boolean
    firstname?: boolean
    lastname?: boolean
    created?: boolean
    updated?: boolean
    themeId?: boolean
    userId?: boolean
    lovedMovies?: boolean | MovieFindManyArgs
    lovedCategories?: boolean | GenreFindManyArgs
    usrTheme?: boolean | ThemeArgs
    user?: boolean | UserArgs
    _count?: boolean | ProfileCountOutputTypeArgs
  }

  export type ProfileInclude = {
    lovedMovies?: boolean | MovieFindManyArgs
    lovedCategories?: boolean | GenreFindManyArgs
    usrTheme?: boolean | ThemeArgs
    user?: boolean | UserArgs
    _count?: boolean | ProfileCountOutputTypeArgs
  }

  export type ProfileGetPayload<
    S extends boolean | null | undefined | ProfileArgs,
    U = keyof S
      > = S extends true
        ? Profile
    : S extends undefined
    ? never
    : S extends ProfileArgs | ProfileFindManyArgs
    ?'include' extends U
    ? Profile  & {
    [P in TrueKeys<S['include']>]:
        P extends 'lovedMovies' ? Array < MovieGetPayload<S['include'][P]>>  :
        P extends 'lovedCategories' ? Array < GenreGetPayload<S['include'][P]>>  :
        P extends 'usrTheme' ? ThemeGetPayload<S['include'][P]> :
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends '_count' ? ProfileCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'lovedMovies' ? Array < MovieGetPayload<S['select'][P]>>  :
        P extends 'lovedCategories' ? Array < GenreGetPayload<S['select'][P]>>  :
        P extends 'usrTheme' ? ThemeGetPayload<S['select'][P]> :
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends '_count' ? ProfileCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Profile ? Profile[P] : never
  } 
    : Profile
  : Profile


  type ProfileCountArgs = Merge<
    Omit<ProfileFindManyArgs, 'select' | 'include'> & {
      select?: ProfileCountAggregateInputType | true
    }
  >

  export interface ProfileDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProfileFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProfileFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Profile'> extends True ? CheckSelect<T, Prisma__ProfileClient<Profile>, Prisma__ProfileClient<ProfileGetPayload<T>>> : CheckSelect<T, Prisma__ProfileClient<Profile | null >, Prisma__ProfileClient<ProfileGetPayload<T> | null >>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProfileFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProfileFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Profile'> extends True ? CheckSelect<T, Prisma__ProfileClient<Profile>, Prisma__ProfileClient<ProfileGetPayload<T>>> : CheckSelect<T, Prisma__ProfileClient<Profile | null >, Prisma__ProfileClient<ProfileGetPayload<T> | null >>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProfileFindManyArgs>(
      args?: SelectSubset<T, ProfileFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Profile>>, PrismaPromise<Array<ProfileGetPayload<T>>>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
    **/
    create<T extends ProfileCreateArgs>(
      args: SelectSubset<T, ProfileCreateArgs>
    ): CheckSelect<T, Prisma__ProfileClient<Profile>, Prisma__ProfileClient<ProfileGetPayload<T>>>

    /**
     * Create many Profiles.
     *     @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     *     @example
     *     // Create many Profiles
     *     const profile = await prisma.profile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProfileCreateManyArgs>(
      args?: SelectSubset<T, ProfileCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
    **/
    delete<T extends ProfileDeleteArgs>(
      args: SelectSubset<T, ProfileDeleteArgs>
    ): CheckSelect<T, Prisma__ProfileClient<Profile>, Prisma__ProfileClient<ProfileGetPayload<T>>>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProfileUpdateArgs>(
      args: SelectSubset<T, ProfileUpdateArgs>
    ): CheckSelect<T, Prisma__ProfileClient<Profile>, Prisma__ProfileClient<ProfileGetPayload<T>>>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProfileDeleteManyArgs>(
      args?: SelectSubset<T, ProfileDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProfileUpdateManyArgs>(
      args: SelectSubset<T, ProfileUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
    **/
    upsert<T extends ProfileUpsertArgs>(
      args: SelectSubset<T, ProfileUpsertArgs>
    ): CheckSelect<T, Prisma__ProfileClient<Profile>, Prisma__ProfileClient<ProfileGetPayload<T>>>

    /**
     * Find one Profile that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProfileFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ProfileClient<Profile>, Prisma__ProfileClient<ProfileGetPayload<T>>>

    /**
     * Find the first Profile that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProfileFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ProfileClient<Profile>, Prisma__ProfileClient<ProfileGetPayload<T>>>

    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProfileClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    lovedMovies<T extends MovieFindManyArgs = {}>(args?: Subset<T, MovieFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Movie>>, PrismaPromise<Array<MovieGetPayload<T>>>>;

    lovedCategories<T extends GenreFindManyArgs = {}>(args?: Subset<T, GenreFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Genre>>, PrismaPromise<Array<GenreGetPayload<T>>>>;

    usrTheme<T extends ThemeArgs = {}>(args?: Subset<T, ThemeArgs>): CheckSelect<T, Prisma__ThemeClient<Theme | null >, Prisma__ThemeClient<ThemeGetPayload<T> | null >>;

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Profile base type for findUnique actions
   */
  export type ProfileFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
    /**
     * Filter, which Profile to fetch.
     * 
    **/
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile: findUnique
   */
  export interface ProfileFindUniqueArgs extends ProfileFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Profile base type for findFirst actions
   */
  export type ProfileFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
    /**
     * Filter, which Profile to fetch.
     * 
    **/
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     * 
    **/
    orderBy?: Enumerable<ProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     * 
    **/
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     * 
    **/
    distinct?: Enumerable<ProfileScalarFieldEnum>
  }

  /**
   * Profile: findFirst
   */
  export interface ProfileFindFirstArgs extends ProfileFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
    /**
     * Filter, which Profiles to fetch.
     * 
    **/
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     * 
    **/
    orderBy?: Enumerable<ProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     * 
    **/
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProfileScalarFieldEnum>
  }


  /**
   * Profile create
   */
  export type ProfileCreateArgs = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
    /**
     * The data needed to create a Profile.
     * 
    **/
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }


  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs = {
    /**
     * The data used to create many Profiles.
     * 
    **/
    data: Enumerable<ProfileCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Profile update
   */
  export type ProfileUpdateArgs = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
    /**
     * The data needed to update a Profile.
     * 
    **/
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     * 
    **/
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs = {
    /**
     * The data used to update Profiles.
     * 
    **/
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     * 
    **/
    where?: ProfileWhereInput
  }


  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
    /**
     * The filter to search for the Profile to update in case it exists.
     * 
    **/
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     * 
    **/
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }


  /**
   * Profile delete
   */
  export type ProfileDeleteArgs = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
    /**
     * Filter which Profile to delete.
     * 
    **/
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs = {
    /**
     * Filter which Profiles to delete
     * 
    **/
    where?: ProfileWhereInput
  }


  /**
   * Profile: findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs = ProfileFindUniqueArgsBase
      

  /**
   * Profile: findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs = ProfileFindFirstArgsBase
      

  /**
   * Profile without action
   */
  export type ProfileArgs = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
  }



  /**
   * Model Theme
   */


  export type AggregateTheme = {
    _count: ThemeCountAggregateOutputType | null
    _avg: ThemeAvgAggregateOutputType | null
    _sum: ThemeSumAggregateOutputType | null
    _min: ThemeMinAggregateOutputType | null
    _max: ThemeMaxAggregateOutputType | null
  }

  export type ThemeAvgAggregateOutputType = {
    id: number | null
  }

  export type ThemeSumAggregateOutputType = {
    id: bigint | null
  }

  export type ThemeMinAggregateOutputType = {
    id: bigint | null
    themeName: string | null
    themeColor: string | null
    created: Date | null
    updated: Date | null
  }

  export type ThemeMaxAggregateOutputType = {
    id: bigint | null
    themeName: string | null
    themeColor: string | null
    created: Date | null
    updated: Date | null
  }

  export type ThemeCountAggregateOutputType = {
    id: number
    themeName: number
    themeColor: number
    created: number
    updated: number
    _all: number
  }


  export type ThemeAvgAggregateInputType = {
    id?: true
  }

  export type ThemeSumAggregateInputType = {
    id?: true
  }

  export type ThemeMinAggregateInputType = {
    id?: true
    themeName?: true
    themeColor?: true
    created?: true
    updated?: true
  }

  export type ThemeMaxAggregateInputType = {
    id?: true
    themeName?: true
    themeColor?: true
    created?: true
    updated?: true
  }

  export type ThemeCountAggregateInputType = {
    id?: true
    themeName?: true
    themeColor?: true
    created?: true
    updated?: true
    _all?: true
  }

  export type ThemeAggregateArgs = {
    /**
     * Filter which Theme to aggregate.
     * 
    **/
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     * 
    **/
    orderBy?: Enumerable<ThemeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Themes
    **/
    _count?: true | ThemeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ThemeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ThemeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThemeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThemeMaxAggregateInputType
  }

  export type GetThemeAggregateType<T extends ThemeAggregateArgs> = {
        [P in keyof T & keyof AggregateTheme]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTheme[P]>
      : GetScalarType<T[P], AggregateTheme[P]>
  }




  export type ThemeGroupByArgs = {
    where?: ThemeWhereInput
    orderBy?: Enumerable<ThemeOrderByWithAggregationInput>
    by: Array<ThemeScalarFieldEnum>
    having?: ThemeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThemeCountAggregateInputType | true
    _avg?: ThemeAvgAggregateInputType
    _sum?: ThemeSumAggregateInputType
    _min?: ThemeMinAggregateInputType
    _max?: ThemeMaxAggregateInputType
  }


  export type ThemeGroupByOutputType = {
    id: bigint
    themeName: string
    themeColor: string
    created: Date
    updated: Date
    _count: ThemeCountAggregateOutputType | null
    _avg: ThemeAvgAggregateOutputType | null
    _sum: ThemeSumAggregateOutputType | null
    _min: ThemeMinAggregateOutputType | null
    _max: ThemeMaxAggregateOutputType | null
  }

  type GetThemeGroupByPayload<T extends ThemeGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ThemeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThemeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThemeGroupByOutputType[P]>
            : GetScalarType<T[P], ThemeGroupByOutputType[P]>
        }
      >
    >


  export type ThemeSelect = {
    id?: boolean
    themeName?: boolean
    themeColor?: boolean
    created?: boolean
    updated?: boolean
    userPref?: boolean | ProfileFindManyArgs
    _count?: boolean | ThemeCountOutputTypeArgs
  }

  export type ThemeInclude = {
    userPref?: boolean | ProfileFindManyArgs
    _count?: boolean | ThemeCountOutputTypeArgs
  }

  export type ThemeGetPayload<
    S extends boolean | null | undefined | ThemeArgs,
    U = keyof S
      > = S extends true
        ? Theme
    : S extends undefined
    ? never
    : S extends ThemeArgs | ThemeFindManyArgs
    ?'include' extends U
    ? Theme  & {
    [P in TrueKeys<S['include']>]:
        P extends 'userPref' ? Array < ProfileGetPayload<S['include'][P]>>  :
        P extends '_count' ? ThemeCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'userPref' ? Array < ProfileGetPayload<S['select'][P]>>  :
        P extends '_count' ? ThemeCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Theme ? Theme[P] : never
  } 
    : Theme
  : Theme


  type ThemeCountArgs = Merge<
    Omit<ThemeFindManyArgs, 'select' | 'include'> & {
      select?: ThemeCountAggregateInputType | true
    }
  >

  export interface ThemeDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Theme that matches the filter.
     * @param {ThemeFindUniqueArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ThemeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ThemeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Theme'> extends True ? CheckSelect<T, Prisma__ThemeClient<Theme>, Prisma__ThemeClient<ThemeGetPayload<T>>> : CheckSelect<T, Prisma__ThemeClient<Theme | null >, Prisma__ThemeClient<ThemeGetPayload<T> | null >>

    /**
     * Find the first Theme that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeFindFirstArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ThemeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ThemeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Theme'> extends True ? CheckSelect<T, Prisma__ThemeClient<Theme>, Prisma__ThemeClient<ThemeGetPayload<T>>> : CheckSelect<T, Prisma__ThemeClient<Theme | null >, Prisma__ThemeClient<ThemeGetPayload<T> | null >>

    /**
     * Find zero or more Themes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Themes
     * const themes = await prisma.theme.findMany()
     * 
     * // Get first 10 Themes
     * const themes = await prisma.theme.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const themeWithIdOnly = await prisma.theme.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ThemeFindManyArgs>(
      args?: SelectSubset<T, ThemeFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Theme>>, PrismaPromise<Array<ThemeGetPayload<T>>>>

    /**
     * Create a Theme.
     * @param {ThemeCreateArgs} args - Arguments to create a Theme.
     * @example
     * // Create one Theme
     * const Theme = await prisma.theme.create({
     *   data: {
     *     // ... data to create a Theme
     *   }
     * })
     * 
    **/
    create<T extends ThemeCreateArgs>(
      args: SelectSubset<T, ThemeCreateArgs>
    ): CheckSelect<T, Prisma__ThemeClient<Theme>, Prisma__ThemeClient<ThemeGetPayload<T>>>

    /**
     * Create many Themes.
     *     @param {ThemeCreateManyArgs} args - Arguments to create many Themes.
     *     @example
     *     // Create many Themes
     *     const theme = await prisma.theme.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ThemeCreateManyArgs>(
      args?: SelectSubset<T, ThemeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Theme.
     * @param {ThemeDeleteArgs} args - Arguments to delete one Theme.
     * @example
     * // Delete one Theme
     * const Theme = await prisma.theme.delete({
     *   where: {
     *     // ... filter to delete one Theme
     *   }
     * })
     * 
    **/
    delete<T extends ThemeDeleteArgs>(
      args: SelectSubset<T, ThemeDeleteArgs>
    ): CheckSelect<T, Prisma__ThemeClient<Theme>, Prisma__ThemeClient<ThemeGetPayload<T>>>

    /**
     * Update one Theme.
     * @param {ThemeUpdateArgs} args - Arguments to update one Theme.
     * @example
     * // Update one Theme
     * const theme = await prisma.theme.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ThemeUpdateArgs>(
      args: SelectSubset<T, ThemeUpdateArgs>
    ): CheckSelect<T, Prisma__ThemeClient<Theme>, Prisma__ThemeClient<ThemeGetPayload<T>>>

    /**
     * Delete zero or more Themes.
     * @param {ThemeDeleteManyArgs} args - Arguments to filter Themes to delete.
     * @example
     * // Delete a few Themes
     * const { count } = await prisma.theme.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ThemeDeleteManyArgs>(
      args?: SelectSubset<T, ThemeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Themes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Themes
     * const theme = await prisma.theme.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ThemeUpdateManyArgs>(
      args: SelectSubset<T, ThemeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Theme.
     * @param {ThemeUpsertArgs} args - Arguments to update or create a Theme.
     * @example
     * // Update or create a Theme
     * const theme = await prisma.theme.upsert({
     *   create: {
     *     // ... data to create a Theme
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Theme we want to update
     *   }
     * })
    **/
    upsert<T extends ThemeUpsertArgs>(
      args: SelectSubset<T, ThemeUpsertArgs>
    ): CheckSelect<T, Prisma__ThemeClient<Theme>, Prisma__ThemeClient<ThemeGetPayload<T>>>

    /**
     * Find one Theme that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ThemeFindUniqueOrThrowArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ThemeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ThemeFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ThemeClient<Theme>, Prisma__ThemeClient<ThemeGetPayload<T>>>

    /**
     * Find the first Theme that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeFindFirstOrThrowArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ThemeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ThemeFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ThemeClient<Theme>, Prisma__ThemeClient<ThemeGetPayload<T>>>

    /**
     * Count the number of Themes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeCountArgs} args - Arguments to filter Themes to count.
     * @example
     * // Count the number of Themes
     * const count = await prisma.theme.count({
     *   where: {
     *     // ... the filter for the Themes we want to count
     *   }
     * })
    **/
    count<T extends ThemeCountArgs>(
      args?: Subset<T, ThemeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThemeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Theme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ThemeAggregateArgs>(args: Subset<T, ThemeAggregateArgs>): PrismaPromise<GetThemeAggregateType<T>>

    /**
     * Group by Theme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ThemeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ThemeGroupByArgs['orderBy'] }
        : { orderBy?: ThemeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ThemeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThemeGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Theme.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ThemeClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    userPref<T extends ProfileFindManyArgs = {}>(args?: Subset<T, ProfileFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Profile>>, PrismaPromise<Array<ProfileGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Theme base type for findUnique actions
   */
  export type ThemeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Theme
     * 
    **/
    select?: ThemeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ThemeInclude | null
    /**
     * Filter, which Theme to fetch.
     * 
    **/
    where: ThemeWhereUniqueInput
  }

  /**
   * Theme: findUnique
   */
  export interface ThemeFindUniqueArgs extends ThemeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Theme base type for findFirst actions
   */
  export type ThemeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Theme
     * 
    **/
    select?: ThemeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ThemeInclude | null
    /**
     * Filter, which Theme to fetch.
     * 
    **/
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     * 
    **/
    orderBy?: Enumerable<ThemeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Themes.
     * 
    **/
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Themes.
     * 
    **/
    distinct?: Enumerable<ThemeScalarFieldEnum>
  }

  /**
   * Theme: findFirst
   */
  export interface ThemeFindFirstArgs extends ThemeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Theme findMany
   */
  export type ThemeFindManyArgs = {
    /**
     * Select specific fields to fetch from the Theme
     * 
    **/
    select?: ThemeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ThemeInclude | null
    /**
     * Filter, which Themes to fetch.
     * 
    **/
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     * 
    **/
    orderBy?: Enumerable<ThemeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Themes.
     * 
    **/
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ThemeScalarFieldEnum>
  }


  /**
   * Theme create
   */
  export type ThemeCreateArgs = {
    /**
     * Select specific fields to fetch from the Theme
     * 
    **/
    select?: ThemeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ThemeInclude | null
    /**
     * The data needed to create a Theme.
     * 
    **/
    data: XOR<ThemeCreateInput, ThemeUncheckedCreateInput>
  }


  /**
   * Theme createMany
   */
  export type ThemeCreateManyArgs = {
    /**
     * The data used to create many Themes.
     * 
    **/
    data: Enumerable<ThemeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Theme update
   */
  export type ThemeUpdateArgs = {
    /**
     * Select specific fields to fetch from the Theme
     * 
    **/
    select?: ThemeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ThemeInclude | null
    /**
     * The data needed to update a Theme.
     * 
    **/
    data: XOR<ThemeUpdateInput, ThemeUncheckedUpdateInput>
    /**
     * Choose, which Theme to update.
     * 
    **/
    where: ThemeWhereUniqueInput
  }


  /**
   * Theme updateMany
   */
  export type ThemeUpdateManyArgs = {
    /**
     * The data used to update Themes.
     * 
    **/
    data: XOR<ThemeUpdateManyMutationInput, ThemeUncheckedUpdateManyInput>
    /**
     * Filter which Themes to update
     * 
    **/
    where?: ThemeWhereInput
  }


  /**
   * Theme upsert
   */
  export type ThemeUpsertArgs = {
    /**
     * Select specific fields to fetch from the Theme
     * 
    **/
    select?: ThemeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ThemeInclude | null
    /**
     * The filter to search for the Theme to update in case it exists.
     * 
    **/
    where: ThemeWhereUniqueInput
    /**
     * In case the Theme found by the `where` argument doesn't exist, create a new Theme with this data.
     * 
    **/
    create: XOR<ThemeCreateInput, ThemeUncheckedCreateInput>
    /**
     * In case the Theme was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ThemeUpdateInput, ThemeUncheckedUpdateInput>
  }


  /**
   * Theme delete
   */
  export type ThemeDeleteArgs = {
    /**
     * Select specific fields to fetch from the Theme
     * 
    **/
    select?: ThemeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ThemeInclude | null
    /**
     * Filter which Theme to delete.
     * 
    **/
    where: ThemeWhereUniqueInput
  }


  /**
   * Theme deleteMany
   */
  export type ThemeDeleteManyArgs = {
    /**
     * Filter which Themes to delete
     * 
    **/
    where?: ThemeWhereInput
  }


  /**
   * Theme: findUniqueOrThrow
   */
  export type ThemeFindUniqueOrThrowArgs = ThemeFindUniqueArgsBase
      

  /**
   * Theme: findFirstOrThrow
   */
  export type ThemeFindFirstOrThrowArgs = ThemeFindFirstArgsBase
      

  /**
   * Theme without action
   */
  export type ThemeArgs = {
    /**
     * Select specific fields to fetch from the Theme
     * 
    **/
    select?: ThemeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ThemeInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MovieScalarFieldEnum: {
    movieId: 'movieId',
    title: 'title',
    description: 'description',
    length: 'length',
    released: 'released',
    available: 'available',
    infoId: 'infoId',
    created: 'created',
    updated: 'updated'
  };

  export type MovieScalarFieldEnum = (typeof MovieScalarFieldEnum)[keyof typeof MovieScalarFieldEnum]


  export const MetaInfoScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    movieId: 'movieId',
    created: 'created',
    updated: 'updated'
  };

  export type MetaInfoScalarFieldEnum = (typeof MetaInfoScalarFieldEnum)[keyof typeof MetaInfoScalarFieldEnum]


  export const GenreScalarFieldEnum: {
    id: 'id',
    name: 'name',
    info: 'info',
    created: 'created',
    updated: 'updated'
  };

  export type GenreScalarFieldEnum = (typeof GenreScalarFieldEnum)[keyof typeof GenreScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created: 'created',
    updated: 'updated'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const PosterScalarFieldEnum: {
    id: 'id',
    imgUrl: 'imgUrl',
    metaInfoId: 'metaInfoId'
  };

  export type PosterScalarFieldEnum = (typeof PosterScalarFieldEnum)[keyof typeof PosterScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    userEmail: 'userEmail',
    created: 'created',
    updated: 'updated'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    phoneNumber: 'phoneNumber',
    firstname: 'firstname',
    lastname: 'lastname',
    created: 'created',
    updated: 'updated',
    themeId: 'themeId',
    userId: 'userId'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const ThemeScalarFieldEnum: {
    id: 'id',
    themeName: 'themeName',
    themeColor: 'themeColor',
    created: 'created',
    updated: 'updated'
  };

  export type ThemeScalarFieldEnum = (typeof ThemeScalarFieldEnum)[keyof typeof ThemeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type MovieWhereInput = {
    AND?: Enumerable<MovieWhereInput>
    OR?: Enumerable<MovieWhereInput>
    NOT?: Enumerable<MovieWhereInput>
    movieId?: StringFilter<"Movie"> | string
    title?: StringFilter<"Movie"> | string
    description?: StringNullableFilter<"Movie"> | string | null
    length?: IntNullableFilter<"Movie"> | number | null
    released?: DateTimeNullableFilter<"Movie"> | Date | string | null
    available?: DateTimeNullableFilter<"Movie"> | Date | string | null
    infoId?: StringFilter<"Movie"> | string
    created?: DateTimeFilter<"Movie"> | Date | string
    updated?: DateTimeFilter<"Movie"> | Date | string
    genre?: GenreListRelationFilter
    tags?: TagListRelationFilter
    info?: XOR<MetaInfoRelationFilter, MetaInfoWhereInput>
    profile?: ProfileListRelationFilter
  }

  export type MovieOrderByWithRelationInput = {
    movieId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    length?: SortOrderInput | SortOrder
    released?: SortOrderInput | SortOrder
    available?: SortOrderInput | SortOrder
    infoId?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    genre?: GenreOrderByRelationAggregateInput
    tags?: TagOrderByRelationAggregateInput
    info?: MetaInfoOrderByWithRelationInput
    profile?: ProfileOrderByRelationAggregateInput
  }

  export type MovieWhereUniqueInput = {
    movieId?: string
    infoId?: string
    AND?: Enumerable<MovieWhereInput>
    OR?: Enumerable<MovieWhereInput>
    NOT?: Enumerable<MovieWhereInput>
    title?: StringFilter<"Movie"> | string
    description?: StringNullableFilter<"Movie"> | string | null
    length?: IntNullableFilter<"Movie"> | number | null
    released?: DateTimeNullableFilter<"Movie"> | Date | string | null
    available?: DateTimeNullableFilter<"Movie"> | Date | string | null
    created?: DateTimeFilter<"Movie"> | Date | string
    updated?: DateTimeFilter<"Movie"> | Date | string
    genre?: GenreListRelationFilter
    tags?: TagListRelationFilter
    info?: XOR<MetaInfoRelationFilter, MetaInfoWhereInput>
    profile?: ProfileListRelationFilter
  }

  export type MovieOrderByWithAggregationInput = {
    movieId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    length?: SortOrderInput | SortOrder
    released?: SortOrderInput | SortOrder
    available?: SortOrderInput | SortOrder
    infoId?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    _count?: MovieCountOrderByAggregateInput
    _avg?: MovieAvgOrderByAggregateInput
    _max?: MovieMaxOrderByAggregateInput
    _min?: MovieMinOrderByAggregateInput
    _sum?: MovieSumOrderByAggregateInput
  }

  export type MovieScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MovieScalarWhereWithAggregatesInput>
    OR?: Enumerable<MovieScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MovieScalarWhereWithAggregatesInput>
    movieId?: StringWithAggregatesFilter<"Movie"> | string
    title?: StringWithAggregatesFilter<"Movie"> | string
    description?: StringNullableWithAggregatesFilter<"Movie"> | string | null
    length?: IntNullableWithAggregatesFilter<"Movie"> | number | null
    released?: DateTimeNullableWithAggregatesFilter<"Movie"> | Date | string | null
    available?: DateTimeNullableWithAggregatesFilter<"Movie"> | Date | string | null
    infoId?: StringWithAggregatesFilter<"Movie"> | string
    created?: DateTimeWithAggregatesFilter<"Movie"> | Date | string
    updated?: DateTimeWithAggregatesFilter<"Movie"> | Date | string
  }

  export type MetaInfoWhereInput = {
    AND?: Enumerable<MetaInfoWhereInput>
    OR?: Enumerable<MetaInfoWhereInput>
    NOT?: Enumerable<MetaInfoWhereInput>
    id?: StringFilter<"MetaInfo"> | string
    title?: StringFilter<"MetaInfo"> | string
    description?: StringFilter<"MetaInfo"> | string
    movieId?: StringFilter<"MetaInfo"> | string
    created?: DateTimeFilter<"MetaInfo"> | Date | string
    updated?: DateTimeFilter<"MetaInfo"> | Date | string
    poster?: PosterListRelationFilter
    Movie?: XOR<MovieNullableRelationFilter, MovieWhereInput> | null
  }

  export type MetaInfoOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    movieId?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    poster?: PosterOrderByRelationAggregateInput
    Movie?: MovieOrderByWithRelationInput
  }

  export type MetaInfoWhereUniqueInput = {
    id?: string
    AND?: Enumerable<MetaInfoWhereInput>
    OR?: Enumerable<MetaInfoWhereInput>
    NOT?: Enumerable<MetaInfoWhereInput>
    title?: StringFilter<"MetaInfo"> | string
    description?: StringFilter<"MetaInfo"> | string
    movieId?: StringFilter<"MetaInfo"> | string
    created?: DateTimeFilter<"MetaInfo"> | Date | string
    updated?: DateTimeFilter<"MetaInfo"> | Date | string
    poster?: PosterListRelationFilter
    Movie?: XOR<MovieNullableRelationFilter, MovieWhereInput> | null
  }

  export type MetaInfoOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    movieId?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    _count?: MetaInfoCountOrderByAggregateInput
    _max?: MetaInfoMaxOrderByAggregateInput
    _min?: MetaInfoMinOrderByAggregateInput
  }

  export type MetaInfoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MetaInfoScalarWhereWithAggregatesInput>
    OR?: Enumerable<MetaInfoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MetaInfoScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter<"MetaInfo"> | string
    title?: StringWithAggregatesFilter<"MetaInfo"> | string
    description?: StringWithAggregatesFilter<"MetaInfo"> | string
    movieId?: StringWithAggregatesFilter<"MetaInfo"> | string
    created?: DateTimeWithAggregatesFilter<"MetaInfo"> | Date | string
    updated?: DateTimeWithAggregatesFilter<"MetaInfo"> | Date | string
  }

  export type GenreWhereInput = {
    AND?: Enumerable<GenreWhereInput>
    OR?: Enumerable<GenreWhereInput>
    NOT?: Enumerable<GenreWhereInput>
    id?: StringFilter<"Genre"> | string
    name?: StringFilter<"Genre"> | string
    info?: StringFilter<"Genre"> | string
    created?: DateTimeFilter<"Genre"> | Date | string
    updated?: DateTimeFilter<"Genre"> | Date | string
    movies?: MovieListRelationFilter
    profile?: ProfileListRelationFilter
  }

  export type GenreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    info?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    movies?: MovieOrderByRelationAggregateInput
    profile?: ProfileOrderByRelationAggregateInput
  }

  export type GenreWhereUniqueInput = {
    id?: string
    name?: string
    AND?: Enumerable<GenreWhereInput>
    OR?: Enumerable<GenreWhereInput>
    NOT?: Enumerable<GenreWhereInput>
    info?: StringFilter<"Genre"> | string
    created?: DateTimeFilter<"Genre"> | Date | string
    updated?: DateTimeFilter<"Genre"> | Date | string
    movies?: MovieListRelationFilter
    profile?: ProfileListRelationFilter
  }

  export type GenreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    info?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    _count?: GenreCountOrderByAggregateInput
    _max?: GenreMaxOrderByAggregateInput
    _min?: GenreMinOrderByAggregateInput
  }

  export type GenreScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GenreScalarWhereWithAggregatesInput>
    OR?: Enumerable<GenreScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GenreScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter<"Genre"> | string
    name?: StringWithAggregatesFilter<"Genre"> | string
    info?: StringWithAggregatesFilter<"Genre"> | string
    created?: DateTimeWithAggregatesFilter<"Genre"> | Date | string
    updated?: DateTimeWithAggregatesFilter<"Genre"> | Date | string
  }

  export type TagWhereInput = {
    AND?: Enumerable<TagWhereInput>
    OR?: Enumerable<TagWhereInput>
    NOT?: Enumerable<TagWhereInput>
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    created?: DateTimeFilter<"Tag"> | Date | string
    updated?: DateTimeFilter<"Tag"> | Date | string
    movies?: MovieListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    movies?: MovieOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = {
    id?: string
    name?: string
    AND?: Enumerable<TagWhereInput>
    OR?: Enumerable<TagWhereInput>
    NOT?: Enumerable<TagWhereInput>
    created?: DateTimeFilter<"Tag"> | Date | string
    updated?: DateTimeFilter<"Tag"> | Date | string
    movies?: MovieListRelationFilter
  }

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TagScalarWhereWithAggregatesInput>
    OR?: Enumerable<TagScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TagScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
    created?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
    updated?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
  }

  export type PosterWhereInput = {
    AND?: Enumerable<PosterWhereInput>
    OR?: Enumerable<PosterWhereInput>
    NOT?: Enumerable<PosterWhereInput>
    id?: StringFilter<"Poster"> | string
    imgUrl?: StringFilter<"Poster"> | string
    metaInfoId?: StringNullableFilter<"Poster"> | string | null
    MetaInfo?: XOR<MetaInfoNullableRelationFilter, MetaInfoWhereInput> | null
  }

  export type PosterOrderByWithRelationInput = {
    id?: SortOrder
    imgUrl?: SortOrder
    metaInfoId?: SortOrderInput | SortOrder
    MetaInfo?: MetaInfoOrderByWithRelationInput
  }

  export type PosterWhereUniqueInput = {
    id?: string
    AND?: Enumerable<PosterWhereInput>
    OR?: Enumerable<PosterWhereInput>
    NOT?: Enumerable<PosterWhereInput>
    imgUrl?: StringFilter<"Poster"> | string
    metaInfoId?: StringNullableFilter<"Poster"> | string | null
    MetaInfo?: XOR<MetaInfoNullableRelationFilter, MetaInfoWhereInput> | null
  }

  export type PosterOrderByWithAggregationInput = {
    id?: SortOrder
    imgUrl?: SortOrder
    metaInfoId?: SortOrderInput | SortOrder
    _count?: PosterCountOrderByAggregateInput
    _max?: PosterMaxOrderByAggregateInput
    _min?: PosterMinOrderByAggregateInput
  }

  export type PosterScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PosterScalarWhereWithAggregatesInput>
    OR?: Enumerable<PosterScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PosterScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter<"Poster"> | string
    imgUrl?: StringWithAggregatesFilter<"Poster"> | string
    metaInfoId?: StringNullableWithAggregatesFilter<"Poster"> | string | null
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter<"User"> | string
    userEmail?: StringFilter<"User"> | string
    created?: DateTimeFilter<"User"> | Date | string
    updated?: DateTimeFilter<"User"> | Date | string
    profile?: ProfileListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    userEmail?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    profile?: ProfileOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: string
    userEmail?: string
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    created?: DateTimeFilter<"User"> | Date | string
    updated?: DateTimeFilter<"User"> | Date | string
    profile?: ProfileListRelationFilter
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    userEmail?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter<"User"> | string
    userEmail?: StringWithAggregatesFilter<"User"> | string
    created?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProfileWhereInput = {
    AND?: Enumerable<ProfileWhereInput>
    OR?: Enumerable<ProfileWhereInput>
    NOT?: Enumerable<ProfileWhereInput>
    id?: StringFilter<"Profile"> | string
    phoneNumber?: StringFilter<"Profile"> | string
    firstname?: StringFilter<"Profile"> | string
    lastname?: StringFilter<"Profile"> | string
    created?: DateTimeFilter<"Profile"> | Date | string
    updated?: DateTimeFilter<"Profile"> | Date | string
    themeId?: BigIntFilter<"Profile"> | bigint | number
    userId?: StringFilter<"Profile"> | string
    lovedMovies?: MovieListRelationFilter
    lovedCategories?: GenreListRelationFilter
    usrTheme?: XOR<ThemeRelationFilter, ThemeWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    themeId?: SortOrder
    userId?: SortOrder
    lovedMovies?: MovieOrderByRelationAggregateInput
    lovedCategories?: GenreOrderByRelationAggregateInput
    usrTheme?: ThemeOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = {
    id?: string
    phoneNumber?: string
    AND?: Enumerable<ProfileWhereInput>
    OR?: Enumerable<ProfileWhereInput>
    NOT?: Enumerable<ProfileWhereInput>
    firstname?: StringFilter<"Profile"> | string
    lastname?: StringFilter<"Profile"> | string
    created?: DateTimeFilter<"Profile"> | Date | string
    updated?: DateTimeFilter<"Profile"> | Date | string
    themeId?: BigIntFilter<"Profile"> | bigint | number
    userId?: StringFilter<"Profile"> | string
    lovedMovies?: MovieListRelationFilter
    lovedCategories?: GenreListRelationFilter
    usrTheme?: XOR<ThemeRelationFilter, ThemeWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    themeId?: SortOrder
    userId?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProfileScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProfileScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProfileScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter<"Profile"> | string
    phoneNumber?: StringWithAggregatesFilter<"Profile"> | string
    firstname?: StringWithAggregatesFilter<"Profile"> | string
    lastname?: StringWithAggregatesFilter<"Profile"> | string
    created?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updated?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    themeId?: BigIntWithAggregatesFilter<"Profile"> | bigint | number
    userId?: StringWithAggregatesFilter<"Profile"> | string
  }

  export type ThemeWhereInput = {
    AND?: Enumerable<ThemeWhereInput>
    OR?: Enumerable<ThemeWhereInput>
    NOT?: Enumerable<ThemeWhereInput>
    id?: BigIntFilter<"Theme"> | bigint | number
    themeName?: StringFilter<"Theme"> | string
    themeColor?: StringFilter<"Theme"> | string
    created?: DateTimeFilter<"Theme"> | Date | string
    updated?: DateTimeFilter<"Theme"> | Date | string
    userPref?: ProfileListRelationFilter
  }

  export type ThemeOrderByWithRelationInput = {
    id?: SortOrder
    themeName?: SortOrder
    themeColor?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    userPref?: ProfileOrderByRelationAggregateInput
  }

  export type ThemeWhereUniqueInput = {
    id?: bigint | number
    themeName?: string
    AND?: Enumerable<ThemeWhereInput>
    OR?: Enumerable<ThemeWhereInput>
    NOT?: Enumerable<ThemeWhereInput>
    themeColor?: StringFilter<"Theme"> | string
    created?: DateTimeFilter<"Theme"> | Date | string
    updated?: DateTimeFilter<"Theme"> | Date | string
    userPref?: ProfileListRelationFilter
  }

  export type ThemeOrderByWithAggregationInput = {
    id?: SortOrder
    themeName?: SortOrder
    themeColor?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    _count?: ThemeCountOrderByAggregateInput
    _avg?: ThemeAvgOrderByAggregateInput
    _max?: ThemeMaxOrderByAggregateInput
    _min?: ThemeMinOrderByAggregateInput
    _sum?: ThemeSumOrderByAggregateInput
  }

  export type ThemeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ThemeScalarWhereWithAggregatesInput>
    OR?: Enumerable<ThemeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ThemeScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter<"Theme"> | bigint | number
    themeName?: StringWithAggregatesFilter<"Theme"> | string
    themeColor?: StringWithAggregatesFilter<"Theme"> | string
    created?: DateTimeWithAggregatesFilter<"Theme"> | Date | string
    updated?: DateTimeWithAggregatesFilter<"Theme"> | Date | string
  }

  export type MovieCreateInput = {
    movieId?: string
    title: string
    description?: string | null
    length?: number | null
    released?: Date | string | null
    available?: Date | string | null
    created?: Date | string
    updated?: Date | string
    genre?: GenreCreateNestedManyWithoutMoviesInput
    tags?: TagCreateNestedManyWithoutMoviesInput
    info: MetaInfoCreateNestedOneWithoutMovieInput
    profile?: ProfileCreateNestedManyWithoutLovedMoviesInput
  }

  export type MovieUncheckedCreateInput = {
    movieId?: string
    title: string
    description?: string | null
    length?: number | null
    released?: Date | string | null
    available?: Date | string | null
    infoId: string
    created?: Date | string
    updated?: Date | string
    genre?: GenreUncheckedCreateNestedManyWithoutMoviesInput
    tags?: TagUncheckedCreateNestedManyWithoutMoviesInput
    profile?: ProfileUncheckedCreateNestedManyWithoutLovedMoviesInput
  }

  export type MovieUpdateInput = {
    movieId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableIntFieldUpdateOperationsInput | number | null
    released?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    available?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    genre?: GenreUpdateManyWithoutMoviesNestedInput
    tags?: TagUpdateManyWithoutMoviesNestedInput
    info?: MetaInfoUpdateOneRequiredWithoutMovieNestedInput
    profile?: ProfileUpdateManyWithoutLovedMoviesNestedInput
  }

  export type MovieUncheckedUpdateInput = {
    movieId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableIntFieldUpdateOperationsInput | number | null
    released?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    available?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    infoId?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    genre?: GenreUncheckedUpdateManyWithoutMoviesNestedInput
    tags?: TagUncheckedUpdateManyWithoutMoviesNestedInput
    profile?: ProfileUncheckedUpdateManyWithoutLovedMoviesNestedInput
  }

  export type MovieCreateManyInput = {
    movieId?: string
    title: string
    description?: string | null
    length?: number | null
    released?: Date | string | null
    available?: Date | string | null
    infoId: string
    created?: Date | string
    updated?: Date | string
  }

  export type MovieUpdateManyMutationInput = {
    movieId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableIntFieldUpdateOperationsInput | number | null
    released?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    available?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieUncheckedUpdateManyInput = {
    movieId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableIntFieldUpdateOperationsInput | number | null
    released?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    available?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    infoId?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetaInfoCreateInput = {
    id?: string
    title: string
    description: string
    movieId: string
    created?: Date | string
    updated?: Date | string
    poster?: PosterCreateNestedManyWithoutMetaInfoInput
    Movie?: MovieCreateNestedOneWithoutInfoInput
  }

  export type MetaInfoUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    movieId: string
    created?: Date | string
    updated?: Date | string
    poster?: PosterUncheckedCreateNestedManyWithoutMetaInfoInput
    Movie?: MovieUncheckedCreateNestedOneWithoutInfoInput
  }

  export type MetaInfoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    movieId?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    poster?: PosterUpdateManyWithoutMetaInfoNestedInput
    Movie?: MovieUpdateOneWithoutInfoNestedInput
  }

  export type MetaInfoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    movieId?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    poster?: PosterUncheckedUpdateManyWithoutMetaInfoNestedInput
    Movie?: MovieUncheckedUpdateOneWithoutInfoNestedInput
  }

  export type MetaInfoCreateManyInput = {
    id?: string
    title: string
    description: string
    movieId: string
    created?: Date | string
    updated?: Date | string
  }

  export type MetaInfoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    movieId?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetaInfoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    movieId?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenreCreateInput = {
    id?: string
    name: string
    info: string
    created?: Date | string
    updated?: Date | string
    movies?: MovieCreateNestedManyWithoutGenreInput
    profile?: ProfileCreateNestedManyWithoutLovedCategoriesInput
  }

  export type GenreUncheckedCreateInput = {
    id?: string
    name: string
    info: string
    created?: Date | string
    updated?: Date | string
    movies?: MovieUncheckedCreateNestedManyWithoutGenreInput
    profile?: ProfileUncheckedCreateNestedManyWithoutLovedCategoriesInput
  }

  export type GenreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    info?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    movies?: MovieUpdateManyWithoutGenreNestedInput
    profile?: ProfileUpdateManyWithoutLovedCategoriesNestedInput
  }

  export type GenreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    info?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    movies?: MovieUncheckedUpdateManyWithoutGenreNestedInput
    profile?: ProfileUncheckedUpdateManyWithoutLovedCategoriesNestedInput
  }

  export type GenreCreateManyInput = {
    id?: string
    name: string
    info: string
    created?: Date | string
    updated?: Date | string
  }

  export type GenreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    info?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    info?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagCreateInput = {
    id?: string
    name: string
    created?: Date | string
    updated?: Date | string
    movies?: MovieCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    created?: Date | string
    updated?: Date | string
    movies?: MovieUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    movies?: MovieUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    movies?: MovieUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
    created?: Date | string
    updated?: Date | string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosterCreateInput = {
    id?: string
    imgUrl: string
    MetaInfo?: MetaInfoCreateNestedOneWithoutPosterInput
  }

  export type PosterUncheckedCreateInput = {
    id?: string
    imgUrl: string
    metaInfoId?: string | null
  }

  export type PosterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    MetaInfo?: MetaInfoUpdateOneWithoutPosterNestedInput
  }

  export type PosterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    metaInfoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PosterCreateManyInput = {
    id?: string
    imgUrl: string
    metaInfoId?: string | null
  }

  export type PosterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
  }

  export type PosterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    metaInfoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    userEmail: string
    created?: Date | string
    updated?: Date | string
    profile?: ProfileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    userEmail: string
    created?: Date | string
    updated?: Date | string
    profile?: ProfileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    userEmail: string
    created?: Date | string
    updated?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateInput = {
    id?: string
    phoneNumber: string
    firstname: string
    lastname: string
    created?: Date | string
    updated?: Date | string
    lovedMovies?: MovieCreateNestedManyWithoutProfileInput
    lovedCategories?: GenreCreateNestedManyWithoutProfileInput
    usrTheme: ThemeCreateNestedOneWithoutUserPrefInput
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: string
    phoneNumber: string
    firstname: string
    lastname: string
    created?: Date | string
    updated?: Date | string
    themeId: bigint | number
    userId: string
    lovedMovies?: MovieUncheckedCreateNestedManyWithoutProfileInput
    lovedCategories?: GenreUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    lovedMovies?: MovieUpdateManyWithoutProfileNestedInput
    lovedCategories?: GenreUpdateManyWithoutProfileNestedInput
    usrTheme?: ThemeUpdateOneRequiredWithoutUserPrefNestedInput
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    themeId?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: StringFieldUpdateOperationsInput | string
    lovedMovies?: MovieUncheckedUpdateManyWithoutProfileNestedInput
    lovedCategories?: GenreUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileCreateManyInput = {
    id?: string
    phoneNumber: string
    firstname: string
    lastname: string
    created?: Date | string
    updated?: Date | string
    themeId: bigint | number
    userId: string
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    themeId?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ThemeCreateInput = {
    id?: bigint | number
    themeName: string
    themeColor: string
    created?: Date | string
    updated?: Date | string
    userPref?: ProfileCreateNestedManyWithoutUsrThemeInput
  }

  export type ThemeUncheckedCreateInput = {
    id?: bigint | number
    themeName: string
    themeColor: string
    created?: Date | string
    updated?: Date | string
    userPref?: ProfileUncheckedCreateNestedManyWithoutUsrThemeInput
  }

  export type ThemeUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    themeName?: StringFieldUpdateOperationsInput | string
    themeColor?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    userPref?: ProfileUpdateManyWithoutUsrThemeNestedInput
  }

  export type ThemeUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    themeName?: StringFieldUpdateOperationsInput | string
    themeColor?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    userPref?: ProfileUncheckedUpdateManyWithoutUsrThemeNestedInput
  }

  export type ThemeCreateManyInput = {
    id?: bigint | number
    themeName: string
    themeColor: string
    created?: Date | string
    updated?: Date | string
  }

  export type ThemeUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    themeName?: StringFieldUpdateOperationsInput | string
    themeColor?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThemeUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    themeName?: StringFieldUpdateOperationsInput | string
    themeColor?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GenreListRelationFilter = {
    every?: GenreWhereInput
    some?: GenreWhereInput
    none?: GenreWhereInput
  }

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type MetaInfoRelationFilter = {
    is?: MetaInfoWhereInput
    isNot?: MetaInfoWhereInput
  }

  export type ProfileListRelationFilter = {
    every?: ProfileWhereInput
    some?: ProfileWhereInput
    none?: ProfileWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GenreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovieCountOrderByAggregateInput = {
    movieId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    length?: SortOrder
    released?: SortOrder
    available?: SortOrder
    infoId?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type MovieAvgOrderByAggregateInput = {
    length?: SortOrder
  }

  export type MovieMaxOrderByAggregateInput = {
    movieId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    length?: SortOrder
    released?: SortOrder
    available?: SortOrder
    infoId?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type MovieMinOrderByAggregateInput = {
    movieId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    length?: SortOrder
    released?: SortOrder
    available?: SortOrder
    infoId?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type MovieSumOrderByAggregateInput = {
    length?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PosterListRelationFilter = {
    every?: PosterWhereInput
    some?: PosterWhereInput
    none?: PosterWhereInput
  }

  export type MovieNullableRelationFilter = {
    is?: MovieWhereInput | null
    isNot?: MovieWhereInput | null
  }

  export type PosterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MetaInfoCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    movieId?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type MetaInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    movieId?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type MetaInfoMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    movieId?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type MovieListRelationFilter = {
    every?: MovieWhereInput
    some?: MovieWhereInput
    none?: MovieWhereInput
  }

  export type MovieOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GenreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    info?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type GenreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    info?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type GenreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    info?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type MetaInfoNullableRelationFilter = {
    is?: MetaInfoWhereInput | null
    isNot?: MetaInfoWhereInput | null
  }

  export type PosterCountOrderByAggregateInput = {
    id?: SortOrder
    imgUrl?: SortOrder
    metaInfoId?: SortOrder
  }

  export type PosterMaxOrderByAggregateInput = {
    id?: SortOrder
    imgUrl?: SortOrder
    metaInfoId?: SortOrder
  }

  export type PosterMinOrderByAggregateInput = {
    id?: SortOrder
    imgUrl?: SortOrder
    metaInfoId?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    userEmail?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    userEmail?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    userEmail?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: Enumerable<bigint> | Enumerable<number> | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: Enumerable<bigint> | Enumerable<number> | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type ThemeRelationFilter = {
    is?: ThemeWhereInput
    isNot?: ThemeWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    themeId?: SortOrder
    userId?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    themeId?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    themeId?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    themeId?: SortOrder
    userId?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    themeId?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: Enumerable<bigint> | Enumerable<number> | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: Enumerable<bigint> | Enumerable<number> | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type ThemeCountOrderByAggregateInput = {
    id?: SortOrder
    themeName?: SortOrder
    themeColor?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type ThemeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ThemeMaxOrderByAggregateInput = {
    id?: SortOrder
    themeName?: SortOrder
    themeColor?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type ThemeMinOrderByAggregateInput = {
    id?: SortOrder
    themeName?: SortOrder
    themeColor?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type ThemeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GenreCreateNestedManyWithoutMoviesInput = {
    create?: XOR<Enumerable<GenreCreateWithoutMoviesInput>, Enumerable<GenreUncheckedCreateWithoutMoviesInput>>
    connectOrCreate?: Enumerable<GenreCreateOrConnectWithoutMoviesInput>
    connect?: Enumerable<GenreWhereUniqueInput>
  }

  export type TagCreateNestedManyWithoutMoviesInput = {
    create?: XOR<Enumerable<TagCreateWithoutMoviesInput>, Enumerable<TagUncheckedCreateWithoutMoviesInput>>
    connectOrCreate?: Enumerable<TagCreateOrConnectWithoutMoviesInput>
    connect?: Enumerable<TagWhereUniqueInput>
  }

  export type MetaInfoCreateNestedOneWithoutMovieInput = {
    create?: XOR<MetaInfoCreateWithoutMovieInput, MetaInfoUncheckedCreateWithoutMovieInput>
    connectOrCreate?: MetaInfoCreateOrConnectWithoutMovieInput
    connect?: MetaInfoWhereUniqueInput
  }

  export type ProfileCreateNestedManyWithoutLovedMoviesInput = {
    create?: XOR<Enumerable<ProfileCreateWithoutLovedMoviesInput>, Enumerable<ProfileUncheckedCreateWithoutLovedMoviesInput>>
    connectOrCreate?: Enumerable<ProfileCreateOrConnectWithoutLovedMoviesInput>
    connect?: Enumerable<ProfileWhereUniqueInput>
  }

  export type GenreUncheckedCreateNestedManyWithoutMoviesInput = {
    create?: XOR<Enumerable<GenreCreateWithoutMoviesInput>, Enumerable<GenreUncheckedCreateWithoutMoviesInput>>
    connectOrCreate?: Enumerable<GenreCreateOrConnectWithoutMoviesInput>
    connect?: Enumerable<GenreWhereUniqueInput>
  }

  export type TagUncheckedCreateNestedManyWithoutMoviesInput = {
    create?: XOR<Enumerable<TagCreateWithoutMoviesInput>, Enumerable<TagUncheckedCreateWithoutMoviesInput>>
    connectOrCreate?: Enumerable<TagCreateOrConnectWithoutMoviesInput>
    connect?: Enumerable<TagWhereUniqueInput>
  }

  export type ProfileUncheckedCreateNestedManyWithoutLovedMoviesInput = {
    create?: XOR<Enumerable<ProfileCreateWithoutLovedMoviesInput>, Enumerable<ProfileUncheckedCreateWithoutLovedMoviesInput>>
    connectOrCreate?: Enumerable<ProfileCreateOrConnectWithoutLovedMoviesInput>
    connect?: Enumerable<ProfileWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GenreUpdateManyWithoutMoviesNestedInput = {
    create?: XOR<Enumerable<GenreCreateWithoutMoviesInput>, Enumerable<GenreUncheckedCreateWithoutMoviesInput>>
    connectOrCreate?: Enumerable<GenreCreateOrConnectWithoutMoviesInput>
    upsert?: Enumerable<GenreUpsertWithWhereUniqueWithoutMoviesInput>
    set?: Enumerable<GenreWhereUniqueInput>
    disconnect?: Enumerable<GenreWhereUniqueInput>
    delete?: Enumerable<GenreWhereUniqueInput>
    connect?: Enumerable<GenreWhereUniqueInput>
    update?: Enumerable<GenreUpdateWithWhereUniqueWithoutMoviesInput>
    updateMany?: Enumerable<GenreUpdateManyWithWhereWithoutMoviesInput>
    deleteMany?: Enumerable<GenreScalarWhereInput>
  }

  export type TagUpdateManyWithoutMoviesNestedInput = {
    create?: XOR<Enumerable<TagCreateWithoutMoviesInput>, Enumerable<TagUncheckedCreateWithoutMoviesInput>>
    connectOrCreate?: Enumerable<TagCreateOrConnectWithoutMoviesInput>
    upsert?: Enumerable<TagUpsertWithWhereUniqueWithoutMoviesInput>
    set?: Enumerable<TagWhereUniqueInput>
    disconnect?: Enumerable<TagWhereUniqueInput>
    delete?: Enumerable<TagWhereUniqueInput>
    connect?: Enumerable<TagWhereUniqueInput>
    update?: Enumerable<TagUpdateWithWhereUniqueWithoutMoviesInput>
    updateMany?: Enumerable<TagUpdateManyWithWhereWithoutMoviesInput>
    deleteMany?: Enumerable<TagScalarWhereInput>
  }

  export type MetaInfoUpdateOneRequiredWithoutMovieNestedInput = {
    create?: XOR<MetaInfoCreateWithoutMovieInput, MetaInfoUncheckedCreateWithoutMovieInput>
    connectOrCreate?: MetaInfoCreateOrConnectWithoutMovieInput
    upsert?: MetaInfoUpsertWithoutMovieInput
    connect?: MetaInfoWhereUniqueInput
    update?: XOR<XOR<MetaInfoUpdateToOneWithWhereWithoutMovieInput, MetaInfoUpdateWithoutMovieInput>, MetaInfoUncheckedUpdateWithoutMovieInput>
  }

  export type ProfileUpdateManyWithoutLovedMoviesNestedInput = {
    create?: XOR<Enumerable<ProfileCreateWithoutLovedMoviesInput>, Enumerable<ProfileUncheckedCreateWithoutLovedMoviesInput>>
    connectOrCreate?: Enumerable<ProfileCreateOrConnectWithoutLovedMoviesInput>
    upsert?: Enumerable<ProfileUpsertWithWhereUniqueWithoutLovedMoviesInput>
    set?: Enumerable<ProfileWhereUniqueInput>
    disconnect?: Enumerable<ProfileWhereUniqueInput>
    delete?: Enumerable<ProfileWhereUniqueInput>
    connect?: Enumerable<ProfileWhereUniqueInput>
    update?: Enumerable<ProfileUpdateWithWhereUniqueWithoutLovedMoviesInput>
    updateMany?: Enumerable<ProfileUpdateManyWithWhereWithoutLovedMoviesInput>
    deleteMany?: Enumerable<ProfileScalarWhereInput>
  }

  export type GenreUncheckedUpdateManyWithoutMoviesNestedInput = {
    create?: XOR<Enumerable<GenreCreateWithoutMoviesInput>, Enumerable<GenreUncheckedCreateWithoutMoviesInput>>
    connectOrCreate?: Enumerable<GenreCreateOrConnectWithoutMoviesInput>
    upsert?: Enumerable<GenreUpsertWithWhereUniqueWithoutMoviesInput>
    set?: Enumerable<GenreWhereUniqueInput>
    disconnect?: Enumerable<GenreWhereUniqueInput>
    delete?: Enumerable<GenreWhereUniqueInput>
    connect?: Enumerable<GenreWhereUniqueInput>
    update?: Enumerable<GenreUpdateWithWhereUniqueWithoutMoviesInput>
    updateMany?: Enumerable<GenreUpdateManyWithWhereWithoutMoviesInput>
    deleteMany?: Enumerable<GenreScalarWhereInput>
  }

  export type TagUncheckedUpdateManyWithoutMoviesNestedInput = {
    create?: XOR<Enumerable<TagCreateWithoutMoviesInput>, Enumerable<TagUncheckedCreateWithoutMoviesInput>>
    connectOrCreate?: Enumerable<TagCreateOrConnectWithoutMoviesInput>
    upsert?: Enumerable<TagUpsertWithWhereUniqueWithoutMoviesInput>
    set?: Enumerable<TagWhereUniqueInput>
    disconnect?: Enumerable<TagWhereUniqueInput>
    delete?: Enumerable<TagWhereUniqueInput>
    connect?: Enumerable<TagWhereUniqueInput>
    update?: Enumerable<TagUpdateWithWhereUniqueWithoutMoviesInput>
    updateMany?: Enumerable<TagUpdateManyWithWhereWithoutMoviesInput>
    deleteMany?: Enumerable<TagScalarWhereInput>
  }

  export type ProfileUncheckedUpdateManyWithoutLovedMoviesNestedInput = {
    create?: XOR<Enumerable<ProfileCreateWithoutLovedMoviesInput>, Enumerable<ProfileUncheckedCreateWithoutLovedMoviesInput>>
    connectOrCreate?: Enumerable<ProfileCreateOrConnectWithoutLovedMoviesInput>
    upsert?: Enumerable<ProfileUpsertWithWhereUniqueWithoutLovedMoviesInput>
    set?: Enumerable<ProfileWhereUniqueInput>
    disconnect?: Enumerable<ProfileWhereUniqueInput>
    delete?: Enumerable<ProfileWhereUniqueInput>
    connect?: Enumerable<ProfileWhereUniqueInput>
    update?: Enumerable<ProfileUpdateWithWhereUniqueWithoutLovedMoviesInput>
    updateMany?: Enumerable<ProfileUpdateManyWithWhereWithoutLovedMoviesInput>
    deleteMany?: Enumerable<ProfileScalarWhereInput>
  }

  export type PosterCreateNestedManyWithoutMetaInfoInput = {
    create?: XOR<Enumerable<PosterCreateWithoutMetaInfoInput>, Enumerable<PosterUncheckedCreateWithoutMetaInfoInput>>
    connectOrCreate?: Enumerable<PosterCreateOrConnectWithoutMetaInfoInput>
    createMany?: PosterCreateManyMetaInfoInputEnvelope
    connect?: Enumerable<PosterWhereUniqueInput>
  }

  export type MovieCreateNestedOneWithoutInfoInput = {
    create?: XOR<MovieCreateWithoutInfoInput, MovieUncheckedCreateWithoutInfoInput>
    connectOrCreate?: MovieCreateOrConnectWithoutInfoInput
    connect?: MovieWhereUniqueInput
  }

  export type PosterUncheckedCreateNestedManyWithoutMetaInfoInput = {
    create?: XOR<Enumerable<PosterCreateWithoutMetaInfoInput>, Enumerable<PosterUncheckedCreateWithoutMetaInfoInput>>
    connectOrCreate?: Enumerable<PosterCreateOrConnectWithoutMetaInfoInput>
    createMany?: PosterCreateManyMetaInfoInputEnvelope
    connect?: Enumerable<PosterWhereUniqueInput>
  }

  export type MovieUncheckedCreateNestedOneWithoutInfoInput = {
    create?: XOR<MovieCreateWithoutInfoInput, MovieUncheckedCreateWithoutInfoInput>
    connectOrCreate?: MovieCreateOrConnectWithoutInfoInput
    connect?: MovieWhereUniqueInput
  }

  export type PosterUpdateManyWithoutMetaInfoNestedInput = {
    create?: XOR<Enumerable<PosterCreateWithoutMetaInfoInput>, Enumerable<PosterUncheckedCreateWithoutMetaInfoInput>>
    connectOrCreate?: Enumerable<PosterCreateOrConnectWithoutMetaInfoInput>
    upsert?: Enumerable<PosterUpsertWithWhereUniqueWithoutMetaInfoInput>
    createMany?: PosterCreateManyMetaInfoInputEnvelope
    set?: Enumerable<PosterWhereUniqueInput>
    disconnect?: Enumerable<PosterWhereUniqueInput>
    delete?: Enumerable<PosterWhereUniqueInput>
    connect?: Enumerable<PosterWhereUniqueInput>
    update?: Enumerable<PosterUpdateWithWhereUniqueWithoutMetaInfoInput>
    updateMany?: Enumerable<PosterUpdateManyWithWhereWithoutMetaInfoInput>
    deleteMany?: Enumerable<PosterScalarWhereInput>
  }

  export type MovieUpdateOneWithoutInfoNestedInput = {
    create?: XOR<MovieCreateWithoutInfoInput, MovieUncheckedCreateWithoutInfoInput>
    connectOrCreate?: MovieCreateOrConnectWithoutInfoInput
    upsert?: MovieUpsertWithoutInfoInput
    disconnect?: MovieWhereInput | boolean
    delete?: MovieWhereInput | boolean
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutInfoInput, MovieUpdateWithoutInfoInput>, MovieUncheckedUpdateWithoutInfoInput>
  }

  export type PosterUncheckedUpdateManyWithoutMetaInfoNestedInput = {
    create?: XOR<Enumerable<PosterCreateWithoutMetaInfoInput>, Enumerable<PosterUncheckedCreateWithoutMetaInfoInput>>
    connectOrCreate?: Enumerable<PosterCreateOrConnectWithoutMetaInfoInput>
    upsert?: Enumerable<PosterUpsertWithWhereUniqueWithoutMetaInfoInput>
    createMany?: PosterCreateManyMetaInfoInputEnvelope
    set?: Enumerable<PosterWhereUniqueInput>
    disconnect?: Enumerable<PosterWhereUniqueInput>
    delete?: Enumerable<PosterWhereUniqueInput>
    connect?: Enumerable<PosterWhereUniqueInput>
    update?: Enumerable<PosterUpdateWithWhereUniqueWithoutMetaInfoInput>
    updateMany?: Enumerable<PosterUpdateManyWithWhereWithoutMetaInfoInput>
    deleteMany?: Enumerable<PosterScalarWhereInput>
  }

  export type MovieUncheckedUpdateOneWithoutInfoNestedInput = {
    create?: XOR<MovieCreateWithoutInfoInput, MovieUncheckedCreateWithoutInfoInput>
    connectOrCreate?: MovieCreateOrConnectWithoutInfoInput
    upsert?: MovieUpsertWithoutInfoInput
    disconnect?: MovieWhereInput | boolean
    delete?: MovieWhereInput | boolean
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutInfoInput, MovieUpdateWithoutInfoInput>, MovieUncheckedUpdateWithoutInfoInput>
  }

  export type MovieCreateNestedManyWithoutGenreInput = {
    create?: XOR<Enumerable<MovieCreateWithoutGenreInput>, Enumerable<MovieUncheckedCreateWithoutGenreInput>>
    connectOrCreate?: Enumerable<MovieCreateOrConnectWithoutGenreInput>
    connect?: Enumerable<MovieWhereUniqueInput>
  }

  export type ProfileCreateNestedManyWithoutLovedCategoriesInput = {
    create?: XOR<Enumerable<ProfileCreateWithoutLovedCategoriesInput>, Enumerable<ProfileUncheckedCreateWithoutLovedCategoriesInput>>
    connectOrCreate?: Enumerable<ProfileCreateOrConnectWithoutLovedCategoriesInput>
    connect?: Enumerable<ProfileWhereUniqueInput>
  }

  export type MovieUncheckedCreateNestedManyWithoutGenreInput = {
    create?: XOR<Enumerable<MovieCreateWithoutGenreInput>, Enumerable<MovieUncheckedCreateWithoutGenreInput>>
    connectOrCreate?: Enumerable<MovieCreateOrConnectWithoutGenreInput>
    connect?: Enumerable<MovieWhereUniqueInput>
  }

  export type ProfileUncheckedCreateNestedManyWithoutLovedCategoriesInput = {
    create?: XOR<Enumerable<ProfileCreateWithoutLovedCategoriesInput>, Enumerable<ProfileUncheckedCreateWithoutLovedCategoriesInput>>
    connectOrCreate?: Enumerable<ProfileCreateOrConnectWithoutLovedCategoriesInput>
    connect?: Enumerable<ProfileWhereUniqueInput>
  }

  export type MovieUpdateManyWithoutGenreNestedInput = {
    create?: XOR<Enumerable<MovieCreateWithoutGenreInput>, Enumerable<MovieUncheckedCreateWithoutGenreInput>>
    connectOrCreate?: Enumerable<MovieCreateOrConnectWithoutGenreInput>
    upsert?: Enumerable<MovieUpsertWithWhereUniqueWithoutGenreInput>
    set?: Enumerable<MovieWhereUniqueInput>
    disconnect?: Enumerable<MovieWhereUniqueInput>
    delete?: Enumerable<MovieWhereUniqueInput>
    connect?: Enumerable<MovieWhereUniqueInput>
    update?: Enumerable<MovieUpdateWithWhereUniqueWithoutGenreInput>
    updateMany?: Enumerable<MovieUpdateManyWithWhereWithoutGenreInput>
    deleteMany?: Enumerable<MovieScalarWhereInput>
  }

  export type ProfileUpdateManyWithoutLovedCategoriesNestedInput = {
    create?: XOR<Enumerable<ProfileCreateWithoutLovedCategoriesInput>, Enumerable<ProfileUncheckedCreateWithoutLovedCategoriesInput>>
    connectOrCreate?: Enumerable<ProfileCreateOrConnectWithoutLovedCategoriesInput>
    upsert?: Enumerable<ProfileUpsertWithWhereUniqueWithoutLovedCategoriesInput>
    set?: Enumerable<ProfileWhereUniqueInput>
    disconnect?: Enumerable<ProfileWhereUniqueInput>
    delete?: Enumerable<ProfileWhereUniqueInput>
    connect?: Enumerable<ProfileWhereUniqueInput>
    update?: Enumerable<ProfileUpdateWithWhereUniqueWithoutLovedCategoriesInput>
    updateMany?: Enumerable<ProfileUpdateManyWithWhereWithoutLovedCategoriesInput>
    deleteMany?: Enumerable<ProfileScalarWhereInput>
  }

  export type MovieUncheckedUpdateManyWithoutGenreNestedInput = {
    create?: XOR<Enumerable<MovieCreateWithoutGenreInput>, Enumerable<MovieUncheckedCreateWithoutGenreInput>>
    connectOrCreate?: Enumerable<MovieCreateOrConnectWithoutGenreInput>
    upsert?: Enumerable<MovieUpsertWithWhereUniqueWithoutGenreInput>
    set?: Enumerable<MovieWhereUniqueInput>
    disconnect?: Enumerable<MovieWhereUniqueInput>
    delete?: Enumerable<MovieWhereUniqueInput>
    connect?: Enumerable<MovieWhereUniqueInput>
    update?: Enumerable<MovieUpdateWithWhereUniqueWithoutGenreInput>
    updateMany?: Enumerable<MovieUpdateManyWithWhereWithoutGenreInput>
    deleteMany?: Enumerable<MovieScalarWhereInput>
  }

  export type ProfileUncheckedUpdateManyWithoutLovedCategoriesNestedInput = {
    create?: XOR<Enumerable<ProfileCreateWithoutLovedCategoriesInput>, Enumerable<ProfileUncheckedCreateWithoutLovedCategoriesInput>>
    connectOrCreate?: Enumerable<ProfileCreateOrConnectWithoutLovedCategoriesInput>
    upsert?: Enumerable<ProfileUpsertWithWhereUniqueWithoutLovedCategoriesInput>
    set?: Enumerable<ProfileWhereUniqueInput>
    disconnect?: Enumerable<ProfileWhereUniqueInput>
    delete?: Enumerable<ProfileWhereUniqueInput>
    connect?: Enumerable<ProfileWhereUniqueInput>
    update?: Enumerable<ProfileUpdateWithWhereUniqueWithoutLovedCategoriesInput>
    updateMany?: Enumerable<ProfileUpdateManyWithWhereWithoutLovedCategoriesInput>
    deleteMany?: Enumerable<ProfileScalarWhereInput>
  }

  export type MovieCreateNestedManyWithoutTagsInput = {
    create?: XOR<Enumerable<MovieCreateWithoutTagsInput>, Enumerable<MovieUncheckedCreateWithoutTagsInput>>
    connectOrCreate?: Enumerable<MovieCreateOrConnectWithoutTagsInput>
    connect?: Enumerable<MovieWhereUniqueInput>
  }

  export type MovieUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<Enumerable<MovieCreateWithoutTagsInput>, Enumerable<MovieUncheckedCreateWithoutTagsInput>>
    connectOrCreate?: Enumerable<MovieCreateOrConnectWithoutTagsInput>
    connect?: Enumerable<MovieWhereUniqueInput>
  }

  export type MovieUpdateManyWithoutTagsNestedInput = {
    create?: XOR<Enumerable<MovieCreateWithoutTagsInput>, Enumerable<MovieUncheckedCreateWithoutTagsInput>>
    connectOrCreate?: Enumerable<MovieCreateOrConnectWithoutTagsInput>
    upsert?: Enumerable<MovieUpsertWithWhereUniqueWithoutTagsInput>
    set?: Enumerable<MovieWhereUniqueInput>
    disconnect?: Enumerable<MovieWhereUniqueInput>
    delete?: Enumerable<MovieWhereUniqueInput>
    connect?: Enumerable<MovieWhereUniqueInput>
    update?: Enumerable<MovieUpdateWithWhereUniqueWithoutTagsInput>
    updateMany?: Enumerable<MovieUpdateManyWithWhereWithoutTagsInput>
    deleteMany?: Enumerable<MovieScalarWhereInput>
  }

  export type MovieUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<Enumerable<MovieCreateWithoutTagsInput>, Enumerable<MovieUncheckedCreateWithoutTagsInput>>
    connectOrCreate?: Enumerable<MovieCreateOrConnectWithoutTagsInput>
    upsert?: Enumerable<MovieUpsertWithWhereUniqueWithoutTagsInput>
    set?: Enumerable<MovieWhereUniqueInput>
    disconnect?: Enumerable<MovieWhereUniqueInput>
    delete?: Enumerable<MovieWhereUniqueInput>
    connect?: Enumerable<MovieWhereUniqueInput>
    update?: Enumerable<MovieUpdateWithWhereUniqueWithoutTagsInput>
    updateMany?: Enumerable<MovieUpdateManyWithWhereWithoutTagsInput>
    deleteMany?: Enumerable<MovieScalarWhereInput>
  }

  export type MetaInfoCreateNestedOneWithoutPosterInput = {
    create?: XOR<MetaInfoCreateWithoutPosterInput, MetaInfoUncheckedCreateWithoutPosterInput>
    connectOrCreate?: MetaInfoCreateOrConnectWithoutPosterInput
    connect?: MetaInfoWhereUniqueInput
  }

  export type MetaInfoUpdateOneWithoutPosterNestedInput = {
    create?: XOR<MetaInfoCreateWithoutPosterInput, MetaInfoUncheckedCreateWithoutPosterInput>
    connectOrCreate?: MetaInfoCreateOrConnectWithoutPosterInput
    upsert?: MetaInfoUpsertWithoutPosterInput
    disconnect?: MetaInfoWhereInput | boolean
    delete?: MetaInfoWhereInput | boolean
    connect?: MetaInfoWhereUniqueInput
    update?: XOR<XOR<MetaInfoUpdateToOneWithWhereWithoutPosterInput, MetaInfoUpdateWithoutPosterInput>, MetaInfoUncheckedUpdateWithoutPosterInput>
  }

  export type ProfileCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ProfileCreateWithoutUserInput>, Enumerable<ProfileUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ProfileCreateOrConnectWithoutUserInput>
    createMany?: ProfileCreateManyUserInputEnvelope
    connect?: Enumerable<ProfileWhereUniqueInput>
  }

  export type ProfileUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ProfileCreateWithoutUserInput>, Enumerable<ProfileUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ProfileCreateOrConnectWithoutUserInput>
    createMany?: ProfileCreateManyUserInputEnvelope
    connect?: Enumerable<ProfileWhereUniqueInput>
  }

  export type ProfileUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ProfileCreateWithoutUserInput>, Enumerable<ProfileUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ProfileCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ProfileUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ProfileCreateManyUserInputEnvelope
    set?: Enumerable<ProfileWhereUniqueInput>
    disconnect?: Enumerable<ProfileWhereUniqueInput>
    delete?: Enumerable<ProfileWhereUniqueInput>
    connect?: Enumerable<ProfileWhereUniqueInput>
    update?: Enumerable<ProfileUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ProfileUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ProfileScalarWhereInput>
  }

  export type ProfileUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ProfileCreateWithoutUserInput>, Enumerable<ProfileUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ProfileCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ProfileUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ProfileCreateManyUserInputEnvelope
    set?: Enumerable<ProfileWhereUniqueInput>
    disconnect?: Enumerable<ProfileWhereUniqueInput>
    delete?: Enumerable<ProfileWhereUniqueInput>
    connect?: Enumerable<ProfileWhereUniqueInput>
    update?: Enumerable<ProfileUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ProfileUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ProfileScalarWhereInput>
  }

  export type MovieCreateNestedManyWithoutProfileInput = {
    create?: XOR<Enumerable<MovieCreateWithoutProfileInput>, Enumerable<MovieUncheckedCreateWithoutProfileInput>>
    connectOrCreate?: Enumerable<MovieCreateOrConnectWithoutProfileInput>
    connect?: Enumerable<MovieWhereUniqueInput>
  }

  export type GenreCreateNestedManyWithoutProfileInput = {
    create?: XOR<Enumerable<GenreCreateWithoutProfileInput>, Enumerable<GenreUncheckedCreateWithoutProfileInput>>
    connectOrCreate?: Enumerable<GenreCreateOrConnectWithoutProfileInput>
    connect?: Enumerable<GenreWhereUniqueInput>
  }

  export type ThemeCreateNestedOneWithoutUserPrefInput = {
    create?: XOR<ThemeCreateWithoutUserPrefInput, ThemeUncheckedCreateWithoutUserPrefInput>
    connectOrCreate?: ThemeCreateOrConnectWithoutUserPrefInput
    connect?: ThemeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type MovieUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<Enumerable<MovieCreateWithoutProfileInput>, Enumerable<MovieUncheckedCreateWithoutProfileInput>>
    connectOrCreate?: Enumerable<MovieCreateOrConnectWithoutProfileInput>
    connect?: Enumerable<MovieWhereUniqueInput>
  }

  export type GenreUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<Enumerable<GenreCreateWithoutProfileInput>, Enumerable<GenreUncheckedCreateWithoutProfileInput>>
    connectOrCreate?: Enumerable<GenreCreateOrConnectWithoutProfileInput>
    connect?: Enumerable<GenreWhereUniqueInput>
  }

  export type MovieUpdateManyWithoutProfileNestedInput = {
    create?: XOR<Enumerable<MovieCreateWithoutProfileInput>, Enumerable<MovieUncheckedCreateWithoutProfileInput>>
    connectOrCreate?: Enumerable<MovieCreateOrConnectWithoutProfileInput>
    upsert?: Enumerable<MovieUpsertWithWhereUniqueWithoutProfileInput>
    set?: Enumerable<MovieWhereUniqueInput>
    disconnect?: Enumerable<MovieWhereUniqueInput>
    delete?: Enumerable<MovieWhereUniqueInput>
    connect?: Enumerable<MovieWhereUniqueInput>
    update?: Enumerable<MovieUpdateWithWhereUniqueWithoutProfileInput>
    updateMany?: Enumerable<MovieUpdateManyWithWhereWithoutProfileInput>
    deleteMany?: Enumerable<MovieScalarWhereInput>
  }

  export type GenreUpdateManyWithoutProfileNestedInput = {
    create?: XOR<Enumerable<GenreCreateWithoutProfileInput>, Enumerable<GenreUncheckedCreateWithoutProfileInput>>
    connectOrCreate?: Enumerable<GenreCreateOrConnectWithoutProfileInput>
    upsert?: Enumerable<GenreUpsertWithWhereUniqueWithoutProfileInput>
    set?: Enumerable<GenreWhereUniqueInput>
    disconnect?: Enumerable<GenreWhereUniqueInput>
    delete?: Enumerable<GenreWhereUniqueInput>
    connect?: Enumerable<GenreWhereUniqueInput>
    update?: Enumerable<GenreUpdateWithWhereUniqueWithoutProfileInput>
    updateMany?: Enumerable<GenreUpdateManyWithWhereWithoutProfileInput>
    deleteMany?: Enumerable<GenreScalarWhereInput>
  }

  export type ThemeUpdateOneRequiredWithoutUserPrefNestedInput = {
    create?: XOR<ThemeCreateWithoutUserPrefInput, ThemeUncheckedCreateWithoutUserPrefInput>
    connectOrCreate?: ThemeCreateOrConnectWithoutUserPrefInput
    upsert?: ThemeUpsertWithoutUserPrefInput
    connect?: ThemeWhereUniqueInput
    update?: XOR<XOR<ThemeUpdateToOneWithWhereWithoutUserPrefInput, ThemeUpdateWithoutUserPrefInput>, ThemeUncheckedUpdateWithoutUserPrefInput>
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type MovieUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<Enumerable<MovieCreateWithoutProfileInput>, Enumerable<MovieUncheckedCreateWithoutProfileInput>>
    connectOrCreate?: Enumerable<MovieCreateOrConnectWithoutProfileInput>
    upsert?: Enumerable<MovieUpsertWithWhereUniqueWithoutProfileInput>
    set?: Enumerable<MovieWhereUniqueInput>
    disconnect?: Enumerable<MovieWhereUniqueInput>
    delete?: Enumerable<MovieWhereUniqueInput>
    connect?: Enumerable<MovieWhereUniqueInput>
    update?: Enumerable<MovieUpdateWithWhereUniqueWithoutProfileInput>
    updateMany?: Enumerable<MovieUpdateManyWithWhereWithoutProfileInput>
    deleteMany?: Enumerable<MovieScalarWhereInput>
  }

  export type GenreUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<Enumerable<GenreCreateWithoutProfileInput>, Enumerable<GenreUncheckedCreateWithoutProfileInput>>
    connectOrCreate?: Enumerable<GenreCreateOrConnectWithoutProfileInput>
    upsert?: Enumerable<GenreUpsertWithWhereUniqueWithoutProfileInput>
    set?: Enumerable<GenreWhereUniqueInput>
    disconnect?: Enumerable<GenreWhereUniqueInput>
    delete?: Enumerable<GenreWhereUniqueInput>
    connect?: Enumerable<GenreWhereUniqueInput>
    update?: Enumerable<GenreUpdateWithWhereUniqueWithoutProfileInput>
    updateMany?: Enumerable<GenreUpdateManyWithWhereWithoutProfileInput>
    deleteMany?: Enumerable<GenreScalarWhereInput>
  }

  export type ProfileCreateNestedManyWithoutUsrThemeInput = {
    create?: XOR<Enumerable<ProfileCreateWithoutUsrThemeInput>, Enumerable<ProfileUncheckedCreateWithoutUsrThemeInput>>
    connectOrCreate?: Enumerable<ProfileCreateOrConnectWithoutUsrThemeInput>
    createMany?: ProfileCreateManyUsrThemeInputEnvelope
    connect?: Enumerable<ProfileWhereUniqueInput>
  }

  export type ProfileUncheckedCreateNestedManyWithoutUsrThemeInput = {
    create?: XOR<Enumerable<ProfileCreateWithoutUsrThemeInput>, Enumerable<ProfileUncheckedCreateWithoutUsrThemeInput>>
    connectOrCreate?: Enumerable<ProfileCreateOrConnectWithoutUsrThemeInput>
    createMany?: ProfileCreateManyUsrThemeInputEnvelope
    connect?: Enumerable<ProfileWhereUniqueInput>
  }

  export type ProfileUpdateManyWithoutUsrThemeNestedInput = {
    create?: XOR<Enumerable<ProfileCreateWithoutUsrThemeInput>, Enumerable<ProfileUncheckedCreateWithoutUsrThemeInput>>
    connectOrCreate?: Enumerable<ProfileCreateOrConnectWithoutUsrThemeInput>
    upsert?: Enumerable<ProfileUpsertWithWhereUniqueWithoutUsrThemeInput>
    createMany?: ProfileCreateManyUsrThemeInputEnvelope
    set?: Enumerable<ProfileWhereUniqueInput>
    disconnect?: Enumerable<ProfileWhereUniqueInput>
    delete?: Enumerable<ProfileWhereUniqueInput>
    connect?: Enumerable<ProfileWhereUniqueInput>
    update?: Enumerable<ProfileUpdateWithWhereUniqueWithoutUsrThemeInput>
    updateMany?: Enumerable<ProfileUpdateManyWithWhereWithoutUsrThemeInput>
    deleteMany?: Enumerable<ProfileScalarWhereInput>
  }

  export type ProfileUncheckedUpdateManyWithoutUsrThemeNestedInput = {
    create?: XOR<Enumerable<ProfileCreateWithoutUsrThemeInput>, Enumerable<ProfileUncheckedCreateWithoutUsrThemeInput>>
    connectOrCreate?: Enumerable<ProfileCreateOrConnectWithoutUsrThemeInput>
    upsert?: Enumerable<ProfileUpsertWithWhereUniqueWithoutUsrThemeInput>
    createMany?: ProfileCreateManyUsrThemeInputEnvelope
    set?: Enumerable<ProfileWhereUniqueInput>
    disconnect?: Enumerable<ProfileWhereUniqueInput>
    delete?: Enumerable<ProfileWhereUniqueInput>
    connect?: Enumerable<ProfileWhereUniqueInput>
    update?: Enumerable<ProfileUpdateWithWhereUniqueWithoutUsrThemeInput>
    updateMany?: Enumerable<ProfileUpdateManyWithWhereWithoutUsrThemeInput>
    deleteMany?: Enumerable<ProfileScalarWhereInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel>
    notIn?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: Enumerable<number> | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<number> | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: Enumerable<bigint> | Enumerable<number> | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: Enumerable<bigint> | Enumerable<number> | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: Enumerable<bigint> | Enumerable<number> | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: Enumerable<bigint> | Enumerable<number> | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: Enumerable<number> | ListFloatFieldRefInput<$PrismaModel>
    notIn?: Enumerable<number> | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type GenreCreateWithoutMoviesInput = {
    id?: string
    name: string
    info: string
    created?: Date | string
    updated?: Date | string
    profile?: ProfileCreateNestedManyWithoutLovedCategoriesInput
  }

  export type GenreUncheckedCreateWithoutMoviesInput = {
    id?: string
    name: string
    info: string
    created?: Date | string
    updated?: Date | string
    profile?: ProfileUncheckedCreateNestedManyWithoutLovedCategoriesInput
  }

  export type GenreCreateOrConnectWithoutMoviesInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutMoviesInput, GenreUncheckedCreateWithoutMoviesInput>
  }

  export type TagCreateWithoutMoviesInput = {
    id?: string
    name: string
    created?: Date | string
    updated?: Date | string
  }

  export type TagUncheckedCreateWithoutMoviesInput = {
    id?: string
    name: string
    created?: Date | string
    updated?: Date | string
  }

  export type TagCreateOrConnectWithoutMoviesInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutMoviesInput, TagUncheckedCreateWithoutMoviesInput>
  }

  export type MetaInfoCreateWithoutMovieInput = {
    id?: string
    title: string
    description: string
    movieId: string
    created?: Date | string
    updated?: Date | string
    poster?: PosterCreateNestedManyWithoutMetaInfoInput
  }

  export type MetaInfoUncheckedCreateWithoutMovieInput = {
    id?: string
    title: string
    description: string
    movieId: string
    created?: Date | string
    updated?: Date | string
    poster?: PosterUncheckedCreateNestedManyWithoutMetaInfoInput
  }

  export type MetaInfoCreateOrConnectWithoutMovieInput = {
    where: MetaInfoWhereUniqueInput
    create: XOR<MetaInfoCreateWithoutMovieInput, MetaInfoUncheckedCreateWithoutMovieInput>
  }

  export type ProfileCreateWithoutLovedMoviesInput = {
    id?: string
    phoneNumber: string
    firstname: string
    lastname: string
    created?: Date | string
    updated?: Date | string
    lovedCategories?: GenreCreateNestedManyWithoutProfileInput
    usrTheme: ThemeCreateNestedOneWithoutUserPrefInput
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutLovedMoviesInput = {
    id?: string
    phoneNumber: string
    firstname: string
    lastname: string
    created?: Date | string
    updated?: Date | string
    themeId: bigint | number
    userId: string
    lovedCategories?: GenreUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutLovedMoviesInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutLovedMoviesInput, ProfileUncheckedCreateWithoutLovedMoviesInput>
  }

  export type GenreUpsertWithWhereUniqueWithoutMoviesInput = {
    where: GenreWhereUniqueInput
    update: XOR<GenreUpdateWithoutMoviesInput, GenreUncheckedUpdateWithoutMoviesInput>
    create: XOR<GenreCreateWithoutMoviesInput, GenreUncheckedCreateWithoutMoviesInput>
  }

  export type GenreUpdateWithWhereUniqueWithoutMoviesInput = {
    where: GenreWhereUniqueInput
    data: XOR<GenreUpdateWithoutMoviesInput, GenreUncheckedUpdateWithoutMoviesInput>
  }

  export type GenreUpdateManyWithWhereWithoutMoviesInput = {
    where: GenreScalarWhereInput
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyWithoutMoviesInput>
  }

  export type GenreScalarWhereInput = {
    AND?: Enumerable<GenreScalarWhereInput>
    OR?: Enumerable<GenreScalarWhereInput>
    NOT?: Enumerable<GenreScalarWhereInput>
    id?: StringFilter<"Genre"> | string
    name?: StringFilter<"Genre"> | string
    info?: StringFilter<"Genre"> | string
    created?: DateTimeFilter<"Genre"> | Date | string
    updated?: DateTimeFilter<"Genre"> | Date | string
  }

  export type TagUpsertWithWhereUniqueWithoutMoviesInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutMoviesInput, TagUncheckedUpdateWithoutMoviesInput>
    create: XOR<TagCreateWithoutMoviesInput, TagUncheckedCreateWithoutMoviesInput>
  }

  export type TagUpdateWithWhereUniqueWithoutMoviesInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutMoviesInput, TagUncheckedUpdateWithoutMoviesInput>
  }

  export type TagUpdateManyWithWhereWithoutMoviesInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutMoviesInput>
  }

  export type TagScalarWhereInput = {
    AND?: Enumerable<TagScalarWhereInput>
    OR?: Enumerable<TagScalarWhereInput>
    NOT?: Enumerable<TagScalarWhereInput>
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    created?: DateTimeFilter<"Tag"> | Date | string
    updated?: DateTimeFilter<"Tag"> | Date | string
  }

  export type MetaInfoUpsertWithoutMovieInput = {
    update: XOR<MetaInfoUpdateWithoutMovieInput, MetaInfoUncheckedUpdateWithoutMovieInput>
    create: XOR<MetaInfoCreateWithoutMovieInput, MetaInfoUncheckedCreateWithoutMovieInput>
    where?: MetaInfoWhereInput
  }

  export type MetaInfoUpdateToOneWithWhereWithoutMovieInput = {
    where?: MetaInfoWhereInput
    data: XOR<MetaInfoUpdateWithoutMovieInput, MetaInfoUncheckedUpdateWithoutMovieInput>
  }

  export type MetaInfoUpdateWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    movieId?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    poster?: PosterUpdateManyWithoutMetaInfoNestedInput
  }

  export type MetaInfoUncheckedUpdateWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    movieId?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    poster?: PosterUncheckedUpdateManyWithoutMetaInfoNestedInput
  }

  export type ProfileUpsertWithWhereUniqueWithoutLovedMoviesInput = {
    where: ProfileWhereUniqueInput
    update: XOR<ProfileUpdateWithoutLovedMoviesInput, ProfileUncheckedUpdateWithoutLovedMoviesInput>
    create: XOR<ProfileCreateWithoutLovedMoviesInput, ProfileUncheckedCreateWithoutLovedMoviesInput>
  }

  export type ProfileUpdateWithWhereUniqueWithoutLovedMoviesInput = {
    where: ProfileWhereUniqueInput
    data: XOR<ProfileUpdateWithoutLovedMoviesInput, ProfileUncheckedUpdateWithoutLovedMoviesInput>
  }

  export type ProfileUpdateManyWithWhereWithoutLovedMoviesInput = {
    where: ProfileScalarWhereInput
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyWithoutLovedMoviesInput>
  }

  export type ProfileScalarWhereInput = {
    AND?: Enumerable<ProfileScalarWhereInput>
    OR?: Enumerable<ProfileScalarWhereInput>
    NOT?: Enumerable<ProfileScalarWhereInput>
    id?: StringFilter<"Profile"> | string
    phoneNumber?: StringFilter<"Profile"> | string
    firstname?: StringFilter<"Profile"> | string
    lastname?: StringFilter<"Profile"> | string
    created?: DateTimeFilter<"Profile"> | Date | string
    updated?: DateTimeFilter<"Profile"> | Date | string
    themeId?: BigIntFilter<"Profile"> | bigint | number
    userId?: StringFilter<"Profile"> | string
  }

  export type PosterCreateWithoutMetaInfoInput = {
    id?: string
    imgUrl: string
  }

  export type PosterUncheckedCreateWithoutMetaInfoInput = {
    id?: string
    imgUrl: string
  }

  export type PosterCreateOrConnectWithoutMetaInfoInput = {
    where: PosterWhereUniqueInput
    create: XOR<PosterCreateWithoutMetaInfoInput, PosterUncheckedCreateWithoutMetaInfoInput>
  }

  export type PosterCreateManyMetaInfoInputEnvelope = {
    data: Enumerable<PosterCreateManyMetaInfoInput>
    skipDuplicates?: boolean
  }

  export type MovieCreateWithoutInfoInput = {
    movieId?: string
    title: string
    description?: string | null
    length?: number | null
    released?: Date | string | null
    available?: Date | string | null
    created?: Date | string
    updated?: Date | string
    genre?: GenreCreateNestedManyWithoutMoviesInput
    tags?: TagCreateNestedManyWithoutMoviesInput
    profile?: ProfileCreateNestedManyWithoutLovedMoviesInput
  }

  export type MovieUncheckedCreateWithoutInfoInput = {
    movieId?: string
    title: string
    description?: string | null
    length?: number | null
    released?: Date | string | null
    available?: Date | string | null
    created?: Date | string
    updated?: Date | string
    genre?: GenreUncheckedCreateNestedManyWithoutMoviesInput
    tags?: TagUncheckedCreateNestedManyWithoutMoviesInput
    profile?: ProfileUncheckedCreateNestedManyWithoutLovedMoviesInput
  }

  export type MovieCreateOrConnectWithoutInfoInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutInfoInput, MovieUncheckedCreateWithoutInfoInput>
  }

  export type PosterUpsertWithWhereUniqueWithoutMetaInfoInput = {
    where: PosterWhereUniqueInput
    update: XOR<PosterUpdateWithoutMetaInfoInput, PosterUncheckedUpdateWithoutMetaInfoInput>
    create: XOR<PosterCreateWithoutMetaInfoInput, PosterUncheckedCreateWithoutMetaInfoInput>
  }

  export type PosterUpdateWithWhereUniqueWithoutMetaInfoInput = {
    where: PosterWhereUniqueInput
    data: XOR<PosterUpdateWithoutMetaInfoInput, PosterUncheckedUpdateWithoutMetaInfoInput>
  }

  export type PosterUpdateManyWithWhereWithoutMetaInfoInput = {
    where: PosterScalarWhereInput
    data: XOR<PosterUpdateManyMutationInput, PosterUncheckedUpdateManyWithoutMetaInfoInput>
  }

  export type PosterScalarWhereInput = {
    AND?: Enumerable<PosterScalarWhereInput>
    OR?: Enumerable<PosterScalarWhereInput>
    NOT?: Enumerable<PosterScalarWhereInput>
    id?: StringFilter<"Poster"> | string
    imgUrl?: StringFilter<"Poster"> | string
    metaInfoId?: StringNullableFilter<"Poster"> | string | null
  }

  export type MovieUpsertWithoutInfoInput = {
    update: XOR<MovieUpdateWithoutInfoInput, MovieUncheckedUpdateWithoutInfoInput>
    create: XOR<MovieCreateWithoutInfoInput, MovieUncheckedCreateWithoutInfoInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutInfoInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutInfoInput, MovieUncheckedUpdateWithoutInfoInput>
  }

  export type MovieUpdateWithoutInfoInput = {
    movieId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableIntFieldUpdateOperationsInput | number | null
    released?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    available?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    genre?: GenreUpdateManyWithoutMoviesNestedInput
    tags?: TagUpdateManyWithoutMoviesNestedInput
    profile?: ProfileUpdateManyWithoutLovedMoviesNestedInput
  }

  export type MovieUncheckedUpdateWithoutInfoInput = {
    movieId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableIntFieldUpdateOperationsInput | number | null
    released?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    available?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    genre?: GenreUncheckedUpdateManyWithoutMoviesNestedInput
    tags?: TagUncheckedUpdateManyWithoutMoviesNestedInput
    profile?: ProfileUncheckedUpdateManyWithoutLovedMoviesNestedInput
  }

  export type MovieCreateWithoutGenreInput = {
    movieId?: string
    title: string
    description?: string | null
    length?: number | null
    released?: Date | string | null
    available?: Date | string | null
    created?: Date | string
    updated?: Date | string
    tags?: TagCreateNestedManyWithoutMoviesInput
    info: MetaInfoCreateNestedOneWithoutMovieInput
    profile?: ProfileCreateNestedManyWithoutLovedMoviesInput
  }

  export type MovieUncheckedCreateWithoutGenreInput = {
    movieId?: string
    title: string
    description?: string | null
    length?: number | null
    released?: Date | string | null
    available?: Date | string | null
    infoId: string
    created?: Date | string
    updated?: Date | string
    tags?: TagUncheckedCreateNestedManyWithoutMoviesInput
    profile?: ProfileUncheckedCreateNestedManyWithoutLovedMoviesInput
  }

  export type MovieCreateOrConnectWithoutGenreInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutGenreInput, MovieUncheckedCreateWithoutGenreInput>
  }

  export type ProfileCreateWithoutLovedCategoriesInput = {
    id?: string
    phoneNumber: string
    firstname: string
    lastname: string
    created?: Date | string
    updated?: Date | string
    lovedMovies?: MovieCreateNestedManyWithoutProfileInput
    usrTheme: ThemeCreateNestedOneWithoutUserPrefInput
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutLovedCategoriesInput = {
    id?: string
    phoneNumber: string
    firstname: string
    lastname: string
    created?: Date | string
    updated?: Date | string
    themeId: bigint | number
    userId: string
    lovedMovies?: MovieUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutLovedCategoriesInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutLovedCategoriesInput, ProfileUncheckedCreateWithoutLovedCategoriesInput>
  }

  export type MovieUpsertWithWhereUniqueWithoutGenreInput = {
    where: MovieWhereUniqueInput
    update: XOR<MovieUpdateWithoutGenreInput, MovieUncheckedUpdateWithoutGenreInput>
    create: XOR<MovieCreateWithoutGenreInput, MovieUncheckedCreateWithoutGenreInput>
  }

  export type MovieUpdateWithWhereUniqueWithoutGenreInput = {
    where: MovieWhereUniqueInput
    data: XOR<MovieUpdateWithoutGenreInput, MovieUncheckedUpdateWithoutGenreInput>
  }

  export type MovieUpdateManyWithWhereWithoutGenreInput = {
    where: MovieScalarWhereInput
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyWithoutGenreInput>
  }

  export type MovieScalarWhereInput = {
    AND?: Enumerable<MovieScalarWhereInput>
    OR?: Enumerable<MovieScalarWhereInput>
    NOT?: Enumerable<MovieScalarWhereInput>
    movieId?: StringFilter<"Movie"> | string
    title?: StringFilter<"Movie"> | string
    description?: StringNullableFilter<"Movie"> | string | null
    length?: IntNullableFilter<"Movie"> | number | null
    released?: DateTimeNullableFilter<"Movie"> | Date | string | null
    available?: DateTimeNullableFilter<"Movie"> | Date | string | null
    infoId?: StringFilter<"Movie"> | string
    created?: DateTimeFilter<"Movie"> | Date | string
    updated?: DateTimeFilter<"Movie"> | Date | string
  }

  export type ProfileUpsertWithWhereUniqueWithoutLovedCategoriesInput = {
    where: ProfileWhereUniqueInput
    update: XOR<ProfileUpdateWithoutLovedCategoriesInput, ProfileUncheckedUpdateWithoutLovedCategoriesInput>
    create: XOR<ProfileCreateWithoutLovedCategoriesInput, ProfileUncheckedCreateWithoutLovedCategoriesInput>
  }

  export type ProfileUpdateWithWhereUniqueWithoutLovedCategoriesInput = {
    where: ProfileWhereUniqueInput
    data: XOR<ProfileUpdateWithoutLovedCategoriesInput, ProfileUncheckedUpdateWithoutLovedCategoriesInput>
  }

  export type ProfileUpdateManyWithWhereWithoutLovedCategoriesInput = {
    where: ProfileScalarWhereInput
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyWithoutLovedCategoriesInput>
  }

  export type MovieCreateWithoutTagsInput = {
    movieId?: string
    title: string
    description?: string | null
    length?: number | null
    released?: Date | string | null
    available?: Date | string | null
    created?: Date | string
    updated?: Date | string
    genre?: GenreCreateNestedManyWithoutMoviesInput
    info: MetaInfoCreateNestedOneWithoutMovieInput
    profile?: ProfileCreateNestedManyWithoutLovedMoviesInput
  }

  export type MovieUncheckedCreateWithoutTagsInput = {
    movieId?: string
    title: string
    description?: string | null
    length?: number | null
    released?: Date | string | null
    available?: Date | string | null
    infoId: string
    created?: Date | string
    updated?: Date | string
    genre?: GenreUncheckedCreateNestedManyWithoutMoviesInput
    profile?: ProfileUncheckedCreateNestedManyWithoutLovedMoviesInput
  }

  export type MovieCreateOrConnectWithoutTagsInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutTagsInput, MovieUncheckedCreateWithoutTagsInput>
  }

  export type MovieUpsertWithWhereUniqueWithoutTagsInput = {
    where: MovieWhereUniqueInput
    update: XOR<MovieUpdateWithoutTagsInput, MovieUncheckedUpdateWithoutTagsInput>
    create: XOR<MovieCreateWithoutTagsInput, MovieUncheckedCreateWithoutTagsInput>
  }

  export type MovieUpdateWithWhereUniqueWithoutTagsInput = {
    where: MovieWhereUniqueInput
    data: XOR<MovieUpdateWithoutTagsInput, MovieUncheckedUpdateWithoutTagsInput>
  }

  export type MovieUpdateManyWithWhereWithoutTagsInput = {
    where: MovieScalarWhereInput
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyWithoutTagsInput>
  }

  export type MetaInfoCreateWithoutPosterInput = {
    id?: string
    title: string
    description: string
    movieId: string
    created?: Date | string
    updated?: Date | string
    Movie?: MovieCreateNestedOneWithoutInfoInput
  }

  export type MetaInfoUncheckedCreateWithoutPosterInput = {
    id?: string
    title: string
    description: string
    movieId: string
    created?: Date | string
    updated?: Date | string
    Movie?: MovieUncheckedCreateNestedOneWithoutInfoInput
  }

  export type MetaInfoCreateOrConnectWithoutPosterInput = {
    where: MetaInfoWhereUniqueInput
    create: XOR<MetaInfoCreateWithoutPosterInput, MetaInfoUncheckedCreateWithoutPosterInput>
  }

  export type MetaInfoUpsertWithoutPosterInput = {
    update: XOR<MetaInfoUpdateWithoutPosterInput, MetaInfoUncheckedUpdateWithoutPosterInput>
    create: XOR<MetaInfoCreateWithoutPosterInput, MetaInfoUncheckedCreateWithoutPosterInput>
    where?: MetaInfoWhereInput
  }

  export type MetaInfoUpdateToOneWithWhereWithoutPosterInput = {
    where?: MetaInfoWhereInput
    data: XOR<MetaInfoUpdateWithoutPosterInput, MetaInfoUncheckedUpdateWithoutPosterInput>
  }

  export type MetaInfoUpdateWithoutPosterInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    movieId?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    Movie?: MovieUpdateOneWithoutInfoNestedInput
  }

  export type MetaInfoUncheckedUpdateWithoutPosterInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    movieId?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    Movie?: MovieUncheckedUpdateOneWithoutInfoNestedInput
  }

  export type ProfileCreateWithoutUserInput = {
    id?: string
    phoneNumber: string
    firstname: string
    lastname: string
    created?: Date | string
    updated?: Date | string
    lovedMovies?: MovieCreateNestedManyWithoutProfileInput
    lovedCategories?: GenreCreateNestedManyWithoutProfileInput
    usrTheme: ThemeCreateNestedOneWithoutUserPrefInput
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: string
    phoneNumber: string
    firstname: string
    lastname: string
    created?: Date | string
    updated?: Date | string
    themeId: bigint | number
    lovedMovies?: MovieUncheckedCreateNestedManyWithoutProfileInput
    lovedCategories?: GenreUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type ProfileCreateManyUserInputEnvelope = {
    data: Enumerable<ProfileCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithWhereUniqueWithoutUserInput = {
    where: ProfileWhereUniqueInput
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type ProfileUpdateWithWhereUniqueWithoutUserInput = {
    where: ProfileWhereUniqueInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateManyWithWhereWithoutUserInput = {
    where: ProfileScalarWhereInput
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyWithoutUserInput>
  }

  export type MovieCreateWithoutProfileInput = {
    movieId?: string
    title: string
    description?: string | null
    length?: number | null
    released?: Date | string | null
    available?: Date | string | null
    created?: Date | string
    updated?: Date | string
    genre?: GenreCreateNestedManyWithoutMoviesInput
    tags?: TagCreateNestedManyWithoutMoviesInput
    info: MetaInfoCreateNestedOneWithoutMovieInput
  }

  export type MovieUncheckedCreateWithoutProfileInput = {
    movieId?: string
    title: string
    description?: string | null
    length?: number | null
    released?: Date | string | null
    available?: Date | string | null
    infoId: string
    created?: Date | string
    updated?: Date | string
    genre?: GenreUncheckedCreateNestedManyWithoutMoviesInput
    tags?: TagUncheckedCreateNestedManyWithoutMoviesInput
  }

  export type MovieCreateOrConnectWithoutProfileInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutProfileInput, MovieUncheckedCreateWithoutProfileInput>
  }

  export type GenreCreateWithoutProfileInput = {
    id?: string
    name: string
    info: string
    created?: Date | string
    updated?: Date | string
    movies?: MovieCreateNestedManyWithoutGenreInput
  }

  export type GenreUncheckedCreateWithoutProfileInput = {
    id?: string
    name: string
    info: string
    created?: Date | string
    updated?: Date | string
    movies?: MovieUncheckedCreateNestedManyWithoutGenreInput
  }

  export type GenreCreateOrConnectWithoutProfileInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutProfileInput, GenreUncheckedCreateWithoutProfileInput>
  }

  export type ThemeCreateWithoutUserPrefInput = {
    id?: bigint | number
    themeName: string
    themeColor: string
    created?: Date | string
    updated?: Date | string
  }

  export type ThemeUncheckedCreateWithoutUserPrefInput = {
    id?: bigint | number
    themeName: string
    themeColor: string
    created?: Date | string
    updated?: Date | string
  }

  export type ThemeCreateOrConnectWithoutUserPrefInput = {
    where: ThemeWhereUniqueInput
    create: XOR<ThemeCreateWithoutUserPrefInput, ThemeUncheckedCreateWithoutUserPrefInput>
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    userEmail: string
    created?: Date | string
    updated?: Date | string
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    userEmail: string
    created?: Date | string
    updated?: Date | string
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type MovieUpsertWithWhereUniqueWithoutProfileInput = {
    where: MovieWhereUniqueInput
    update: XOR<MovieUpdateWithoutProfileInput, MovieUncheckedUpdateWithoutProfileInput>
    create: XOR<MovieCreateWithoutProfileInput, MovieUncheckedCreateWithoutProfileInput>
  }

  export type MovieUpdateWithWhereUniqueWithoutProfileInput = {
    where: MovieWhereUniqueInput
    data: XOR<MovieUpdateWithoutProfileInput, MovieUncheckedUpdateWithoutProfileInput>
  }

  export type MovieUpdateManyWithWhereWithoutProfileInput = {
    where: MovieScalarWhereInput
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyWithoutProfileInput>
  }

  export type GenreUpsertWithWhereUniqueWithoutProfileInput = {
    where: GenreWhereUniqueInput
    update: XOR<GenreUpdateWithoutProfileInput, GenreUncheckedUpdateWithoutProfileInput>
    create: XOR<GenreCreateWithoutProfileInput, GenreUncheckedCreateWithoutProfileInput>
  }

  export type GenreUpdateWithWhereUniqueWithoutProfileInput = {
    where: GenreWhereUniqueInput
    data: XOR<GenreUpdateWithoutProfileInput, GenreUncheckedUpdateWithoutProfileInput>
  }

  export type GenreUpdateManyWithWhereWithoutProfileInput = {
    where: GenreScalarWhereInput
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyWithoutProfileInput>
  }

  export type ThemeUpsertWithoutUserPrefInput = {
    update: XOR<ThemeUpdateWithoutUserPrefInput, ThemeUncheckedUpdateWithoutUserPrefInput>
    create: XOR<ThemeCreateWithoutUserPrefInput, ThemeUncheckedCreateWithoutUserPrefInput>
    where?: ThemeWhereInput
  }

  export type ThemeUpdateToOneWithWhereWithoutUserPrefInput = {
    where?: ThemeWhereInput
    data: XOR<ThemeUpdateWithoutUserPrefInput, ThemeUncheckedUpdateWithoutUserPrefInput>
  }

  export type ThemeUpdateWithoutUserPrefInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    themeName?: StringFieldUpdateOperationsInput | string
    themeColor?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThemeUncheckedUpdateWithoutUserPrefInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    themeName?: StringFieldUpdateOperationsInput | string
    themeColor?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateWithoutUsrThemeInput = {
    id?: string
    phoneNumber: string
    firstname: string
    lastname: string
    created?: Date | string
    updated?: Date | string
    lovedMovies?: MovieCreateNestedManyWithoutProfileInput
    lovedCategories?: GenreCreateNestedManyWithoutProfileInput
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutUsrThemeInput = {
    id?: string
    phoneNumber: string
    firstname: string
    lastname: string
    created?: Date | string
    updated?: Date | string
    userId: string
    lovedMovies?: MovieUncheckedCreateNestedManyWithoutProfileInput
    lovedCategories?: GenreUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutUsrThemeInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUsrThemeInput, ProfileUncheckedCreateWithoutUsrThemeInput>
  }

  export type ProfileCreateManyUsrThemeInputEnvelope = {
    data: Enumerable<ProfileCreateManyUsrThemeInput>
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithWhereUniqueWithoutUsrThemeInput = {
    where: ProfileWhereUniqueInput
    update: XOR<ProfileUpdateWithoutUsrThemeInput, ProfileUncheckedUpdateWithoutUsrThemeInput>
    create: XOR<ProfileCreateWithoutUsrThemeInput, ProfileUncheckedCreateWithoutUsrThemeInput>
  }

  export type ProfileUpdateWithWhereUniqueWithoutUsrThemeInput = {
    where: ProfileWhereUniqueInput
    data: XOR<ProfileUpdateWithoutUsrThemeInput, ProfileUncheckedUpdateWithoutUsrThemeInput>
  }

  export type ProfileUpdateManyWithWhereWithoutUsrThemeInput = {
    where: ProfileScalarWhereInput
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyWithoutUsrThemeInput>
  }

  export type GenreUpdateWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    info?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateManyWithoutLovedCategoriesNestedInput
  }

  export type GenreUncheckedUpdateWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    info?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateManyWithoutLovedCategoriesNestedInput
  }

  export type GenreUncheckedUpdateManyWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    info?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUpdateWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateManyWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUpdateWithoutLovedMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    lovedCategories?: GenreUpdateManyWithoutProfileNestedInput
    usrTheme?: ThemeUpdateOneRequiredWithoutUserPrefNestedInput
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutLovedMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    themeId?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: StringFieldUpdateOperationsInput | string
    lovedCategories?: GenreUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateManyWithoutLovedMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    themeId?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PosterCreateManyMetaInfoInput = {
    id?: string
    imgUrl: string
  }

  export type PosterUpdateWithoutMetaInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
  }

  export type PosterUncheckedUpdateWithoutMetaInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
  }

  export type PosterUncheckedUpdateManyWithoutMetaInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
  }

  export type MovieUpdateWithoutGenreInput = {
    movieId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableIntFieldUpdateOperationsInput | number | null
    released?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    available?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUpdateManyWithoutMoviesNestedInput
    info?: MetaInfoUpdateOneRequiredWithoutMovieNestedInput
    profile?: ProfileUpdateManyWithoutLovedMoviesNestedInput
  }

  export type MovieUncheckedUpdateWithoutGenreInput = {
    movieId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableIntFieldUpdateOperationsInput | number | null
    released?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    available?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    infoId?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUncheckedUpdateManyWithoutMoviesNestedInput
    profile?: ProfileUncheckedUpdateManyWithoutLovedMoviesNestedInput
  }

  export type MovieUncheckedUpdateManyWithoutGenreInput = {
    movieId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableIntFieldUpdateOperationsInput | number | null
    released?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    available?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    infoId?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUpdateWithoutLovedCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    lovedMovies?: MovieUpdateManyWithoutProfileNestedInput
    usrTheme?: ThemeUpdateOneRequiredWithoutUserPrefNestedInput
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutLovedCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    themeId?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: StringFieldUpdateOperationsInput | string
    lovedMovies?: MovieUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateManyWithoutLovedCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    themeId?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MovieUpdateWithoutTagsInput = {
    movieId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableIntFieldUpdateOperationsInput | number | null
    released?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    available?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    genre?: GenreUpdateManyWithoutMoviesNestedInput
    info?: MetaInfoUpdateOneRequiredWithoutMovieNestedInput
    profile?: ProfileUpdateManyWithoutLovedMoviesNestedInput
  }

  export type MovieUncheckedUpdateWithoutTagsInput = {
    movieId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableIntFieldUpdateOperationsInput | number | null
    released?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    available?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    infoId?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    genre?: GenreUncheckedUpdateManyWithoutMoviesNestedInput
    profile?: ProfileUncheckedUpdateManyWithoutLovedMoviesNestedInput
  }

  export type MovieUncheckedUpdateManyWithoutTagsInput = {
    movieId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableIntFieldUpdateOperationsInput | number | null
    released?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    available?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    infoId?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateManyUserInput = {
    id?: string
    phoneNumber: string
    firstname: string
    lastname: string
    created?: Date | string
    updated?: Date | string
    themeId: bigint | number
  }

  export type ProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    lovedMovies?: MovieUpdateManyWithoutProfileNestedInput
    lovedCategories?: GenreUpdateManyWithoutProfileNestedInput
    usrTheme?: ThemeUpdateOneRequiredWithoutUserPrefNestedInput
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    themeId?: BigIntFieldUpdateOperationsInput | bigint | number
    lovedMovies?: MovieUncheckedUpdateManyWithoutProfileNestedInput
    lovedCategories?: GenreUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    themeId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type MovieUpdateWithoutProfileInput = {
    movieId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableIntFieldUpdateOperationsInput | number | null
    released?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    available?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    genre?: GenreUpdateManyWithoutMoviesNestedInput
    tags?: TagUpdateManyWithoutMoviesNestedInput
    info?: MetaInfoUpdateOneRequiredWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateWithoutProfileInput = {
    movieId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableIntFieldUpdateOperationsInput | number | null
    released?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    available?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    infoId?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    genre?: GenreUncheckedUpdateManyWithoutMoviesNestedInput
    tags?: TagUncheckedUpdateManyWithoutMoviesNestedInput
  }

  export type MovieUncheckedUpdateManyWithoutProfileInput = {
    movieId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableIntFieldUpdateOperationsInput | number | null
    released?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    available?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    infoId?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenreUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    info?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    movies?: MovieUpdateManyWithoutGenreNestedInput
  }

  export type GenreUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    info?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    movies?: MovieUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type GenreUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    info?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateManyUsrThemeInput = {
    id?: string
    phoneNumber: string
    firstname: string
    lastname: string
    created?: Date | string
    updated?: Date | string
    userId: string
  }

  export type ProfileUpdateWithoutUsrThemeInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    lovedMovies?: MovieUpdateManyWithoutProfileNestedInput
    lovedCategories?: GenreUpdateManyWithoutProfileNestedInput
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutUsrThemeInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    lovedMovies?: MovieUncheckedUpdateManyWithoutProfileNestedInput
    lovedCategories?: GenreUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateManyWithoutUsrThemeInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}