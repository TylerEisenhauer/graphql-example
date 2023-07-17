FROM node:18.12.1-alpine3.16

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install

COPY . /app

EXPOSE 4000

CMD ["yarn", "start"]