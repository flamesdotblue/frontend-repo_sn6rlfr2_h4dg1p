import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Hero3D from './components/Hero3D';
import AboutUs from './components/AboutUs';
import ProgramsSection from './components/ProgramsSection';
import ContactSection from './components/ContactSection';

function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-gradient-to-b from-[#0A0F24]/80 to-transparent backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#00FFFF] to-[#0078FF]" />
          <span className="font-heading text-lg font-bold">Grizz</span>
        </a>
        <nav className="hidden gap-6 text-sm text-white/80 md:flex">
          <a className="hover:text-white" href="#about">About</a>
          <a className="hover:text-white" href="#programs">Programs</a>
          <a className="hover:text-white" href="#events">Events</a>
          <a className="hover:text-white" href="#contact">Contact</a>
        </nav>
        <a href="#programs" className="hidden rounded-full bg-[#0078FF] px-4 py-2 text-sm text-white shadow-md shadow-[#0078FF]/30 md:inline-block">Join Y-SoC</a>
      </div>
    </header>
  );
}

export default function App() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });

  return (
    <div className="h-screen bg-[#0A0F24]">
      <Navbar />

      {/* Scroll progress */}
      <motion.div
        className="fixed left-0 right-0 top-0 z-50 h-[3px] origin-left bg-gradient-to-r from-[#FF4D6D] via-[#0078FF] to-[#00FFFF]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Full-page snap scrolling container */}
      <main
        ref={scrollRef}
        className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth"
      >
        <Hero3D />
        <AboutUs />
        <ProgramsSection />
        <ContactSection />
      </main>

      <footer className="border-t border-white/10 bg-[#0A0F24] py-8 text-white/70">
        <div className="mx-auto max-w-7xl px-6 text-sm">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p>© {new Date().getFullYear()} Grizz. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white">Discord</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
              <a href="#" className="hover:text-white">Newsletter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
