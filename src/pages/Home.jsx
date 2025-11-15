import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { Calendar, ShieldCheck, CreditCard } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />

      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(168,85,247,0.15),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Calendar, title: '1:1 Coaching', desc: 'Tailored sessions to map your next move and accelerate outcomes.' },
              { icon: ShieldCheck, title: 'Interview Training', desc: 'Rigorous mock interviews with frameworks and scorecards.' },
              { icon: CreditCard, title: 'Career Plans', desc: 'Transparent pricing. Invest in clarity, skills, and momentum.' }
            ].map((f, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
                <f.icon className="text-purple-400" />
                <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-zinc-300 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold">Plans & Pricing</h2>
          <p className="mt-2 text-zinc-300">Simple, transparent, and designed for impact.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { name: 'Starter', price: 79, features: ['30-min consult', 'Resume feedback', 'Action plan'] },
              { name: 'Pro', price: 199, features: ['60-min deep dive', 'Resume + LinkedIn', 'Mock interview'] },
              { name: 'Elite', price: 399, features: ['3 x 60-min coaching', 'Full portfolio review', 'Job search strategy'] }
            ].map((p, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <div className="mt-3 text-4xl font-bold">${p.price}<span className="text-base font-normal text-zinc-400">/session</span></div>
                <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                  {p.features.map((ft, idx) => <li key={idx}>• {ft}</li>)}
                </ul>
                <a href="#schedule" className="mt-6 inline-block w-full text-center bg-purple-600 hover:bg-purple-500 text-white rounded-md py-2 font-medium">Choose {p.name}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
