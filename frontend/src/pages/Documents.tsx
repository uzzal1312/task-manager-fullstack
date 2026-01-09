export default function Documents() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-slate-400">Collaborative docs</div>
          <div className="text-2xl font-semibold">Project documents</div>
        </div>
        <button className="btn-primary">New document</button>
      </div>
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="card p-4 space-y-3">
          <div className="font-semibold">Brainstorming canvas</div>
          <textarea className="w-full h-64 bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-slate-100 focus:border-primary outline-none" defaultValue="Collaborate in real-time. Capture notes, decisions, and action items."></textarea>
          <div className="flex justify-between text-sm text-slate-400">
            <span>Autosave enabled</span>
            <button className="btn-ghost">View history</button>
          </div>
        </div>
        <div className="card p-4 space-y-3">
          <div className="font-semibold">Version history</div>
          <div className="space-y-2 text-sm text-slate-300">
            <div className="flex justify-between"><span>v12 • Summary refinements</span><span className="text-slate-400">2m ago</span></div>
            <div className="flex justify-between"><span>v11 • Added diagrams</span><span className="text-slate-400">1h ago</span></div>
            <div className="flex justify-between"><span>v10 • Outline</span><span className="text-slate-400">Yesterday</span></div>
          </div>
          <div className="card p-3 bg-white/5">
            <div className="text-sm font-semibold">Live cursors</div>
            <div className="flex -space-x-2 mt-2">
              {['AC', 'RM', 'LS', 'TK'].map(initials => (
                <div key={initials} className="h-9 w-9 rounded-full bg-primary/30 border border-white/10 flex items-center justify-center text-xs font-semibold">{initials}</div>
              ))}
            </div>
            <div className="text-xs text-slate-400 mt-2">Whiteboard and docs sync in real-time.</div>
          </div>
        </div>
      </div>
    </div>
  )
}
