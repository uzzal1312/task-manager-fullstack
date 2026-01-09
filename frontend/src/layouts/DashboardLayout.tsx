import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { BellIcon, ChartBarIcon, ChatBubbleLeftIcon, Cog6ToothIcon, DocumentTextIcon, FolderIcon, HomeIcon, RectangleStackIcon, Squares2X2Icon, UserCircleIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import clsx from 'clsx'

const navItems = [
  { to: '/app', label: 'Dashboard', icon: HomeIcon },
  { to: '/app/projects', label: 'Projects', icon: RectangleStackIcon },
  { to: '/app/board', label: 'Board', icon: Squares2X2Icon },
  { to: '/app/files', label: 'Files', icon: FolderIcon },
  { to: '/app/documents', label: 'Docs', icon: DocumentTextIcon },
  { to: '/app/goals', label: 'Goals', icon: ChartBarIcon },
  { to: '/app/chat', label: 'Chat', icon: ChatBubbleLeftIcon },
  { to: '/app/analytics', label: 'Analytics', icon: ChartBarIcon },
  { to: '/app/settings', label: 'Settings', icon: Cog6ToothIcon }
]

export default function DashboardLayout() {
  const [open, setOpen] = useState(true)
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-surface via-slate-950 to-surface text-slate-100 flex">
      <aside className={clsx('transition-all duration-300 border-r border-white/5 backdrop-blur bg-slate-900/40', open ? 'w-64' : 'w-20')}>
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/app')}>
            <div className="h-10 w-10 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-extrabold">PH</div>
            {open && <div className="leading-tight"><div className="font-semibold">Productivity Hub</div><div className="text-xs text-slate-400">Innovision Dynamics</div></div>}
          </div>
          <button className="btn-ghost" onClick={() => setOpen(!open)}>{open ? '⟨' : '⟩'}</button>
        </div>
        <nav className="px-3 space-y-1">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => clsx('flex items-center gap-3 px-3 py-2 rounded-xl transition font-medium',
                isActive ? 'bg-primary/20 text-white border border-primary/30 shadow-inner shadow-primary/20' : 'text-slate-300 hover:bg-white/5')}
            >
              <item.icon className="h-5 w-5" />
              {open && item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="flex-1">
        <header className="border-b border-white/5 backdrop-blur bg-slate-900/30 sticky top-0 z-10">
          <div className="flex items-center justify-between px-6 py-4">
            <div>
              <div className="text-sm text-slate-400">Welcome back</div>
              <div className="text-xl font-semibold">Your workspace overview</div>
            </div>
            <div className="flex items-center gap-3">
              <button className="btn-ghost"><BellIcon className="h-5 w-5" /></button>
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-indigo-400 flex items-center justify-center text-white font-semibold">JD</div>
            </div>
          </div>
        </header>
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
