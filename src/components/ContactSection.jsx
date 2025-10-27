import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  const [status, setStatus] = useState('idle');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate async submit
    setTimeout(() => setStatus('submitted'), 900);
  };

  return (
    <section id="contact" className="relative w-full bg-[#0A0F24] py-20 text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#0078FF]/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-2">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl font-bold sm:text-4xl"
          >
            Get in Touch
          </motion.h2>
          <p className="mt-3 max-w-md text-white/70">
            Have a collaboration idea, want to host a workshop, or join Y-SoC? Drop us a message — we’d love to connect.
          </p>

          <div className="mt-6 space-y-3 text-white/80">
            <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-cyan-300" /> hello@grizz.org</div>
            <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-[#0078FF]" /> +1 (555) 012-3456</div>
            <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-cyan-300" /> Bengaluru • Remote Worldwide</div>
          </div>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs text-white/60">Name</label>
              <input required type="text" className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-white outline-none ring-0 placeholder:text-white/40 focus:border-cyan-300/40" placeholder="Alex Innovator" />
            </div>
            <div>
              <label className="block text-xs text-white/60">Email</label>
              <input required type="email" className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-white outline-none ring-0 placeholder:text-white/40 focus:border-cyan-300/40" placeholder="alex@example.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs text-white/60">Message</label>
              <textarea required rows={4} className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-white outline-none ring-0 placeholder:text-white/40 focus:border-cyan-300/40" placeholder="Tell us about your idea or request..." />
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between gap-3">
            <button
              type="submit"
              disabled={status !== 'idle'}
              className="inline-flex items-center gap-2 rounded-full bg-[#0078FF] px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-[#0078FF]/30 transition enabled:hover:-translate-y-0.5"
            >
              {status === 'loading' ? (
                <span className="inline-flex items-center gap-2">Sending… <span className="h-3 w-3 animate-pulse rounded-full bg-white/60" /></span>
              ) : status === 'submitted' ? (
                <span className="inline-flex items-center gap-2">Sent! <Send className="h-4 w-4" /></span>
              ) : (
                <span className="inline-flex items-center gap-2">Send Message <Send className="h-4 w-4" /></span>
              )}
            </button>
            <p className="text-xs text-white/50">We typically respond within 48 hours.</p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
