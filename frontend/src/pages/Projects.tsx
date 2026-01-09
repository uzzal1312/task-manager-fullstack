const projects = [
  { name: 'Launchpad Revamp', status: 'On track', members: 8, progress: 72 },
  { name: 'Mobile QA Sprint', status: 'At risk', members: 5, progress: 44 },
  { name: 'Docs Refresh', status: 'Ahead', members: 3, progress: 88 }
]

export default function Projects() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-slate-400">Project portfolio</div>
          <div className="text-2xl font-semibold">All projects</div>
        </div>
        <button className="btn-primary">New project</button>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {projects.map(project => (
          <div key={project.name} className="card p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="font-semibold">{project.name}</div>
              <span className="badge">{project.status}</span>
            </div>
            <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
              <div className="h-2 bg-primary" style={{ width: `${project.progress}%` }} />
            </div>
            <div className="text-sm text-slate-400">{project.members} members collaborating</div>
            <div className="flex gap-2 flex-wrap">
              <span className="badge">Kanban</span>
              <span className="badge">Docs</span>
              <span className="badge">Files</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
