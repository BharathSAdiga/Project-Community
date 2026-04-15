const tasks = [
  { id: 1, title: 'Setup project repository', status: 'Done', priority: 'High', assignee: 'Alice' },
  { id: 2, title: 'Design database schema', status: 'In Progress', priority: 'High', assignee: 'Bob' },
  { id: 3, title: 'Build authentication flow', status: 'To Do', priority: 'Medium', assignee: 'Charlie' },
  { id: 4, title: 'Create REST API endpoints', status: 'To Do', priority: 'High', assignee: 'Alice' },
  { id: 5, title: 'Write unit tests', status: 'To Do', priority: 'Low', assignee: 'Bob' },
]

const statusColors = {
  'Done': 'bg-green-100 text-green-700',
  'In Progress': 'bg-blue-100 text-blue-700',
  'To Do': 'bg-gray-100 text-gray-600',
}

const priorityColors = {
  'High': 'text-red-500',
  'Medium': 'text-amber-500',
  'Low': 'text-gray-400',
}

export default function TasksTab() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-gray-800">Tasks</h3>
        <button className="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">+ Add Task</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 border-b border-gray-200">
              <th className="pb-3 font-medium">Task</th>
              <th className="pb-3 font-medium">Status</th>
              <th className="pb-3 font-medium">Priority</th>
              <th className="pb-3 font-medium">Assignee</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {tasks.map(task => (
              <tr key={task.id} className="hover:bg-gray-50 transition-colors">
                <td className="py-3 text-gray-800 font-medium">{task.title}</td>
                <td className="py-3">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusColors[task.status]}`}>{task.status}</span>
                </td>
                <td className={`py-3 text-xs font-semibold ${priorityColors[task.priority]}`}>● {task.priority}</td>
                <td className="py-3 text-gray-600">{task.assignee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
