import { getStore } from "@netlify/blobs";

export default async (req) => {
  const url = new URL(req.url);
  const week = url.searchParams.get("week");
  const store = getStore("roster");
  const data = await store.get(week);
  return new Response(data || "null");
};
