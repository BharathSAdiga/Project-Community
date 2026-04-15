# Project Community OS 🚀

**Project Community OS** is an AI-Powered Project Execution Platform designed to streamline project management, team collaboration, and codebase intelligence using a Retrieval-Augmented Generation (RAG) backend.

## 🌟 Key Features

* **AI Mentor & Assistant**: Context-aware AI responses based on your project's historical chat, active tasks, and specific codebase context.
* **Workspace Auto-Summaries**: AI automatically condenses decisions, deadlines, and tasks based on ongoing project chats (powered by Pinecone Vector DB).
* **Smart Dashboard**: Top-down view of team progress, outstanding tasks, and project milestones.
* **Modern UI**: Polished wireframe designs built with React, Vite, and Tailwind CSS v4.
* **Full-Stack Architecture**: Cleanly separated MERN-stack architecture (MongoDB, Express, React, Node.js) with specialized RAG AI modules.

## 🧱 Tech Stack

* **Frontend**: React 19, Vite, React Router DOM, Tailwind CSS v4
* **Backend**: Node.js, Express, Mongoose (MongoDB)
* **AI & RAG Pipeline**: OpenAI Embeddings API, Pinecone/Chroma DB

## 📂 Project Structure

```text
├── frontend/                  # React + Vite application
│   ├── src/
│   │   ├── components/        # Reusable UI pieces (Tabs, Topbar, Sidebar)
│   │   ├── layouts/           # Page layouts (e.g., DashboardLayout)
│   │   ├── pages/             # Route-level components
│   │   ├── services/          # API hooks bridging frontend to backend
│   │   └── App.jsx            # Main React Router configuration
│   └── tailwind.config.js
│
├── backend/                   # Node.js + Express application
│   ├── src/
│   │   ├── ai/                # AI logic implementations (Mentor, Code Helper, Task Gen)
│   │   ├── config/            # DB configuration and App Environments (.env wrapper)
│   │   ├── controllers/       # HTTP route handlers (aiController.js)
│   │   ├── models/            # Mongoose Schemas (User, Project, Task, Message)
│   │   ├── rag/               # Vector Ingestion and Retrieval Pipeline (Embedder, VectorStore)
│   │   ├── routes/            # Express route endpoints
│   │   └── index.js           # Express App Entry Point
│   └── .env
```

## 🚀 Getting Started

### Prerequisites
* Node.js (v18+)
* MongoDB (running locally or accessible via URI)
* [Optional for AI Features] OpenAI API Key & Pinecone API Key

### Backend Setup
1. Open a terminal and navigate to the backend:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Update environment variables in `backend/.env`:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/community-os
   OPENAI_API_KEY=your-openai-api-key-here
   PINECONE_API_KEY=your-pinecone-api-key-here
   PINECONE_INDEX=community-os-index
   ```
4. Start the development server:
   ```bash
   npm run dev
   # Server will run on http://localhost:5000
   ```

### Frontend Setup
1. Open a new terminal and navigate to the frontend:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite dev server:
   ```bash
   npm run dev
   # App will be accessible at http://localhost:5174 (or 5173 depending on port availability)
   ```

## 🧠 Using the AI Details

The logic for querying and storing AI embeddings lives inside `backend/src/rag/`. Currently, it runs in "mock" mode to safely enable UI prototyping without racking up API charges. 
When ready to connect your live OpenAI account:
1. Navigate to `backend/src/rag/embedder.js` and implement the `openai.embeddings.create` logic.
2. Navigate to `backend/src/rag/vectorStore.js` and configure the Pinecone client insertion endpoints.

---
*Built as a scalable Startup MVP Architecture.*
