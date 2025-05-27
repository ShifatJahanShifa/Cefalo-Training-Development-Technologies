# Knex.js

It is a query builder in Node.js.Because we write SQL query using code and query builder will process it further. To migrate, we need knexfile.

`cmd` 
npx knex init 
npx knex migrate:make init --migrations-directory /migrations
 npx knex migrate:latest --knexfile knexfile.js