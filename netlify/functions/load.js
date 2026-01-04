const { Client } = require('pg');

exports.handler = async function(event) {
  const week = event.queryStringParameters.week;
  const client = new Client({ connectionString: process.env.DATABASE_URL });
  await client.connect();

  const result = await client.query(
    `SELECT data FROM rosters WHERE week = $1`,
    [week]
  );

  await client.end();

  if (result.rows.length === 0) {
    return { statusCode: 200, body: "null" };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(result.rows[0].data)
  };
};
