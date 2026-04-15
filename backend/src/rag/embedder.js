/**
 * Mock embedder function (would use OpenAI embeddings API)
 */
export async function embedQuery(text) {
  // Simulate returning an embedding array
  return new Array(1536).fill(0.1);
}
