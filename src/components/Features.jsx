import { Rocket, Shield, Cpu, Layers } from 'lucide-react';

const items = [
  {
    icon: Rocket,
    title: 'High-Impact Hero',
    desc: 'Use a full-width 3D cover that instantly communicates innovation and premium design.'
  },
  {
    icon: Shield,
    title: 'Performance-Ready',
    desc: 'Optimized rendering and lazy hydration patterns to keep interactions smooth.'
  },
  {
    icon: Cpu,
    title: 'Interactive 3D',
    desc: 'Engage visitors with a live, interactive scene powered by Spline—no installs needed.'
  },
  {
    icon: Layers,
    title: 'Composable UI',
    desc: 'Clean, modular React components styled with Tailwind for rapid iteration.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold">Built to impress</h2>
          <p className="mt-3 text-white/70">A refined, iridescent visual language paired with modern engineering.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title} className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/20 hover:bg-white/[0.04]">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-sky-400/30 via-fuchsia-400/30 to-emerald-300/30 flex items-center justify-center ring-1 ring-inset ring-white/10">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-medium">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.desc}</p>
            </div>
          ))}
        </div>

        <div id="contact" className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h4 className="text-xl font-semibold">Ready to elevate your brand?</h4>
              <p className="mt-1 text-white/70">Let’s craft an immersive hero that converts attention into action.</p>
            </div>
            <a href="#" className="inline-flex items-center rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-white/90 transition">
              Book a demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
