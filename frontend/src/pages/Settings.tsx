export default function Settings() {
  return (
    <div className="space-y-4">
      <div>
        <div className="text-sm text-slate-400">Settings</div>
        <div className="text-2xl font-semibold">Profile & preferences</div>
      </div>
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="card p-4 space-y-3">
          <div className="font-semibold">Profile</div>
          <div className="space-y-2">
            <label className="text-sm text-slate-400">Name</label>
            <input className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 focus:border-primary outline-none" defaultValue="Jordan Doe" />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-slate-400">Role</label>
            <input className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 focus:border-primary outline-none" defaultValue="Product Lead" />
          </div>
          <button className="btn-primary w-full">Save profile</button>
        </div>
        <div className="card p-4 space-y-3">
          <div className="font-semibold">Notifications</div>
          <div className="flex items-center justify-between border border-white/10 rounded-lg px-3 py-2">
            <div>
              <div className="font-semibold text-sm">Deadline alerts</div>
              <div className="text-xs text-slate-400">Receive reminders 24h before</div>
            </div>
            <input type="checkbox" defaultChecked className="h-5 w-5" />
          </div>
          <div className="flex items-center justify-between border border-white/10 rounded-lg px-3 py-2">
            <div>
              <div className="font-semibold text-sm">Daily summary</div>
              <div className="text-xs text-slate-400">Morning digest at 7 AM</div>
            </div>
            <input type="checkbox" defaultChecked className="h-5 w-5" />
          </div>
          <button className="btn-ghost w-full">Sign out</button>
        </div>
      </div>
    </div>
  )
}
