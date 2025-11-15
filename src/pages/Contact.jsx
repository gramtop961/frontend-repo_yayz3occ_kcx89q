import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: '', message: '' })
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus('Thanks! We will get back to you shortly.')
      setForm({ name: '', email: '', phone: '', interest: '', message: '' })
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Contact us</h1>
          <p className="mt-2 text-zinc-300">Tell us about your goals. We’ll suggest the right plan.</p>
          <form onSubmit={submit} className="mt-6 space-y-4">
            {['name','email','phone','interest'].map((k) => (
              <div key={k}>
                <label className="block text-sm text-zinc-300 mb-1 capitalize" htmlFor={k}>{k}</label>
                <input id={k} value={form[k]} onChange={(e)=>setForm({...form,[k]:e.target.value})} className="w-full bg-zinc-900 border border-white/10 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
              </div>
            ))}
            <div>
              <label className="block text-sm text-zinc-300 mb-1" htmlFor="message">Message</label>
              <textarea id="message" value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})} rows={5} className="w-full bg-zinc-900 border border-white/10 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
            <button className="bg-purple-600 hover:bg-purple-500 rounded px-4 py-2 text-sm font-medium">Send</button>
            {status && <p className="text-sm text-zinc-300">{status}</p>}
          </form>
        </div>
        <div id="schedule" className="rounded-xl border border-white/10 bg-white/5 p-6 h-fit">
          <h2 className="text-xl font-semibold">Schedule a call</h2>
          <p className="mt-2 text-sm text-zinc-300">Pick a plan and we’ll email a calendar link with payment details.</p>
          <form onSubmit={(e)=>{e.preventDefault();document.getElementById('contact-scroll').scrollIntoView({behavior:'smooth'})}} className="mt-4 space-y-3">
            {['Starter','Pro','Elite'].map((plan)=> (
              <label key={plan} className="flex items-center justify-between bg-zinc-900 border border-white/10 rounded px-3 py-2">
                <div>
                  <div className="font-medium">{plan}</div>
                  <div className="text-xs text-zinc-400">{plan==='Starter'?'$79':'Pro'===plan?'$199':'$399'} / session</div>
                </div>
                <input type="radio" name="plan" />
              </label>
            ))}
            <button className="w-full bg-purple-600 hover:bg-purple-500 rounded px-4 py-2 text-sm font-medium">Continue to payment</button>
            <p className="text-xs text-zinc-400">You will receive a secure payment link via email after confirming your slot.</p>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}
