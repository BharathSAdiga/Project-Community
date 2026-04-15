export default function ProgressTab() {
  const milestones = [
    { label: 'Project Setup', done: true },
    { label: 'Database Design', done: true },
    { label: 'API Development', done: false },
    { label: 'Frontend Build', done: false },
    { label: 'Testing & QA', done: false },
    { label: 'Deployment', done: false },
  ]

  return (
    <div className="space-y-6">
      <h3 className="text-base font-semibold text-gray-800">Project Progress</h3>

      {/* Progress bar */}
      <div>
        <div className="flex justify-between text-sm text-gray-500 mb-1">
          <span>Overall</span>
          <span>33%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div className="bg-indigo-500 h-3 rounded-full transition-all" style={{ width: '33%' }} />
        </div>
      </div>

      {/* Milestones */}
      <div className="space-y-3">
        {milestones.map((m, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
              m.done ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'
            }`}>
              {m.done ? '✓' : i + 1}
            </div>
            <span className={`text-sm ${m.done ? 'text-gray-400 line-through' : 'text-gray-800 font-medium'}`}>{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
