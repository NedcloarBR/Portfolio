FROM node:20.6.1-alpine

WORKDIR /app

COPY package.json ./

RUN apk add --no-cache make

COPY . .