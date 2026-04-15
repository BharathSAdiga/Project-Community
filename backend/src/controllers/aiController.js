import { runRagPipeline } from '../rag/ragPipeline.js';
import { embedQuery } from '../rag/embedder.js';

export const handleRagQuery = async (req, res) => {
  try {
    const { query, projectId } = req.body;
    
    // Calls our orchestrator pipeline
    const answer = await runRagPipeline(query, projectId);
    
    res.status(200).json({ answer, success: true });
  } catch (error) {
    console.error('RAG Query Error:', error);
    res.status(500).json({ error: error.message });
  }
};

export const handleEmbedChat = async (req, res) => {
  try {
    const { messages, projectId } = req.body;
    // 1. Convert messages to a document
    const textToEmbed = messages.map(m => `${m.sender}: ${m.text}`).join('\n');
    
    // 2. Mock generating embedding array
    const embeddingArray = await embedQuery(textToEmbed);
    
    // 3. Mock storing it
    // await insertEmbeddings(embeddingArray, { docType: 'chat', projectId });

    res.status(200).json({ success: true, message: 'Chat embedded successfully.' });
  } catch (error) {
    console.error('Embed Chat Error:', error);
    res.status(500).json({ error: error.message });
  }
};

export const handleGetContext = async (req, res) => {
  try {
    const { projectId } = req.params;
    res.status(200).json({ context: `Retrieved mock contextual data for project ${projectId}` });
  } catch (error) {
    console.error('Context Retrieval Error:', error);
    res.status(500).json({ error: error.message });
  }
};
