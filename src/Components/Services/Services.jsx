/**
 * Services.jsx
 * Displays all four care services in a responsive card grid.
 * Each card shows an icon, title, description, and feature list.
 */

import './Services.css';

// Service data — easy to update without touching JSX
const SERVICES = [
  {
    id:          'elderly',
    icon:        '🧓',
    title:       'Elderly Care & Companionship',
    description:
      'We provide warm, respectful companionship and daily living assistance for elderly clients, helping them maintain dignity and independence in the comfort of their own home.',
    features: [
      'Daily companionship visits',
      'Personal hygiene assistance',
      'Mobility & fall prevention support',
      'Social engagement & activities',
    ],
  },
  {
    id:          'post-surgery',
    icon:        '🩺',
    title:       'Post-Surgery Recovery Care',
    description:
      'Skilled recovery support for patients returning home after surgery or hospitalisation, ensuring a safe, smooth, and comfortable healing journey.',
    features: [
      'Wound dressing & monitoring',
      'Medication reminders',
      'Light physiotherapy support',
      'Progress reporting to family',
    ],
  },
  {
    id:          'nursing',
    icon:        '💉',
    title:       'Nursing & Medical Support',
    description:
      'Our qualified nursing staff deliver professional clinical care at home, from chronic condition management to regular health monitoring and medical procedures.',
    features: [
      'Vital signs monitoring',
      'Chronic disease management',
      'IV & catheter care',
      'Coordination with doctors',
    ],
  },
  {
    id:          'housekeeping',
    icon:        '🏡',
    title:       'Housekeeping & Domestic Help',
    description:
      'A clean, safe home environment supports health and wellbeing. Our domestic helpers keep the household running smoothly so families can focus on what matters most.',
    features: [
      'Cleaning & laundry',
      'Meal preparation',
      'Grocery errands',
      'Home organisation',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="services" aria-labelledby="services-heading">

      <div className="container">

        {/* ── Section Header ── */}
        <header className="services__header">
          <p className="section-label">What We Offer</p>
          <h2 className="section-title" id="services-heading">
            Our Care Services
          </h2>
          <p className="section-subtitle">
            Every service is delivered with professionalism, empathy, and a
            deep commitment to improving the lives of our clients and their families.
          </p>
        </header>

        {/* ── Services Grid ── */}
        <div className="services__grid">
          {SERVICES.map(({ id, icon, title, description, features }) => (
            <article key={id} className="service-card" aria-label={title}>

              {/* Icon */}
              <div className="service-card__icon-wrapper" aria-hidden="true">
                {icon}
              </div>

              {/* Title */}
              <h3 className="service-card__title">{title}</h3>

              {/* Description */}
              <p className="service-card__description">{description}</p>

              {/* Feature bullets */}
              <ul className="service-card__features" aria-label={`${title} features`}>
                {features.map((feature) => (
                  <li key={feature} className="service-card__feature">
                    <span className="service-card__feature-dot" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}