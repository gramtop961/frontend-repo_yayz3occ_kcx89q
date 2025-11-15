import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Blogs() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/blogs`)
        const data = await res.json()
        setItems(data.items || [])
      } catch (e) {
        setError('Failed to load blogs')
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
        <h1 className="text-3xl md:text-4xl font-bold">Insights & Stories</h1>
        <p className="mt-2 text-zinc-300">Practical guidance for job seekers and career switchers.</p>

        {loading ? (
          <p className="mt-8 text-zinc-400">Loading...</p>
        ) : error ? (
          <p className="mt-8 text-red-400">{error}</p>
        ) : (
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((b) => (
              <article key={b.id} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{b.excerpt}</p>
                <div className="mt-3 text-xs text-zinc-400">By {b.author}</div>
                <div className="mt-4 flex gap-2 flex-wrap">
                  {b.tags?.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 ring-1 ring-purple-500/20">{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
