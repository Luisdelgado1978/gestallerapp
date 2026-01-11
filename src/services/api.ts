// src/services/api.ts

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getPosts(): Promise<Post[]> {
  const resp = await fetch(`${BASE_URL}/posts`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!resp.ok) {
    throw new Error(`HTTPS ${resp.status} - ${resp.statusText}`);
  }

  const data = (await resp.json()) as Post[];
  return data;
}