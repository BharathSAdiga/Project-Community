import cors from 'cors'
import express from 'express'

import { getDatabaseStatus } from './config/db.js'

const app = express()

app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
  }),
)
app.use(express.json())

app.get('/api/health', (_request, response) => {
  response.json({
    ok: true,
    service: 'project-community-api',
    database: getDatabaseStatus(),
    timestamp: new Date().toISOString(),
  })
})

app.use((_request, response) => {
  response.status(404).json({
    ok: false,
    message: 'Route not found',
  })
})

app.use((error, _request, response, _next) => {
  console.error(error)

  response.status(500).json({
    ok: false,
    message: 'Internal server error',
  })
})

export default app
