// Server-side route: GET <your-site>/api/recipes
// Reads published Recipes from the Webflow CMS. The API token stays on the
// server and is never sent to the browser.
import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const prerender = false;
export const config = { runtime: 'edge' };

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      // Cache for 60 s at the edge so the CMS isn't hit on every page view.
      'Cache-Control': status === 200 ? 'public, max-age=60' : 'no-store',
    },
  });

export const GET: APIRoute = async () => {
  const token = (env as any).WEBFLOW_API_TOKEN as string | undefined;
  const collectionId = (env as any).COLLECTION_ID as string | undefined;

  if (!token || !collectionId) {
    return json(
      { error: 'Missing WEBFLOW_API_TOKEN or COLLECTION_ID environment variable in Webflow Cloud.' },
      500
    );
  }

  const res = await fetch(
    `https://api.webflow.com/v2/collections/${collectionId}/items/live?limit=100`,
    { headers: { Authorization: `Bearer ${token}`, accept: 'application/json' } }
  );

  if (!res.ok) {
    const detail = await res.text();
    return json({ error: `Webflow API returned ${res.status}`, detail }, 502);
  }

  const data = (await res.json()) as { items?: Array<{ id: string; fieldData: Record<string, unknown> }> };

  const items = (data.items ?? []).map((item) => ({
    id: item.id,
    ...item.fieldData,
  }));

  return json({ items });
};
