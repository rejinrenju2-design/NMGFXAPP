exports.handler = async function(event, context) {
  const { week, roster } = JSON.parse(event.body);

  await context.netlify.kv.set(`roster:${week}`, JSON.stringify(roster));

  return {
    statusCode: 200,
    body: "ok"
  };
};
