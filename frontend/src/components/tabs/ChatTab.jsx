import { useState } from 'react'

const mockMessages = [
  { id: 1, sender: 'Alice', text: 'Hey, I just pushed the auth flow PR.', time: '10:32 AM', isAI: false },
  { id: 2, sender: 'Bob', text: 'Great! I\'ll review it this afternoon.', time: '10:34 AM', isAI: false },
  { id: 3, sender: 'AI Mentor', text: 'Based on your project timeline, the auth flow should be finalized by tomorrow for the sprint to stay on track.', time: '10:35 AM', isAI: true },
]

export default function ChatTab({ projectId }) {
  const [messages, setMessages] = useState(mockMessages)
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return
    setMessages(prev => [...prev, {
      id: prev.length + 1,
      sender: 'You',
      text: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isAI: false,
    }])
    setInput('')
  }

  const handleAskAI = () => {
    setMessages(prev => [...prev, {
      id: prev.length + 1,
      sender: 'AI Mentor',
      text: `[RAG Query] Searching project context for "${input || 'general advice'}"... Here's what I found based on your project history and task data.`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isAI: true,
    }])
    setInput('')
  }

  return (
    <div className="flex flex-col h-96">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-3 mb-4 pr-2">
        {messages.map(msg => (
          <div key={msg.id} className={`flex flex-col ${msg.isAI ? 'items-start' : ''}`}>
            <div className={`max-w-md px-4 py-2.5 rounded-xl text-sm ${
              msg.isAI
                ? 'bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 text-gray-800'
                : 'bg-gray-100 text-gray-800'
            }`}>
              <p className={`text-xs font-semibold mb-1 ${msg.isAI ? 'text-indigo-600' : 'text-gray-500'}`}>
                {msg.isAI ? '🧠 ' : ''}{msg.sender}
              </p>
              <p>{msg.text}</p>
            </div>
            <span className="text-[10px] text-gray-400 mt-1 px-1">{msg.time}</span>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex items-center gap-2 border-t border-gray-200 pt-4">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 px-4 py-2.5 text-sm border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button onClick={handleSend} className="px-4 py-2.5 text-sm bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium">Send</button>
        <button onClick={handleAskAI} className="px-4 py-2.5 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium">🧠 Ask AI</button>
      </div>
    </div>
  )
}
