import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-surface via-slate-950 to-surface">
      <div className="card w-full max-w-md p-8 space-y-6">
        <div>
          <div className="text-sm text-slate-400">Welcome back</div>
          <div className="text-2xl font-semibold">Sign in to continue</div>
        </div>
        <div className="space-y-4">
          <div className="space-y-1">
            <label className="text-sm text-slate-300">Email</label>
            <input className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 focus:border-primary outline-none" placeholder="you@team.com" />
          </div>
          <div className="space-y-1">
            <label className="text-sm text-slate-300">Password</label>
            <input type="password" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 focus:border-primary outline-none" placeholder="••••••••" />
          </div>
          <button className="btn-primary w-full">Sign in</button>
          <Link to="/register" className="block text-center text-sm text-slate-400 hover:text-primary">Create an account</Link>
        </div>
      </div>
    </div>
  )
}
