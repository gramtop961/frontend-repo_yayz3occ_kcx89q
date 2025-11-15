import { Link, NavLink } from 'react-router-dom'
import { Menu, PhoneCall } from 'lucide-react'
import { useState } from 'react'

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive ? 'text-white bg-purple-600/30' : 'text-zinc-300 hover:text-white hover:bg-zinc-800/60'
  }`

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-gradient-to-br from-purple-500 to-fuchsia-600"></div>
            <span className="font-semibold text-white text-lg">UniGrasp</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navLinkClass} end>Home</NavLink>
            <NavLink to="/blogs" className={navLinkClass}>Blogs</NavLink>
            <NavLink to="/resources" className={navLinkClass}>Resources</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#schedule" className="inline-flex items-center gap-2 bg-purple-600/80 hover:bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              <PhoneCall size={16} /> Schedule a Call
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-zinc-200 hover:text-white">
            <Menu />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <div className="px-4 py-3 space-y-2">
            <NavLink to="/" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-zinc-300 hover:text-white hover:bg-zinc-800/60">Home</NavLink>
            <NavLink to="/blogs" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-zinc-300 hover:text-white hover:bg-zinc-800/60">Blogs</NavLink>
            <NavLink to="/resources" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-zinc-300 hover:text-white hover:bg-zinc-800/60">Resources</NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-zinc-300 hover:text-white hover:bg-zinc-800/60">Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
