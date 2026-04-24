/**
 * Contact.jsx
 * Contact section with info cards and a CTA call-to-action banner.
 */

import './Contact.css';

// Contact info cards data
const CONTACT_CARDS = [
  {
    id:    'location',
    icon:  '📍',
    label: 'Our Location',
    value: 'Omi-Eran Road, Funfun',
    sub:   'After Ayeni Junction, Osogbo, Osun State',
  },
  {
    id:    'phone',
    icon:  '📞',
    label: 'Phone & WhatsApp',
    value: 'Call Us Today',
    sub:   'Available Mon – Sat, 8am – 6pm',
  },
  {
    id:    'hours',
    icon:  '🕐',
    label: 'Working Hours',
    value: 'Mon – Sat',
    sub:   '8:00 AM – 6:00 PM\nEmergency support available',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">

      <div className="container">

        {/* ── Section Header ── */}
        <header className="contact__header">
          <p className="section-label">Get in Touch</p>
          <h2 className="section-title" id="contact-heading">
            Contact Us
          </h2>
          <p className="section-subtitle">
            Ready to arrange care for a loved one? Reach out to us today and
            we'll be happy to discuss how we can help.
          </p>
        </header>

        {/* ── Contact Cards ── */}
        <div className="contact__cards">
          {CONTACT_CARDS.map(({ id, icon, label, value, sub }) => (
            <div key={id} className="contact-card" aria-label={label}>
              <div className="contact-card__icon" aria-hidden="true">{icon}</div>
              <p className="contact-card__label">{label}</p>
              <p className="contact-card__value">{value}</p>
              <p className="contact-card__sub">{sub}</p>
            </div>
          ))}
        </div>

        {/* ── CTA Banner ── */}
        <div className="contact__cta-banner" role="complementary" aria-label="Call to action">
          <div className="contact__cta-text">
            <h3>Ready to Get Started?</h3>
            <p>
              Let us bring professional, compassionate care directly to your
              home. Contact Double D Home Health Care today.
            </p>
          </div>
          <button
            className="contact__cta-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
            ↑ Back to Top
          </button>
        </div>

      </div>
    </section>
  );
}