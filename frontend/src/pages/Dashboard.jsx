import { Link } from 'react-router-dom'

const stats = [
  { label: 'Active Projects', value: 4, color: 'bg-indigo-500' },
  { label: 'Pending Tasks', value: 12, color: 'bg-amber-500' },
  { label: 'Team Members', value: 8, color: 'bg-emerald-500' },
  { label: 'AI Queries Today', value: 23, color: 'bg-purple-500' },
]

const recentProjects = [
  { id: '1', name: 'E-Commerce Platform', status: 'In Progress', tasks: 8, progress: 65 },
  { id: '2', name: 'Mobile App MVP', status: 'Planning', tasks: 3, progress: 20 },
  { id: '3', name: 'Data Pipeline', status: 'In Progress', tasks: 14, progress: 45 },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
        <p className="text-sm text-gray-500 mt-1">Overview of your projects and activity</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(stat => (
          <div key={stat.label} className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center text-white font-bold text-sm`}>
                {stat.value}
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Projects */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-base font-semibold text-gray-800">Recent Projects</h3>
          <Link to="/projects" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">View All →</Link>
        </div>
        <div className="divide-y divide-gray-100">
          {recentProjects.map(proj => (
            <Link to={`/projects/${proj.id}`} key={proj.id} className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors">
              <div>
                <p className="text-sm font-medium text-gray-900">{proj.name}</p>
                <p className="text-xs text-gray-500">{proj.tasks} tasks · {proj.status}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-500 h-2 rounded-full" style={{ width: `${proj.progress}%` }} />
                </div>
                <span className="text-xs text-gray-500 w-10 text-right">{proj.progress}%</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* AI Insight Card */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
        <h3 className="text-lg font-bold">🧠 AI Mentor Insight</h3>
        <p className="text-sm mt-2 text-indigo-100">
          Based on your project data, the "E-Commerce Platform" is behind schedule by 2 days.
          Consider reallocating 2 team members from the Data Pipeline project.
        </p>
        <button className="mt-4 px-4 py-2 bg-white text-indigo-600 font-semibold text-sm rounded-lg hover:bg-indigo-50 transition-colors">
          Ask AI Mentor →
        </button>
      </div>
    </div>
  )
}
