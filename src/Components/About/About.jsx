/**
 * About.jsx
 * About Us section — agency story, values, location card & opening hours.
 */

import './About.css';

// Core agency values displayed in the left column
const VALUES = [
  {
    icon:  '❤️',
    title: 'Compassion First',
    text:  'We treat every client like family, with patience, kindness, and genuine care.',
  },
  {
    icon:  '🔒',
    title: 'Trust & Safety',
    text:  'All our staff are vetted, trained, and committed to the highest safety standards.',
  },
  {
    icon:  '🌟',
    title: 'Dignity & Respect',
    text:  'We honour each client\'s independence, preferences, and personal boundaries.',
  },
];

export default function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-heading">

      <div className="container">
        <div className="about__grid">

          {/* ── Left: Story & Values ── */}
          <div className="about__content">

            <p className="section-label">Our Story</p>
            <h2 className="section-title" id="about-heading">
              Who We Are
            </h2>

            <p className="section-subtitle">
              Double D Home Health Care was founded with a single purpose — to
              bring professional, compassionate health and domestic support to
              homes across Osogbo and the Osun State region.
            </p>

            {/* Mission quote */}
            <blockquote className="about__mission">
              "We believe every individual deserves quality care in the comfort
              and familiarity of their own home."
            </blockquote>

            {/* Values list */}
            <ul className="about__values" aria-label="Our core values">
              {VALUES.map(({ icon, title, text }) => (
                <li key={title} className="about__value-item">
                  <div className="about__value-icon" aria-hidden="true">{icon}</div>
                  <div className="about__value-text">
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ul>

          </div>

          {/* ── Right: Address & Hours ── */}
          <div className="about__visual">

            {/* Address card */}
            <div className="about__address-card" aria-label="Agency location">
              <p className="about__address-card-title">Find Us</p>

              <div className="about__address-line">
                <span className="about__address-icon" aria-hidden="true">📍</span>
                <div className="about__address-text">
                  <strong>Street Address</strong>
                  Omi-Eran Road, Funfun,<br />
                  After Ayeni Junction
                </div>
              </div>

              <div className="about__address-line">
                <span className="about__address-icon" aria-hidden="true">🏙️</span>
                <div className="about__address-text">
                  <strong>City & State</strong>
                  Osogbo, Osun State, Nigeria
                </div>
              </div>

              <div className="about__address-line">
                <span className="about__address-icon" aria-hidden="true">📞</span>
                <div className="about__address-text">
                  <strong>Phone / WhatsApp</strong>
                  Call or message us to book a visit
                </div>
              </div>
            </div>

            {/* Operating hours strip */}
            <div className="about__hours" aria-label="Opening hours">
              <div>
                <p className="about__hours-label">Working Hours</p>
                <p className="about__hours-value">Mon – Sat, 8am – 6pm</p>
              </div>
              <span className="about__hours-badge">Emergency calls available</span>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}