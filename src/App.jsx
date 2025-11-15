import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Resources from './pages/Resources'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
