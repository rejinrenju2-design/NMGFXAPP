import { getStore } from "@netlify/blobs";

export default async (req) => {
  const { week, roster } = JSON.parse(req.body);
  const store = getStore("roster");
  await store.set(week, JSON.stringify(roster));
  return new Response("ok");
};
