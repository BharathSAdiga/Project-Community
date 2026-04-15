export default function WorkspaceTab() {
  return (
    <div className="space-y-6">
      {/* AI Summary */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-5">
        <h3 className="text-sm font-bold text-indigo-700 mb-2">🧠 AI-Generated Summary</h3>
        <p className="text-sm text-gray-700">
          The project is 65% complete. 3 tasks are in progress and 2 are blocked. 
          The team decided to use PostgreSQL over MongoDB for better relational queries.
          Sprint deadline is April 20th.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Decisions */}
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h4 className="text-sm font-semibold text-gray-800 mb-3">📌 Key Decisions</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">•</span> Use REST API instead of GraphQL</li>
            <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">•</span> Tailwind CSS for styling</li>
            <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">•</span> Deploy on AWS ECS</li>
          </ul>
        </div>

        {/* Deadlines */}
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h4 className="text-sm font-semibold text-gray-800 mb-3">📅 Upcoming Deadlines</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center justify-between"><span>API endpoints ready</span><span className="text-xs text-amber-600 font-medium">Apr 18</span></li>
            <li className="flex items-center justify-between"><span>Frontend wireframes</span><span className="text-xs text-red-500 font-medium">Apr 16</span></li>
            <li className="flex items-center justify-between"><span>Sprint review</span><span className="text-xs text-gray-400 font-medium">Apr 20</span></li>
          </ul>
        </div>

        {/* Tasks from Workspace */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 md:col-span-2">
          <h4 className="text-sm font-semibold text-gray-800 mb-3">📋 Workspace Tasks</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {['Set up CI/CD pipeline', 'Write API documentation', 'Code review for auth module'].map((task, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700">{task}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
