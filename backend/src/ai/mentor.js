/**
 * Mock AI Mentor execution
 */
export async function askMentor(query, context) {
  // Simulate calling an LLM
  return `As your AI Mentor, I suggest prioritizing the most critical tasks first. Based on the project context: ${context.substring(0, 100)}... I'd advise focusing on the architecture immediately.`;
}
