/**
 * Hero.jsx
 * Full-screen landing section for Double D Home Health Care.
 * Shows headline, description, CTA buttons, and stat cards.
 */

import './Hero.css';

export default function Hero() {
  /* ── Scroll to services or contact section ── */
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero" aria-label="Welcome">

      {/* ── Main Content Grid ── */}
      <div className="hero__container">

        {/* Left: Headline & CTA */}
        <div className="hero__content">

          {/* Eyebrow label */}
          <p className="hero__label">Osogbo, Nigeria</p>

          {/* Main heading */}
          <h1 className="hero__title">
            Compassionate Care,{' '}
            <span className="hero__title-highlight">Right at Home</span>
          </h1>

          {/* Description */}
          <p className="hero__description">
            Double D Home Health Care provides trusted, professional home health
            services to families across Osogbo and the surrounding region.
            We bring skilled, caring professionals directly to your door.
          </p>

          {/* CTA Buttons */}
          <div className="hero__cta-row">
            <button
              className="hero__btn-primary"
              onClick={() => scrollTo('services')}
              aria-label="Explore our services"
            >
              Our Services ↓
            </button>
            <button
              className="hero__btn-secondary"
              onClick={() => scrollTo('contact')}
              aria-label="Contact us"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Right: Stats Cards */}
        <div className="hero__stats" aria-label="Agency highlights">

          <div className="hero__stat-card">
            <div className="hero__stat-icon" aria-hidden="true">🏠</div>
            <div className="hero__stat-number">100+</div>
            <div className="hero__stat-label">Families Served</div>
          </div>

          <div className="hero__stat-card">
            <div className="hero__stat-icon" aria-hidden="true">👩‍⚕️</div>
            <div className="hero__stat-number">4</div>
            <div className="hero__stat-label">Core Services</div>
          </div>

          <div className="hero__stat-card hero__stat-card--wide">
            <div className="hero__stat-icon" aria-hidden="true">📍</div>
            <div className="hero__stat-number" style={{ fontSize: '1.1rem', letterSpacing: '0.02em' }}>
              Omi-Eran Road, Funfun
            </div>
            <div className="hero__stat-label">After Ayeni Junction, Osogbo</div>
          </div>
        </div>
      </div>

      {/* ── Scroll hint ── */}
      <div className="hero__scroll-hint" aria-hidden="true">
        <div className="hero__scroll-dot" />
        <span>Scroll</span>
      </div>

    </section>
  );
}