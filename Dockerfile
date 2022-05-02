FROM node:14 as base

WORKDIR /heubert

COPY package.json package-lock.json ./

RUN npm i

COPY . .
