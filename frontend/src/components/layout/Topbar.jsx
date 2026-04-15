export default function Topbar() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm">
      <h1 className="text-base font-semibold text-gray-800">Project Community OS</h1>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-56"
        />
        <button className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">🔔</button>
      </div>
    </header>
  )
}
