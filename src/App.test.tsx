export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getPosts(): Promise<Post[]> {
  const resp = await fetch('${BASE_URL}/posts');

  if (!resp.ok) {
    throw new Error("Error al consultar la API");
  }

  return resp.json();
}