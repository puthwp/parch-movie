
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
echo ‘export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")" [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"‘ >> ~/.zshrc

source ~/.zshrc
command -v nvm
nvm install 18.17.0
nvm use 18

cd parch-movie && npm install

cp ./src/dbenv ./.env

npx prisma generate
npx prisma migrate dev
npx prisma db seed

npm run dev

open http://localhost:3000/