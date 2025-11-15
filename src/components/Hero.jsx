import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[72vh] md:h-[78vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/yji5KWXyD-xKVkWj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        <div className="max-w-2xl">
          <span className="inline-flex items-center text-xs font-semibold tracking-wider uppercase text-purple-300/90 bg-purple-500/10 ring-1 ring-purple-500/20 px-2 py-1 rounded">Career Counseling</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight text-white">
            Navigate Your Career with Confidence
          </h1>
          <p className="mt-4 text-zinc-300 text-lg md:text-xl">
            Personalized guidance, interview prep, resume reviews, and job search strategies — built for ambitious professionals.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#schedule" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-purple-600 hover:bg-purple-500 text-white font-medium transition-colors">
              Schedule a Call
            </a>
            <a href="#pricing" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white font-medium transition-colors ring-1 ring-white/15">
              View Plans & Pricing
            </a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
    </section>
  )
}
