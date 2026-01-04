exports.handler = async function(event, context) {
  const week = event.queryStringParameters.week;

  const data = await context.netlify.kv.get(`roster:${week}`);

  return {
    statusCode: 200,
    body: data || "null"
  };
};
