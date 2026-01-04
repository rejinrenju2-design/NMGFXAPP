const { getStore } = require("@netlify/blobs");

exports.handler = async function(event) {
  const params = new URLSearchParams(event.queryStringParameters || {});
  const week = params.get("week");

  const store = getStore("roster");
  const data = await store.get(week);

  return {
    statusCode: 200,
    body: data || "null"
  };
};
