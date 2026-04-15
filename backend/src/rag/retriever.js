/**
 * Mock vector search (would use Pinecone or Chroma)
 */
export async function searchVectors(embedding, projectId) {
  return [
    { id: '1', score: 0.95, metadata: { text: 'Project decided to use Tailwind CSS for the frontend UI.' } },
    { id: '2', score: 0.88, metadata: { text: `We need to finalize the wireframes by tomorrow.` } }
  ];
}
