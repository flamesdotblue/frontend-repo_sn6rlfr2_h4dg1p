import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Rocket, Target, Sparkles } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 1) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 * i } }),
};

export default function AboutUs() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 20%'] });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <section ref={ref} id="about" className="relative w-full min-h-screen snap-start bg-[#0A0F24] py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,255,0.08),transparent_50%),radial-gradient(circle_at_80%_50%,rgba(0,120,255,0.08),transparent_40%)]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl flex-col justify-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          style={{ y, opacity }}
          className="text-center font-heading text-3xl font-bold sm:text-4xl"
        >
          About Grizz
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-3 max-w-2xl text-center text-white/70"
        >
          We are a future-focused community enabling students and young innovators through seminars, workshops, and our flagship Y-SoC program.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#0078FF]/20 p-3 text-[#0078FF]"><Target /></div>
              <h3 className="text-lg font-semibold">Mission</h3>
            </div>
            <p className="mt-3 text-sm text-white/70">
              Empower the next generation with hands-on learning, mentorship, and opportunities to build real-world solutions.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={2}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-cyan-400/20 p-3 text-cyan-300"><Rocket /></div>
              <h3 className="text-lg font-semibold">Vision</h3>
            </div>
            <p className="mt-3 text-sm text-white/70">
              Build a global ecosystem where youth collaborate across disciplines to create impactful technology and startups.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={3}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-emerald-400/20 p-3 text-emerald-300"><Sparkles /></div>
              <h3 className="text-lg font-semibold">Y-SoC</h3>
            </div>
            <p className="mt-3 text-sm text-white/70">
              Youth Season of Code is our intensive program guiding learners from idea to deployment with mentors and live showcases.
            </p>
            <a href="#programs" className="mt-4 inline-block text-sm text-cyan-300 hover:text-cyan-200">Learn more →</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
