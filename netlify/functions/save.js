const { getStore } = require('@netlify/kv');

exports.handler = async (event) => {
  const { week, roster } = JSON.parse(event.body);
  const store = getStore('roster');

  await store.set(week, JSON.stringify(roster));

  return {
    statusCode: 200,
    body: 'ok'
  };
};
