# READ ME 🥹 
```
** CockroachDB **
parch-movie-db
IIA_UJxGOPB7SZkdC54GOQ
```

> **Connect [Prisma](https://www.prisma.io/docs/getting-started/quickstart) with [CockroachDB](https://cockroachlabs.cloud/)**
*Run the following command to set the `DATABASE_URL` environment variable to your cluster's connection URL*
```
export DATABASE_URL="postgresql://parch-movie-db:IIA_UJxGOPB7SZkdC54GOQ@parchbased-8326.8nk.gcp-asia-southeast1.cockroachlabs.cloud:26257/parch-movie?sslmode=verify-full"
```
> *Update the [schema.prisma](./schema.prisma) file to look like the following*
```
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "cockroachdb"
  url      = env("DATABASE_URL")
}

model Widget {
  id String @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
}
```

> *Example*
```
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

(async () => {
  try {
    console.log(await prisma.widget.create({ data: { } }));
  } catch (err) {
    console.error("error executing query:", err);
  } finally {
    prisma.$disconnect();
  }
})();
```
---
## Step ##
### Install NVM ###
run in Terminal
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

than 
 ``` 
 echo ‘export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")" 
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"‘ 
>> ~/.zshrc
```
and 
`source ~/.zshrc`

check
`command -v nvm`

### Install Node 18.17.0+ ###
`nvm install 18.17.0`
`nvm use 18`

### Packages Install ###
```
cd parch-movies && npm install
npx prisma generate
npx prisma migrate dev
npx prisma db seed
```

### Start Server ###
```
npm run dev
```
then cmd(control) + click at the link in terminal to redirect to localhost:3000 (should be)

## Result API Endpoints
All movies
` localhost:3000/api/movies `
All movies in category
` localhost:3000/api/category/{CATEGORY_NAME} `
All movies in Tag
` localhost:3000/api/tag/{TAG_NAME} `
All users (not supposed to have this api 🤭)
` localhost:3000/api/users `
User Detail
` localhost:3000/api/user/{USER_UID}`



