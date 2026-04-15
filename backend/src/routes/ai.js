import express from 'express';
import { handleRagQuery, handleEmbedChat, handleGetContext } from '../controllers/aiController.js';

const router = express.Router();

router.post('/rag-query', handleRagQuery);
router.post('/embed-chat', handleEmbedChat);
router.get('/context/:projectId', handleGetContext);

export default router;
