FROM node:12-alpine

WORKDIR /app

COPY package.json ./

RUN npm install && npm i -g nodemon

COPY . .

CMD ["nodemon", "-L", "server.js"]

