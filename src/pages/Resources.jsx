import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Resources() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/resources`)
        const data = await res.json()
        setItems(data.items || [])
      } catch (e) {
        setError('Failed to load resources')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold">Resources</h1>
        <p className="mt-2 text-zinc-300">Guides, templates, and tools to accelerate your search.</p>

        {loading ? (
          <p className="mt-8 text-zinc-400">Loading...</p>
        ) : error ? (
          <p className="mt-8 text-red-400">{error}</p>
        ) : (
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((r) => (
              <a key={r.id} href={r.url || '#'} target={r.url ? '_blank' : undefined} className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{r.description}</p>
                <div className="mt-3 text-xs text-zinc-400">{r.category}</div>
              </a>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
