const { readFileSync } = require('fs');
const fetch = require('isomorphic-fetch');
const { Client } = require('pg');
require('dotenv').config({ path: './.env.local' });

const config = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  database: 'dealt',
  user: process.env.POSTGRES_USER || 'User',
  password: process.env.POSTGRES_PASSWORD || 'Password'
};
console.log({ config });

const client = new Client(config);

(async () => {
  try {
    await client.connect();
    const response = await fetch('https://randomuser.me/api/?results=42')
    const { results } = await response.json();

    await Promise.all(results.map(async ({ name, picture }) => {
      console.info({ name, picture });
      return await client
        .query('INSERT INTO users(title, firstname, lastname, thumbnail, picture) VALUES($1, $2, $3, $4, $5)', [
        name.title,
        name.first,
        name.last,
        picture.thumbnail,
        picture.large,
      ]);
    }));
    console.log('Users created');
  } catch (error) {
    console.error(error.stack);
    process.exit(1);
  } finally {
    await client.end();
  }
  return;
})();
