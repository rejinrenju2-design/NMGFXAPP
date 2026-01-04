const { getStore } = require('@netlify/kv');

exports.handler = async (event) => {
  const week = event.queryStringParameters.week;
  const store = getStore('roster');

  const data = await store.get(week);

  return {
    statusCode: 200,
    body: data || 'null'
  };
};
