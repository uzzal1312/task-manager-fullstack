import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-surface via-slate-950 to-surface">
      <div className="card w-full max-w-lg p-8 space-y-6">
        <div>
          <div className="text-sm text-slate-400">Join the workspace</div>
          <div className="text-2xl font-semibold">Create your account</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 space-y-1">
            <label className="text-sm text-slate-300">Full name</label>
            <input className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 focus:border-primary outline-none" placeholder="Alex Smith" />
          </div>
          <div className="col-span-2 space-y-1">
            <label className="text-sm text-slate-300">Email</label>
            <input className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 focus:border-primary outline-none" placeholder="you@team.com" />
          </div>
          <div className="col-span-2 space-y-1">
            <label className="text-sm text-slate-300">Password</label>
            <input type="password" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 focus:border-primary outline-none" placeholder="Create a secure password" />
          </div>
          <div className="col-span-2 space-y-1">
            <label className="text-sm text-slate-300">Team</label>
            <input className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 focus:border-primary outline-none" placeholder="e.g. Design Guild" />
          </div>
          <button className="btn-primary col-span-2">Create workspace</button>
        </div>
        <div className="text-sm text-slate-400 text-center">Already have an account? <Link to="/login" className="text-primary">Sign in</Link></div>
      </div>
    </div>
  )
}
