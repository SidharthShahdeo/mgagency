import React from "react";

/**
 * Single-file React landing page using Bootstrap 5 (no Tailwind).
 * - Import Bootstrap CSS in main.jsx: `import 'bootstrap/dist/css/bootstrap.min.css'`
 * - Optional JS for components: `import 'bootstrap/dist/js/bootstrap.bundle.min.js'`
 */

function Feature({ icon, title, text }) {
  return (
    <div className="d-flex gap-3 align-items-start">
      <div className="rounded-3 p-3 bg-dark bg-opacity-10">{icon}</div>
      <div>
        <h5 className="mb-1">{title}</h5>
        <p className="mb-0 text-secondary">{text}</p>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, text, cta }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <div className="d-flex align-items-center gap-2 mb-2">
          <div className="rounded-3 p-2 bg-light">{icon}</div>
          <h6 className="mb-0 fw-semibold">{title}</h6>
        </div>
        <p className="text-secondary mb-3">{text}</p>
        <button className="btn btn-link p-0">{cta} →</button>
      </div>
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div className="text-center">
      <div className="fs-2 fw-bold">{number}</div>
      <div className="text-secondary">{label}</div>
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-white text-dark">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center gap-2" href="#home">
            <span className="rounded-2" style={{ width: 32, height: 32, background: "linear-gradient(135deg,#6366f1,#ec4899,#fb923c)" }} />
            <strong>MGAgency</strong>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
            <span className="navbar-toggler-icon" />
          </button>
          <div id="nav" className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto gap-lg-3">
              <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="btn btn-dark" href="#contact">Get Quote</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="py-5 py-md-6" style={{ background: "linear-gradient(135deg,#fb7185,#a855f7,#6366f1)", color: "#fff" }}>
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold">Affordable Website Designing & Software Development in India</h1>
              <p className="mt-3 lead">We blend expertise, modern tech, and a product mindset to build high‑quality websites, web apps, and mobile experiences that scale with your business.</p>
              <div className="row row-cols-1 row-cols-sm-3 g-3 mt-4">
                <div className="col"><Feature icon={<span role="img" aria-label="sparkles">✨</span>} title="We have the Expertise" text="Seasoned engineers & designers deliver reliably." /></div>
                <div className="col"><Feature icon={<span role="img" aria-label="cpu">🧠</span>} title="We have the Technology" text="Modern stacks, clean code, and automation." /></div>
                <div className="col"><Feature icon={<span role="img" aria-label="rocket">🚀</span>} title="We transform ideas" text="From concept to launch with measurable impact." /></div>
              </div>
              <div className="d-flex gap-2 mt-4">
                <a href="#services" className="btn btn-light fw-semibold">Explore Services</a>
                <a href="#contact" className="btn btn-outline-light">Talk to us</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="rounded-4 p-3" style={{ background: "rgba(255,255,255,.15)", border: "1px solid rgba(255,255,255,.4)" }}>
                <div className="bg-white rounded-3 p-5 text-center">
                  <div className="mx-auto rounded-3 mb-3" style={{ width: 56, height: 56, background: "linear-gradient(135deg,#6366f1,#ec4899)" }} />
                  <p className="text-secondary mb-0">Placeholder for illustration or dashboard mockup. Replace with your asset.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="fw-bold">Services We Excel In</h2>
            <p className="text-secondary mb-0">A full‑stack partner for your digital needs. Pick one or bundle a few—our teams ship fast and iterate even faster.</p>
          </div>
          <div className="row g-3">
            <div className="col-sm-6 col-lg-4"><ServiceCard icon={<span>📱</span>} title="Website Designing" text="Modern, responsive, and accessible websites tailored to your brand." cta="Upgrade your website" /></div>
            <div className="col-sm-6 col-lg-4"><ServiceCard icon={<span>💻</span>} title="Software Development" text="Robust web apps, APIs, and internal tools using battle‑tested stacks." cta="See how we build" /></div>
            <div className="col-sm-6 col-lg-4"><ServiceCard icon={<span>🔎</span>} title="SEO Optimization" text="On‑page, technical, and content SEO to improve visibility and ROI." cta="Run my audit" /></div>
            <div className="col-sm-6 col-lg-4"><ServiceCard icon={<span>🛒</span>} title="E‑commerce Development" text="High‑converting storefronts with smooth checkout and analytics." cta="Boost my store" /></div>
            <div className="col-sm-6 col-lg-4"><ServiceCard icon={<span>📲</span>} title="Mobile App Development" text="iOS/Android apps with shared codebases and native performance." cta="Request a proposal" /></div>
            <div className="col-sm-6 col-lg-4"><ServiceCard icon={<span>🛠️</span>} title="Legacy & Support" text="Refactors, migrations, and ongoing maintenance that de‑risk delivery." cta="Start now" /></div>
          </div>
        </div>
      </section>

      {/* About / Stats */}
      <section id="about" className="py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6 order-2 order-lg-1">
              <h3 className="fw-bold">Software Development</h3>
              <p className="text-secondary">We specialize in scalable architectures, TypeScript-first development, and automated CI/CD. Our delivery playbook blends agile rituals with a product mindset—so you get speed without sacrificing quality.</p>
              <div className="row text-center g-3">
                <div className="col-4"><Stat number="250+" label="Projects shipped" /></div>
                <div className="col-4"><Stat number="30%" label="Avg. faster TTM" /></div>
                <div className="col-4"><Stat number="98%" label="Client retention" /></div>
              </div>
              <div className="d-flex gap-2 mt-4">
                <a href="#projects" className="btn btn-dark">View Projects</a>
                <a href="#contact" className="btn btn-outline-secondary">Get in touch</a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="border rounded-4 p-4 bg-white">
                <div className="row g-3">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="col-4">
                      <div className="bg-light rounded-3" style={{ height: 80 }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-4">
            <h3 className="fw-bold">Why Choose Advsoft</h3>
            <p className="text-secondary mb-0">Four reasons customers rely on us for critical builds.</p>
          </div>
          <div className="row g-3">
            {[
              { n: "1", t: "Senior talent only", d: "Work directly with experienced engineers and designers." },
              { n: "2", t: "Transparent delivery", d: "Weekly demos, burn‑up charts, and clear acceptance criteria." },
              { n: "3", t: "Design meets code", d: "Systems thinking from UX to API contracts for fewer surprises." },
              { n: "4", t: "Secure & scalable", d: "OWASP‑aware patterns, cloud native infra, and observability." },
            ].map((item) => (
              <div key={item.n} className="col-md-6 col-lg-3">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="text-secondary fw-semibold">{item.n}</div>
                    <div className="fw-semibold mt-1">{item.t}</div>
                    <p className="text-secondary mb-0 mt-2">{item.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-5">
        <div className="container">
          <div className="p-4 p-md-5 rounded-4" style={{ background: "linear-gradient(90deg,#6366f1,#ec4899,#f43f5e)", color: "#fff" }}>
            <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
              <div>
                <h3 className="fw-bold mb-1">Ready to build something great?</h3>
                <p className="mb-0">Tell us about your goals and we’ll craft a plan to get you there.</p>
              </div>
              <a href="#" className="btn btn-light fw-semibold">Request a Quote</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-top py-4">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <div className="d-flex align-items-center gap-2">
            <span className="rounded-2" style={{ width: 32, height: 32, background: "linear-gradient(135deg,#6366f1,#ec4899,#fb923c)" }} />
            <strong>MGAgency</strong>
          </div>
          <small className="text-secondary">© {new Date().getFullYear()} Advsoft. All rights reserved.</small>
          <div className="d-flex gap-3">
            <a href="#" className="text-decoration-none">Privacy</a>
            <a href="#" className="text-decoration-none">Terms</a>
            <a href="#" className="text-decoration-none">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
