import mongoose from 'mongoose'

const getConnectionLabel = (readyState) => {
  switch (readyState) {
    case 0:
      return 'disconnected'
    case 1:
      return 'connected'
    case 2:
      return 'connecting'
    case 3:
      return 'disconnecting'
    default:
      return 'unknown'
  }
}

export const getDatabaseStatus = () => getConnectionLabel(mongoose.connection.readyState)

export const connectDatabase = async () => {
  const mongoUri = process.env.MONGODB_URI

  if (!mongoUri) {
    console.warn('MONGODB_URI is not set. Starting server without a database connection.')
    return null
  }

  mongoose.set('strictQuery', true)

  const connection = await mongoose.connect(mongoUri)
  console.info(`MongoDB connected: ${connection.connection.host}`)

  return connection
}
