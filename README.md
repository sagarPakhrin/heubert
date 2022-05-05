# Heubert

## Techstack

- React
- Nestjs
- Mysql
- Prisma

## Setup Guide

Please follow the following step by step buide to setup the project

The project is setup using [docker](https://docs.docker.com/engine/install/ubuntu/). Make sure to install docker from [here](https://docs.docker.com/engine/install/ubuntu/) and follow the guide below

1. Clone the project

   `git clone git@github.com:sagarPakhrin/heubert.git`  
   `cd heubert`

2. Setup environment variables

   `cp .env.example .env`  
   you can change the values for env variables if you want but the default values works fine for demo

3. Start the development servers

   `docker-compose up -d`

4. Run migrations to setup database tables

   `npm run migrate:dev`

5. Seed database

   `npm run prisma:seed`

6. Visit http://localhost:3000

**You can view graphql schema at http://localhost:5000/graphql**
