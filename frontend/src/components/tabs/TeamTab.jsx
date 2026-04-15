const members = [
  { name: 'Alice Johnson', role: 'Lead Developer', avatar: 'A', status: 'Online' },
  { name: 'Bob Smith', role: 'Backend Engineer', avatar: 'B', status: 'Online' },
  { name: 'Charlie Kim', role: 'Frontend Developer', avatar: 'C', status: 'Away' },
  { name: 'Diana Lee', role: 'Designer', avatar: 'D', status: 'Offline' },
]

const statusDot = {
  Online: 'bg-green-400',
  Away: 'bg-amber-400',
  Offline: 'bg-gray-300',
}

export default function TeamTab() {
  return (
    <div className="space-y-4">
      <h3 className="text-base font-semibold text-gray-800">Team Members</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {members.map(m => (
          <div key={m.name} className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-sm font-bold text-indigo-600">{m.avatar}</div>
              <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white ${statusDot[m.status]}`} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{m.name}</p>
              <p className="text-xs text-gray-500">{m.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
