const API_BASE = 'http://localhost:5000';

export async function ragQuery(query, projectId) {
  const res = await fetch(`${API_BASE}/ai/rag-query`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, projectId }),
  });
  return res.json();
}

export async function embedChat(messages, projectId) {
  const res = await fetch(`${API_BASE}/ai/embed-chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages, projectId }),
  });
  return res.json();
}

export async function getProjectContext(projectId) {
  const res = await fetch(`${API_BASE}/ai/context/${projectId}`);
  return res.json();
}
