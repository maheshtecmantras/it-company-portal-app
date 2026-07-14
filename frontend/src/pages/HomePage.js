import ServiceCard from '../components/ServiceCard';
import TestimonialSlider from '../components/TestimonialSlider';

const services = [
  {
    title: 'Custom Software Delivery',
    description:
      'Product-minded engineers, UX strategists, and technical architects that move from discovery to launch without dropping the ball.',
    icon: '✨'
  },
  {
    title: 'Cloud & DevOps',
    description:
      'Secure public-cloud architecture, governance, and on-call practices that ensure you are resilient even as traffic surges.',
    icon: '☁️'
  },
  {
    title: 'Managed Teams',
    description:
      'Dedicated pods that scale up and down, sit on the same platform, and collaborate with your internal product teams.',
    icon: '🤝'
  }
];

const processSteps = [
  {
    title: 'Strategic discovery',
    detail: 'Align goals, surface resks, and validate the roadmap with prototypes and research artifacts.'
  },
  {
    title: 'Focused delivery',
    detail: 'Ship features in weekly milestones backed by story-driven teams and observability dashboards.'
  },
  {
    title: 'Continuous improvement',
    detail: 'Cloud cost optimization, ongoing QA, and a partnership cadence that keeps executive sponsors happy.'
  }
];

const testimonials = [
  {
    quote:
      'Our platform launch was a success—this team drove every sprint with discipline and deep technical insight.',
    author: 'COO, Fintech Scale-up'
  },
  {
    quote: 'They treated our product like their own, shipping transparent roadmaps and polished releases each month.',
    author: 'VP of Product, Healthcare SaaS'
  },
  {
    quote: 'We now hit 99.99% uptime with a multi-region infrastructure designed and run by them.',
    author: 'Head of Ops, Marketplace'
  }
];

function HomePage() {
  return (
    <div>
      <section className="hero">
        <p className="eyebrow">Tecmantras Solutions</p>
        <h1>Tecmantras build and operate bold software platforms.</h1>
        <p>
          Tecmantras collaborate with ambitious IT companies to modernize platforms, launch new SaaS offerings, and.
          staff mission-critical programs with engineers who move quickly and reliably.
        </p>
        <div className="hero-cta">
          <a className="btn primary" href="#contact">
            Talk with Tecmantras
          </a>
          <a className="btn secondary" href="/login">
            Client login
          </a>
        </div>
        <div className="hero-stats">
          <div>
            <strong>120+</strong>
            <span>global engineers</span>
          </div>
          <div>
            <strong>8</strong>
            <span>industries served</span>
          </div>
          <div>
            <strong>4.9/5</strong>
            <span>client NPS</span>
          </div>
        </div>
      </section>

      <section id="services" className="section services">
        <div className="section-header">
          <p className="eyebrow">Client impact</p>
          <h2>Trusted by growing IT leaders</h2>
        </div>
        <div className="services-grid">
          {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
           ))}
        </div>
      </section>

      <section className="section process">
        <h2>Execution that feels effortless</h2>
        <p className="section-subtitle">
          Every Tecmantras engagement follows a transparent cadence—discovery, delivery, and optimization—so
          leadership knows what to expect and when.
        </p>
        <div className="process-steps">
          {processSteps.map((step) => (
            <article className="process-step" key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </article>
          ))
        </div>
      </section>

      <section className="testimonials">
        <div className="section-header">
          <p className="eyebrow">Client impact</p>
          <h2>Trusted by growing IT leaders</h2>
        </div>
        <TestimonialSlider testimonials={testimonials} />
      </section>

      <section className="cta-panel" id="contact">
        <div>
          <p className="eyebrow">Ready to scale</p>
          <h2>Tell us about your next technical initiative.</h2>
          <p>
            Our leadership team at Tecmantras Solutions will respond within one business day with a scoped team and
            kickoff plan.
          </p>
        </div>
        <div className="cta-panel-actions">
          <a className="btn primary" href="mailto:hello@tecmantras.com">
            Schedule a call
          </a>
          <a className="btn secondary" href="/register">
            Request access
          </a>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
