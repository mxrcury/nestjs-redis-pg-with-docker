FROM node:19.9-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

COPY /dist /dist

CMD ["npm", "run", "start:dev"]
