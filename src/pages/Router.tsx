import { Routes, Route } from 'react-router-dom'
import { History } from './History'
import { Home } from './Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
    </Routes>
  )
}
