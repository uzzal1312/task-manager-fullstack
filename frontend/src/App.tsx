import { Route, Routes } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Board from './pages/Board'
import Files from './pages/Files'
import Documents from './pages/Documents'
import Goals from './pages/Goals'
import Settings from './pages/Settings'
import Chat from './pages/Chat'
import Analytics from './pages/Analytics'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<DashboardLayout />}>
        <Route path="/app" element={<Dashboard />} />
        <Route path="/app/projects" element={<Projects />} />
        <Route path="/app/board" element={<Board />} />
        <Route path="/app/files" element={<Files />} />
        <Route path="/app/documents" element={<Documents />} />
        <Route path="/app/goals" element={<Goals />} />
        <Route path="/app/chat" element={<Chat />} />
        <Route path="/app/analytics" element={<Analytics />} />
        <Route path="/app/settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}
