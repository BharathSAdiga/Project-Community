import { Link } from 'react-router-dom'

const projects = [
  { id: '1', name: 'E-Commerce Platform', description: 'Full-stack e-commerce with payment integration', status: 'In Progress', members: 4, tasks: 8, progress: 65 },
  { id: '2', name: 'Mobile App MVP', description: 'Cross-platform mobile app built with React Native', status: 'Planning', members: 3, tasks: 3, progress: 20 },
  { id: '3', name: 'Data Pipeline', description: 'ETL pipeline for analytics dashboard', status: 'In Progress', members: 2, tasks: 14, progress: 45 },
  { id: '4', name: 'AI Chatbot', description: 'RAG-based customer support chatbot', status: 'Review', members: 5, tasks: 6, progress: 90 },
]

const statusColors = {
  'In Progress': 'bg-blue-100 text-blue-700',
  'Planning': 'bg-amber-100 text-amber-700',
  'Review': 'bg-green-100 text-green-700',
}

export default function Projects() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
          <p className="text-sm text-gray-500 mt-1">Manage and monitor all your projects</p>
        </div>
        <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-sm">
          + New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {projects.map(proj => (
          <Link
            to={`/projects/${proj.id}`}
            key={proj.id}
            className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 hover:shadow-md hover:border-indigo-200 transition-all group"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-base font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">{proj.name}</h3>
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusColors[proj.status]}`}>
                {proj.status}
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-4">{proj.description}</p>

            {/* Progress */}
            <div className="mb-3">
              <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                <span>Progress</span>
                <span>{proj.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-indigo-500 h-1.5 rounded-full transition-all" style={{ width: `${proj.progress}%` }} />
              </div>
            </div>

            {/* Meta */}
            <div className="flex items-center justify-between text-xs text-gray-400 pt-2 border-t border-gray-100">
              <span>👥 {proj.members} members</span>
              <span>📋 {proj.tasks} tasks</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
