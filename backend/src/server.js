import dotenv from 'dotenv'

import app from './app.js'
import { connectDatabase } from './config/db.js'

dotenv.config()

const PORT = Number(process.env.PORT) || 5000

const startServer = async () => {
  try {
    await connectDatabase()

    app.listen(PORT, () => {
      console.info(`Backend server running on http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error('Failed to start backend server.', error)
    process.exit(1)
  }
}

startServer()
