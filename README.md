#Picture App
The website is built based on pinterest website, users can register and manage personal accounts, post and chat online.
Technology: NextJS, Docker, Prisma, socket.io,..

# Download and setup
1. start Docker
2. open terminal visual studio code and run 'git clone https://github.com/Anh2208/PictureApp.git'
3. run 'cd PictureApp/frontend'
4. run 'code .'
5.  cd to frontend and run 'npm i'
6. cd to docker folder, run 'docker compose up'
7. cd to frontend and run 'npx prisma migrate dev' and enter a name for the new migration is 'picbu'
8. at docker path, run 'docker compose down'

# Step
1. open terminal, cd to docker folder and run 'docker compose up'
2. open other terminal, cd to frontend folder run 'npx prisma studio'
3. open other terminal, cd to frontend run 'npm run dev'
