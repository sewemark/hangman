FROM node:lts-alpine as build-stage

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

FROM nginx

RUN mkdir /hangman

COPY --from=0 /app/dist /hangman

COPY nginx.conf /etc/nginx/nginx.conf