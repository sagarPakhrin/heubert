FROM node:16 AS base

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

WORKDIR /heubert
COPY package.json package-lock.json ./

RUN npm i

ENV NODE_ENV "development"