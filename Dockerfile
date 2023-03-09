FROM node:16.19.1-alpine3.17

WORKDIR /app

COPY package*.json yarn*.lock ./

RUN npm install

COPY . .

ENTRYPOINT ["node", "app.js"]
