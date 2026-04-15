import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import TasksTab from '../components/tabs/TasksTab'
import ChatTab from '../components/tabs/ChatTab'
import WorkspaceTab from '../components/tabs/WorkspaceTab'
import TeamTab from '../components/tabs/TeamTab'
import ProgressTab from '../components/tabs/ProgressTab'

const tabs = ['Tasks', 'Chat', 'Workspace', 'Team', 'Progress']

const projectData = {
  '1': { name: 'E-Commerce Platform', status: 'In Progress' },
  '2': { name: 'Mobile App MVP', status: 'Planning' },
  '3': { name: 'Data Pipeline', status: 'In Progress' },
  '4': { name: 'AI Chatbot', status: 'Review' },
}

export default function ProjectDetail() {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('Tasks')
  const project = projectData[id] || { name: 'Unknown Project', status: 'N/A' }

  const renderTab = () => {
    switch (activeTab) {
      case 'Tasks': return <TasksTab />
      case 'Chat': return <ChatTab projectId={id} />
      case 'Workspace': return <WorkspaceTab />
      case 'Team': return <TeamTab />
      case 'Progress': return <ProgressTab />
      default: return null
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Link to="/projects" className="text-sm text-gray-400 hover:text-indigo-600 transition-colors">← Projects</Link>
        <span className="text-gray-300">/</span>
        <h2 className="text-xl font-bold text-gray-900">{project.name}</h2>
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-100 text-blue-700">{project.status}</span>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="flex border-b border-gray-200">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-3 text-sm font-medium transition-colors border-b-2 ${
                activeTab === tab
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="p-6">
          {renderTab()}
        </div>
      </div>
    </div>
  )
}
