import { useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  // Cursor-driven parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(useTransform(mx, [-1, 1], [-12, 12]), { stiffness: 120, damping: 20 });
  const sy = useSpring(useTransform(my, [-1, 1], [-12, 12]), { stiffness: 120, damping: 20 });

  useEffect(() => {
    const onMove = (e) => {
      const { innerWidth: w, innerHeight: h } = window;
      const x = (e.clientX / w) * 2 - 1; // -1 to 1
      const y = (e.clientY / h) * 2 - 1; // -1 to 1
      mx.set(x);
      my.set(y);
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, [mx, my]);

  return (
    <section className="relative w-full min-h-screen snap-start overflow-hidden bg-gradient-to-b from-[#0A0F24] via-[#0a0f24] to-[#001627] text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/XuAg4PYWfzmy0iW1/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Glow accents and gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0">
        {/* thematic red/blue energy glows */}
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-rose-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F24]/30 via-transparent to-[#0A0F24]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ x: sx, y: sy }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-widest text-cyan-200/90 backdrop-blur-md"
        >
          Grizz • Innovation • Youth • Technology
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ x: useTransform(sx, (v) => v * 0.5), y: useTransform(sy, (v) => v * 0.5) }}
          className="font-heading text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl"
        >
          More Animated. More Alive.
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-cyan-300 to-white"> Grizz, in 3D.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ x: useTransform(sx, (v) => v * 0.35), y: useTransform(sy, (v) => v * 0.35) }}
          className="mt-4 max-w-2xl text-white/80"
        >
          A vibrant, playful, and modern hero powered by a red–blue tech aesthetic. Interact with the scene and feel the motion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ x: useTransform(sx, (v) => v * 0.2), y: useTransform(sy, (v) => v * 0.2) }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#programs"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-cyan-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:shadow-cyan-500/40"
          >
            Join Y-SoC
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a
            href="#events"
            className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:-translate-y-0.5"
          >
            Explore Events
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-6 py-3 text-sm font-medium text-cyan-100 backdrop-blur-md transition hover:-translate-y-0.5"
          >
            Partner With Us
          </a>
        </motion.div>

        {/* Floating badges */}
        <div className="pointer-events-none relative mt-10 h-10 w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-6 top-0 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] text-white/80 backdrop-blur"
          >
            real-time interaction
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{ duration: 5, delay: 0.6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-6 top-0 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] text-white/80 backdrop-blur"
          >
            framer motion powered
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll hint */}
      <div className="pointer-events-none absolute bottom-6 left-0 right-0 z-10 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, repeat: Infinity, repeatType: 'reverse' }}
          className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur-md"
        >
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
}
