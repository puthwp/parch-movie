# 📺 READ ME
## Database ER Diagram
![parch-movie-db-erd](https://github.com/puthwp/parch-movie/blob/develop/src/Parch-movie-erd.png?raw=true)
## Tools
* Node js
* Next js
* Prisma js
* CockroachDB
> *Warning*
Need Internet connection to display all data due to using online severless CockroachDB
---
## Step ##
### 🔆 Easy way
Just clone and run `. ./setup.sh`
### - OR -
Follow these steps below
### ⚙️ Install NVM ###
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
cd parch-movie && npm install
```
*important to copy dbenv to .env in root folder*

`cp ./src/dbenv ./.env`

then run and check the result 🤞🏼
```
npx prisma generate
npx prisma migrate dev
```
or if you got the fail result 
you can try this command to seed the database ✌🏼
```
npx prisma db seed
```

### Start Server ###
```
npm run dev
```
then cmd(control) + click at the link in terminal to redirect to localhost:3000 (should be)

## 📋 Result API Endpoints
All movies
` ./api/movies `
All movies in category
` ./api/category/{CATEGORY_NAME} `
All movies in Tag
` ./api/tag/{TAG_NAME} `
All users (not supposed to have this api 🤭)
` ./api/users `
User Detail
` ./api/user/{USER_UID}`

## ✋🏼 FAQ
- No data display
> ```
> npx prisma migrate dev
> ```
> or
> ```
> npx prisma db seed
> ```
> 
- Got 'Request is not compatible'
> All api stricted to GET http method. Please use simple web browser to display all Rest API data in JSON


