const { Client } = require('pg');

exports.handler = async function(event) {
  const { week, roster } = JSON.parse(event.body);
  const client = new Client({ connectionString: process.env.DATABASE_URL });
  await client.connect();

  await client.query(`
    CREATE TABLE IF NOT EXISTS rosters (
      week TEXT PRIMARY KEY,
      data JSONB NOT NULL
    );
  `);

  await client.query(
    `INSERT INTO rosters (week, data)
     VALUES ($1, $2)
     ON CONFLICT (week) DO UPDATE SET data = EXCLUDED.data`,
    [week, roster]
  );

  await client.end();

  return { statusCode: 200, body: "ok" };
};
