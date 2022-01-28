const { readFileSync } = require('fs');
const fetch = require('isomorphic-fetch');
const pgtools = require('pgtools');
const { Client } = require('pg');
require('dotenv').config({ path: './.env.local' });

const database = 'dealt';
const config = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  user: process.env.DB_USER || 'User',
  password: process.env.DB_PASS || 'Password'
};

const tableQuery = readFileSync(__dirname + '/table.sql', 'utf8');

pgtools.dropdb(config, database, async (err, _) => {
  if (err) {
    console.error(err);
    process.exit(-1);
  }

  console.log('Database dropped');
  pgtools.createdb(config, database, async (err, _) => {
    if (err) {
      console.error(err);
      process.exit(-1);
    }
    
    console.log('Database created');
    const client = new Client({ ...config, database });

    try {
      await client.connect();
      await client.query(tableQuery);
      console.log('Table created');

      const response = await fetch('https://randomuser.me/api/?results=42')
      const { results } = await response.json();

      await Promise.all(results.map(async ({ name, picture }) => {
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
    } finally {
      await client.end();
    }
  });
});
