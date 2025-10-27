import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const sampleEvents = [
  {
    id: 'ysoc',
    title: 'Youth Season of Code (Y-SoC) 2025',
    date: 'Jun 10, 2025',
    location: 'Hybrid · Global',
    type: 'upcoming',
    highlight: true,
  },
  {
    id: 'ai-seminar',
    title: 'Seminar: Practical AI for Everyone',
    date: 'Mar 22, 2025',
    location: 'Grizz HQ · Bengaluru',
    type: 'upcoming',
    highlight: false,
  },
  {
    id: 'web3-workshop',
    title: 'Workshop: Build on Web3',
    date: 'Nov 12, 2024',
    location: 'Online',
    type: 'past',
    highlight: false,
  },
];

export default function ProgramsSection() {
  const [filter, setFilter] = useState('upcoming');

  const filtered = useMemo(() => {
    return sampleEvents.filter((e) => (filter === 'all' ? true : e.type === filter));
  }, [filter]);

  return (
    <section id="programs" className="relative w-full bg-[#0A0F24] py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_15%_10%,rgba(0,255,255,0.06),transparent_40%),radial-gradient(circle_at_85%_80%,rgba(0,120,255,0.06),transparent_35%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">Programs & Events</h2>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur">
            {['upcoming', 'past', 'all'].map((tab) => (
              <button
                key={tab}
                className={`rounded-full px-4 py-2 text-sm capitalize transition ${
                  filter === tab ? 'bg-[#0078FF] text-white' : 'text-white/70 hover:text-white'
                }`}
                onClick={() => setFilter(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div id="events" className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <AnimatePresence>
            {filtered.map((event, i) => (
              <motion.div
                layout
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl ${
                  event.highlight ? 'ring-1 ring-[#00FFFF]/30' : ''
                }`}
              >
                <div className="absolute inset-0 -z-0 pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00FFFF]/10 via-transparent to-[#0078FF]/10" />
                </div>

                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-semibold leading-snug">{event.title}</h3>
                  {event.highlight && (
                    <span className="rounded-full bg-cyan-400/10 px-2 py-1 text-[10px] uppercase tracking-wider text-cyan-300">featured</span>
                  )}
                </div>
                <div className="mt-3 flex flex-col gap-2 text-sm text-white/80">
                  <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-cyan-300" />{event.date}</div>
                  <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#0078FF]" />{event.location}</div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur transition hover:bg-white/15"
                  >
                    Register
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>

                  <button
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/70 transition hover:text-white"
                    onClick={() => alert(`${event.title} details coming soon!`)}
                  >
                    Details
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
