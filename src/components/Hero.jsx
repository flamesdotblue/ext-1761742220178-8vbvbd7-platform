import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EQgEIs2r5cMbWroZ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_45%,rgba(0,0,0,0.65)_65%,rgba(0,0,0,0.85)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <p className="text-xs tracking-widest uppercase text-white/70 mb-4">Modern • Iridescent • Digital</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Chrome aesthetics for a new era of digital luxury
          </h1>
          <p className="mt-4 text-white/80 max-w-xl">
            Two iridescent links float in a black void—elegant, abstract, and alive. Build immersive, high-end experiences powered by cutting-edge 3D.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#features" className="inline-flex items-center rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-white/90 transition">
              Explore Features
            </a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-white/20 bg-black/40 px-5 py-2.5 text-sm font-medium text-white hover:border-white/40 transition">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
