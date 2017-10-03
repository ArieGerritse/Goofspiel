# Node Skeleton

## Project Setup

1. Create your own empty repo on GitHub
2. Clone this repository (do not fork)
  - Suggestion: When cloning, specify a different folder name that is relevant to your project
3. Remove the git remote: `git remote rm origin`
4. Add a remote for your origin: `git remote add origin <your github repo URL>`
5. Push to the new origin: `git push -u origin master`
6. Verify that the skeleton code now shows up in your repo on GitHub

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Run migrations: `npm run knex migrate:latest`
  - Check the migrations folder to see what gets created in the DB
6. Run the seed: `npm run knex seed:run`
  - Check the seeds file to see what gets seeded in the DB
7. Run the server: `npm run local`
8. Visit `http://localhost:8080/`

## Dependencies

-- body-parser: 1.15.2+
-- cookie-session: 1.3.2+
-- dotenv: 2.0.0+
-- ejs: 2.4.1+
-- express: 4.13.4+
-- knex: 0.11.7+
-- knex-logger: 0.1.0+
-- morgan: 1.7.0+
-- node-sass-middleware :0.9.8+
-- pg: 6.0.2+

## Installation

Run npm install to aquire all the required dependencies.
