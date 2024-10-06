FROM node:20-alpine


WORKDIR /usr/src/app
COPY constants.js package*.json server.js src docs ./
COPY src ./src
COPY docs ./docs

RUN npm install
RUN npm run docs:generate

EXPOSE 3001

CMD ["node", "server.js"]