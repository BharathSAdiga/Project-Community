/**
 * Mock Task Generator using AI
 */
export async function generateTasks(projectDescription, context) {
  // TODO: Call OpenAI with context from RAG pipeline
  return [
    { title: 'Setup project scaffolding', priority: 'High' },
    { title: 'Design database schema', priority: 'High' },
    { title: 'Build core API routes', priority: 'Medium' },
  ];
}
