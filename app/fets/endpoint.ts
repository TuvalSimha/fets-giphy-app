import { client } from "./giphy-client";

export async function getRandomGif() {
  const response = await client["/gifs/random"].get({
    query: {
      api_key: process.env.GIPHY_API_KEY as string,
    },
  });
  return response.json();
}
