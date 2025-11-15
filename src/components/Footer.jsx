export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-zinc-400">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-gradient-to-br from-purple-500 to-fuchsia-600"></div>
            <span className="font-semibold text-white">UniGrasp</span>
          </div>
          <p className="mt-3 text-sm max-w-xs">
            Career counseling for ambitious professionals. Strategy, clarity, and momentum.
          </p>
        </div>
        <div>
          <h4 className="text-white font-medium mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-white" href="/blogs">Blogs</a></li>
            <li><a className="hover:text-white" href="/resources">Resources</a></li>
            <li><a className="hover:text-white" href="/contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-3">Get in touch</h4>
          <p className="text-sm">Email: hello@unigrasp.co</p>
          <p className="text-sm">Hours: Mon–Fri, 9am–6pm</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs">© {new Date().getFullYear()} UniGrasp. All rights reserved.</div>
    </footer>
  )
}
