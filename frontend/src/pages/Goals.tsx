const goals = [
  { title: 'Improve SLA to 99.5%', progress: 78, owner: 'Ops', cadence: 'Weekly' },
  { title: 'Ship onboarding revamp', progress: 54, owner: 'Product', cadence: 'Sprint' },
  { title: 'Reduce cycle time < 2d', progress: 62, owner: 'Eng', cadence: 'Rolling' }
]

export default function Goals() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-slate-400">Goals & habits</div>
          <div className="text-2xl font-semibold">Track progress</div>
        </div>
        <button className="btn-primary">Create goal</button>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {goals.map(goal => (
          <div key={goal.title} className="card p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">{goal.title}</div>
                <div className="text-xs text-slate-400">Owner: {goal.owner}</div>
              </div>
              <span className="badge">{goal.cadence}</span>
            </div>
            <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
              <div className="h-2 bg-emerald-400" style={{ width: `${goal.progress}%` }} />
            </div>
            <div className="text-sm text-slate-300">Progress {goal.progress}%</div>
            <button className="btn-ghost w-full">Update progress</button>
          </div>
        ))}
      </div>
    </div>
  )
}
