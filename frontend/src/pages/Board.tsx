import TaskCard from '../components/TaskCard'
import TaskColumn from '../components/TaskColumn'

const sample = {
  todo: [
    { title: 'Create onboarding journey', desc: 'Map the first 5 minutes of UX', due: 'Today', tags: ['UX', 'High'] },
    { title: 'Sync with QA', desc: 'Stabilize flaky tests', due: 'Tomorrow', tags: ['QA'] }
  ],
  progress: [
    { title: 'Implement notifications', desc: 'WebSocket live updates', due: 'Fri', tags: ['Backend', 'Realtime'] }
  ],
  review: [
    { title: 'Doc site deploy', desc: 'Preview env ready', due: 'Thu', tags: ['Docs'] }
  ],
  done: [
    { title: 'API contracts', desc: 'Shared OpenAPI spec', tags: ['API'] }
  ]
}

export default function Board() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-slate-400">Kanban board</div>
          <div className="text-2xl font-semibold">Productivity Hub sprint</div>
        </div>
        <button className="btn-primary">Add task</button>
      </div>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-4">
        <TaskColumn title="To Do" count={sample.todo.length}>
          {sample.todo.map(task => <TaskCard key={task.title} {...task} />)}
        </TaskColumn>
        <TaskColumn title="In Progress" count={sample.progress.length}>
          {sample.progress.map(task => <TaskCard key={task.title} {...task} />)}
        </TaskColumn>
        <TaskColumn title="Review" count={sample.review.length}>
          {sample.review.map(task => <TaskCard key={task.title} {...task} />)}
        </TaskColumn>
        <TaskColumn title="Done" count={sample.done.length}>
          {sample.done.map(task => <TaskCard key={task.title} {...task} />)}
        </TaskColumn>
      </div>
    </div>
  )
}
