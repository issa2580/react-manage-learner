FROM node:20-alpine

WORKDIR /src/app

COPY package*.json .

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]

