/**
 * App.js
 * Root component — assembles all sections in order.
 * Each section is a self-contained component with its own CSS.
 */

import './App.css';
import Navbar   from './components/Navbar/Navbar';
import Hero     from './components/Hero/Hero';
import Services from './components/Services/Services';
import About    from './components/About/About';
import Contact  from './components/Contact/Contact';

export default function App() {
  return (
    <div className="app">

      {/* ── Sticky Navigation Bar ── */}
      <Navbar />

      {/* ── Page Sections ── */}
      <main className="app__main">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>

      {/* ── Footer ── */}
      <footer className="app__footer">
        <p>
          © {new Date().getFullYear()} <span>Double D Home Health Care</span>. All rights reserved.
        </p>
        <p>Omi-Eran Road, Funfun, After Ayeni Junction — Osogbo, Nigeria</p>
      </footer>

    </div>
  );
}