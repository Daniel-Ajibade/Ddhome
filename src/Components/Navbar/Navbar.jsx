/**
 * Navbar.jsx
 * Sticky navigation bar with hamburger menu for mobile.
 * - Becomes solid white on scroll (transparent over hero)
 * - Smooth scrolls to each section on link click
 * - Hamburger animates into an X when menu is open
 */

import { useState, useEffect } from 'react';
import './Navbar.css';

// Nav items — label shown, id matches section element id
const NAV_ITEMS = [
  { label: 'Home',       id: 'home'     },
  { label: 'Services',   id: 'services' },
  { label: 'About Us',   id: 'about'    },
  { label: 'Contact',    id: 'contact'  },
];

export default function Navbar() {
  const [menuOpen,   setMenuOpen]   = useState(false); // hamburger open/close
  const [scrolled,   setScrolled]   = useState(false); // navbar background state
  const [activeId,   setActiveId]   = useState('home'); // which section is in view

  /* ── Scroll listener: toggle solid background & track active section ── */
  useEffect(() => {
    const handleScroll = () => {
      // Solid navbar after scrolling 60px
      setScrolled(window.scrollY > 60);

      // Highlight the nav link whose section is currently visible
      const offsets = NAV_ITEMS.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        return { id, top: Math.abs(el.getBoundingClientRect().top - 80) };
      });
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActiveId(closest.id);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── Close menu on resize to desktop ── */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  /* ── Smooth scroll to section ── */
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // close mobile menu after click
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
         role="navigation"
         aria-label="Main navigation">

      <div className="navbar__inner">

        {/* ── Brand / Logo ── */}
        <div className="navbar__brand"
             onClick={() => scrollToSection('home')}
             role="button"
             tabIndex={0}
             aria-label="Go to top">
          <span className="navbar__brand-name">Double D</span>
          <span className="navbar__brand-tagline">Home Health Care</span>
        </div>

        {/* ── Desktop Nav Links ── */}
        <ul className="navbar__links" role="list">
          {NAV_ITEMS.map(({ label, id }) => (
            <li key={id}>
              <button
                className={`navbar__link ${activeId === id ? 'navbar__link--active' : ''}`}
                onClick={() => scrollToSection(id)}
                aria-current={activeId === id ? 'true' : undefined}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* ── Hamburger Button (mobile) ── */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
        </button>
      </div>

      {/* ── Mobile Dropdown Menu ── */}
      <ul
        id="mobile-menu"
        className={`navbar__mobile-menu ${menuOpen ? 'navbar__mobile-menu--open' : ''}`}
        role="list"
        aria-hidden={!menuOpen}
      >
        {NAV_ITEMS.map(({ label, id }) => (
          <li key={id}>
            <button
              className="navbar__mobile-link"
              onClick={() => scrollToSection(id)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}