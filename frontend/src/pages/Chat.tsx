import { useState } from 'react'

const messages = [
  { user: 'Sara', content: 'Team standup in 5?', time: '09:15' },
  { user: 'Alex', content: 'Pushed the new API spec', time: '09:16' },
  { user: 'Remy', content: 'Docs preview looks great!', time: '09:18' }
]

export default function Chat() {
  const [text, setText] = useState('')
  return (
    <div className="grid lg:grid-cols-3 gap-4">
      <div className="card p-4 lg:col-span-2 flex flex-col h-[70vh]">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-sm text-slate-400">Team chat</div>
            <div className="font-semibold">#project-launch</div>
          </div>
          <div className="flex gap-2"><span className="badge">Live</span><span className="badge">8 online</span></div>
        </div>
        <div className="flex-1 space-y-3 overflow-auto pr-1">
          {messages.map(msg => (
            <div key={msg.time} className="p-3 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold">{msg.user}</span>
                <span className="text-slate-400">{msg.time}</span>
              </div>
              <div className="text-slate-200 mt-1">{msg.content}</div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex gap-2">
          <input value={text} onChange={e => setText(e.target.value)} className="flex-1 rounded-lg bg-white/5 border border-white/10 px-3 py-2 focus:border-primary outline-none" placeholder="Send a message" />
          <button className="btn-primary">Send</button>
        </div>
      </div>
      <div className="card p-4 space-y-3">
        <div className="font-semibold">Whiteboard</div>
        <div className="h-52 rounded-xl border border-dashed border-white/15 bg-white/5 flex items-center justify-center text-slate-400">
          Multi-user canvas placeholder
        </div>
        <div className="space-y-2 text-sm text-slate-300">
          <div className="flex justify-between"><span>Strokes</span><span>124</span></div>
          <div className="flex justify-between"><span>Active cursors</span><span>4</span></div>
          <div className="flex justify-between"><span>Sync</span><span className="text-emerald-300">Live</span></div>
        </div>
      </div>
    </div>
  )
}
