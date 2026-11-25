import { useEffect, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Camera,
  Check,
  ChevronDown,
  ChevronRight,
  Coffee,
  CreditCard,
  Globe2,
  Heart,
  Menu,
  Package,
  Phone,
  Play,
  Quote,
  ScanLine,
  Send,
  ShieldCheck,
  ShoppingBag,
  Store,
  Truck,
  Users,
  WalletCards,
  X,
  Zap,
} from "lucide-react";

const navItems = [
  ["Home", "/"],
  ["Features", "/features"],
  ["Pricing", "/pricing"],
  ["About", "/about"],
  ["Contact", "/contact"],
];
const features = [
  [
    ScanLine,
    "Fast checkout",
    "Keep every line moving with a checkout flow built for busy hours.",
  ],
  [
    Package,
    "Inventory management",
    "Know what is in stock, what is selling, and what to reorder next.",
  ],
  [
    BarChart3,
    "Sales reports",
    "Turn daily sales into clear decisions with reports that make sense.",
  ],
  [
    Globe2,
    "Multi-branch support",
    "Run every location from one calm, connected workspace.",
  ],
];
const testimonials = [
  [
    "Maya Chen",
    "Owner, Daymark Cafe",
    "We stopped guessing about stock on week two. The whole team knows exactly what to do now.",
    "MC",
  ],
  [
    "Rafael Santos",
    "Manager, Corner Market",
    "Our evening close is 30 minutes faster, and the reports finally show us where profit is hiding.",
    "RS",
  ],
  [
    "Nadia Wilson",
    "Founder, Good Table",
    "It feels like a system made for people who are actually serving customers all day.",
    "NW",
  ],
];
const plans = [
  [
    "Basic",
    "29",
    "For focused single-location teams.",
    ["1 store location", "Unlimited products", "Sales and inventory reports"],
  ],
  [
    "Pro",
    "69",
    "For growing businesses that need more control.",
    [
      "Up to 5 locations",
      "Staff permissions",
      "Loyalty and advanced analytics",
    ],
    true,
  ],
  [
    "Enterprise",
    "Custom",
    "For operations ready to scale with confidence.",
    ["Unlimited locations", "Dedicated onboarding", "Custom integrations"],
  ],
];

function App() {
  const [path, setPath] = useState(window.location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);
  const navigate = (event, href) => {
    event.preventDefault();
    window.history.pushState({}, "", href);
    setPath(href);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="site-shell">
      <Header
        path={path}
        open={menuOpen}
        setOpen={setMenuOpen}
        navigate={navigate}
      />
      {path === "/" ? (
        <Home navigate={navigate} />
      ) : (
        <InnerPage path={path} navigate={navigate} />
      )}
      <Footer navigate={navigate} />
    </div>
  );
}

function Header({ path, open, setOpen, navigate }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="/" onClick={(e) => navigate(e, "/")}>
          <span className="brand-mark">
            <Store size={18} />
          </span>
          Company<span className="brand-dot">.</span>
        </a>
        <nav className={`main-nav ${open ? "is-open" : ""}`}>
          {navItems.map(([label, href]) => (
            <a
              className={path === href ? "active" : ""}
              href={href}
              key={href}
              onClick={(e) => navigate(e, href)}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a
            className="login-link"
            href="/login"
            onClick={(e) => navigate(e, "/login")}
          >
            Login
          </a>
          <a
            className="button button-primary button-small"
            href="/contact"
            onClick={(e) => navigate(e, "/contact")}
          >
            Free trial <ArrowRight size={15} />
          </a>
        </div>
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </header>
  );
}

function Home({ navigate }) {
  return (
    <main>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy fade-in">
            <div className="eyebrow">
              <i /> Retail, made clearer
            </div>
            <h1>
              Manage your store <em>effortlessly.</em>
            </h1>
            <p className="hero-text">
              The simple, powerful POS for businesses that care about every
              sale, every customer, and every detail.
            </p>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href="/contact"
                onClick={(e) => navigate(e, "/contact")}
              >
                Start your free trial <ArrowRight size={16} />
              </a>
              <a className="watch-link" href="#preview">
                <span className="play-icon">
                  <Play size={11} fill="currentColor" />
                </span>{" "}
                See how it works
              </a>
            </div>
            <div className="hero-note">
              <div className="avatar-stack">
                <span>MC</span>
                <span>RS</span>
                <span>NW</span>
              </div>
              Trusted by 2,000+ independent businesses
            </div>
          </div>
          <div className="hero-visual fade-in delay-1">
            <div className="hero-sun" />
            <PosDashboard />
          </div>
        </div>
        <div className="container hero-bottom">
          <span>BUILT FOR THE WAY YOU WORK</span>
          <div className="industry-list">
            <span>
              <Coffee size={16} /> Cafes
            </span>
            <span>
              <Utensils /> Restaurants
            </span>
            <span>
              <ShoppingBag size={16} /> Retail
            </span>
            <span>
              <Truck size={16} /> Minimarts
            </span>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Everything in sync"
            title={
              <>
                One system. <em>Less juggling.</em>
              </>
            }
            text="From the first scan to the last report, Company keeps your operation in rhythm."
          />
          <div className="feature-grid">
            {features.map(([Icon, title, text]) => (
              <article className="feature-card fade-in" key={title}>
                <div className="feature-icon">
                  <Icon size={21} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="/features" onClick={(e) => navigate(e, "/features")}>
                  Explore feature <ChevronRight size={15} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section story-section">
        <div className="container story-grid">
          <div className="story-art">
            <div className="receipt-card">
              <b>COMPANY</b>
              <small>#004829</small>
              <hr />
              <p>
                Matcha latte x 2 <b>$12.00</b>
              </p>
              <p>
                Almond croissant <b>$4.50</b>
              </p>
              <p className="muted">
                Service fee <b>$0.50</b>
              </p>
              <hr />
              <strong>
                Total <b>$17.00</b>
              </strong>
              <span className="paid-stamp">
                <Check size={12} /> PAID
              </span>
            </div>
            <div className="trend-card">
              <BarChart3 size={17} />
              <strong>+24.8%</strong>
              <small>This month</small>
              <div className="mini-chart">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>
          <div className="story-copy">
            <div className="eyebrow">
              <i /> Built for real life
            </div>
            <h2>
              Less admin.
              <br />
              <em>More momentum.</em>
            </h2>
            <p>
              Company gives you a clear view of your business so you can spend
              less time wrestling with spreadsheets and more time looking after
              the people who keep your doors open.
            </p>
            <ul className="check-list">
              <li>
                <Check size={16} /> Set up in minutes, not weeks
              </li>
              <li>
                <Check size={16} /> Support from real humans
              </li>
              <li>
                <Check size={16} /> Flexible enough to grow with you
              </li>
            </ul>
            <a
              className="text-link"
              href="/about"
              onClick={(e) => navigate(e, "/about")}
            >
              Meet Company <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="From the floor"
            title={
              <>
                Good things happen when <em>work flows.</em>
              </>
            }
          />
          <div className="testimonial-grid">
            {testimonials.map(([name, role, quote, initials]) => (
              <article className="testimonial-card" key={name}>
                <Quote size={24} className="quote-mark" />
                <p>“{quote}”</p>
                <div className="person">
                  <span className="person-avatar">{initials}</span>
                  <span>
                    <b>{name}</b>
                    <small>{role}</small>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section pricing-preview">
        <div className="container">
          <div className="pricing-header">
            <SectionIntro
              eyebrow="Simple pricing"
              title={
                <>
                  Start small. <em>Scale naturally.</em>
                </>
              }
              text="No hidden fees. No long contracts. Just a plan that makes sense for where you are today."
            />
            <a
              className="text-link"
              href="/pricing"
              onClick={(e) => navigate(e, "/pricing")}
            >
              Compare all plans <ArrowRight size={16} />
            </a>
          </div>
          <div className="price-grid">
            {plans.map((plan) => (
              <PriceCard plan={plan} key={plan[0]} navigate={navigate} />
            ))}
          </div>
        </div>
      </section>
      <Cta navigate={navigate} />
    </main>
  );
}

function PosDashboard() {
  return (
    <div className="dashboard-window" id="preview">
      <div className="window-top">
        <span className="window-dots">
          <i />
          <i />
          <i />
        </span>
        <span>Company / Dashboard</span>
        <b>AM</b>
      </div>
      <div className="dashboard-body">
        <aside className="dashboard-nav">
          <strong>
            <span className="tiny-mark">
              <Store size={10} />
            </span>{" "}
            company
          </strong>
          <span className="dash-active">
            <BarChart3 size={13} /> Overview
          </span>
          <span>
            <ShoppingBag size={13} /> Orders
          </span>
          <span>
            <Package size={13} /> Products
          </span>
          <span>
            <Users size={13} /> Customers
          </span>
          <span>
            <Zap size={13} /> Settings
          </span>
        </aside>
        <div className="dash-content">
          <div className="dash-greeting">
            <div>
              <small>MONDAY, JUNE 17, 2024</small>
              <h4>Good morning, Alex</h4>
            </div>
            <span>
              This week <ChevronDown size={12} />
            </span>
          </div>
          <div className="dash-stat-row">
            <div>
              <small>Net sales</small>
              <b>$24,680.40</b>
              <em>+12.5%</em>
            </div>
            <div>
              <small>Orders</small>
              <b>1,284</b>
              <em>+8.2%</em>
            </div>
            <div>
              <small>Avg. order</small>
              <b>$19.22</b>
              <em>+4.6%</em>
            </div>
          </div>
          <div className="dash-panels">
            <div className="sales-chart">
              <div className="panel-label">
                <span>Sales overview</span>
                <small>Last 7 days</small>
              </div>
              <div className="chart-bars">
                {[38, 54, 46, 72, 61, 84, 94].map((height, i) => (
                  <i
                    className={i === 6 ? "today" : ""}
                    style={{ height: `${height}%` }}
                    key={height}
                  />
                ))}
              </div>
              <div className="chart-days">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
            <div className="top-products">
              <div className="panel-label">
                <span>Top products</span>
                <small>View all</small>
              </div>
              {["Iced matcha latte", "Butter croissant", "Cold brew"].map(
                (item, i) => (
                  <div className="product-row" key={item}>
                    <span>0{i + 1}</span>
                    <b>{item}</b>
                    <small>${[2840, 1920, 1480][i]}</small>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function SectionIntro({ eyebrow, title, text }) {
  return (
    <div className="section-intro">
      <div className="eyebrow">
        <i /> {eyebrow}
      </div>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
function PriceCard({ plan, navigate }) {
  const [name, price, description, included, featured] = plan;
  return (
    <article className={`price-card ${featured ? "featured" : ""}`}>
      {featured && <span className="popular-badge">Most popular</span>}
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="price">
        <small>{price === "Custom" ? "" : "$"}</small>
        <strong>{price}</strong>
        {price !== "Custom" && <span>/ month</span>}
      </div>
      <a
        className={`button ${featured ? "button-primary" : "button-outline"}`}
        href="/contact"
        onClick={(e) => navigate(e, "/contact")}
      >
        {price === "Custom" ? "Talk to sales" : "Start free trial"}{" "}
        <ArrowRight size={15} />
      </a>
      <ul>
        {included.map((item) => (
          <li key={item}>
            <Check size={15} /> {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
function Cta({ navigate }) {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div>
          <span className="eyebrow light">
            <i /> Ready when you are
          </span>
          <h2>
            Make every day
            <br />
            <em>run a little better.</em>
          </h2>
        </div>
        <div>
          <p>
            Try Company free for 14 days. No card required, no pressure to
            continue.
          </p>
          <a
            className="button button-light"
            href="/contact"
            onClick={(e) => navigate(e, "/contact")}
          >
            Get started today <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

function InnerPage({ path, navigate }) {
  const content = {
    "/features": (
      <>
        <FeatureList />
        <Cta navigate={navigate} />
      </>
    ),
    "/pricing": (
      <>
        <PricingPage navigate={navigate} />
        <Faq />
        <Cta navigate={navigate} />
      </>
    ),
    "/about": (
      <>
        <AboutPage />
        <Cta navigate={navigate} />
      </>
    ),
    "/contact": <ContactPage />,
    "/blog": <BlogPage />,
    "/login": <LoginPage />,
  };
  const page =
    {
      "/features": [
        "The full picture",
        <>
          Everything your business needs to <em>move forward.</em>
        </>,
        "One focused workspace for your sales, stock, team, and customers.",
      ],
      "/pricing": [
        "Pricing that fits",
        <>
          A better system at <em>every stage.</em>
        </>,
        "Start with the essentials, then add more power as your business grows.",
      ],
      "/about": [
        "A little about us",
        <>
          Built to make business feel <em>more human.</em>
        </>,
        "Company is a small team with a big belief: good software should make your day lighter.",
      ],
      "/contact": [
        "Let us talk",
        <>
          Your next good day <em>starts here.</em>
        </>,
        "Tell us a little about your business. We will show you how Company can help.",
      ],
      "/blog": [
        "Ideas for the floor",
        <>
          Useful thoughts for <em>busy operators.</em>
        </>,
        "Practical notes on running a better shop, cafe, or restaurant.",
      ],
      "/login": [
        "Welcome back",
        <>
          Your business, <em>right where you left it.</em>
        </>,
        "The customer dashboard is ready when you are.",
      ],
    }[path] || null;
  return (
    <main className="inner-page">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-copy">
            <div className="eyebrow">
              <i /> {page[0]}
            </div>
            <h1>{page[1]}</h1>
            <p>{page[2]}</p>
          </div>
        </div>
      </section>
      <section className="section inner-content">
        <div className="container">{content[path]}</div>
      </section>
    </main>
  );
}
function FeatureList() {
  const list = [
    ...features,
    [
      WalletCards,
      "Multi-payment",
      "Accept cash, QR, cards, and whatever payment your customers prefer.",
    ],
    [
      Users,
      "Staff management",
      "Give your team the right access and keep every shift accountable.",
    ],
    [
      Heart,
      "Loyalty program",
      "Turn regulars into loyalists with rewards that feel personal.",
    ],
    [
      ShieldCheck,
      "Offline mode",
      "Keep taking orders even when the connection takes a break.",
    ],
    [
      Zap,
      "Multi-branch sync",
      "See every location in real time from one central dashboard.",
    ],
  ];
  return (
    <div className="full-feature-grid">
      {list.map(([Icon, title, text], i) => (
        <article className="large-feature" key={title}>
          <span className="feature-number">0{i + 1}</span>
          <div className="feature-icon">
            <Icon size={21} />
          </div>
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
      ))}
    </div>
  );
}
function PricingPage({ navigate }) {
  return (
    <>
      <div className="billing-toggle">
        <button className="selected">Monthly</button>
        <button>
          Yearly <span>Save 20%</span>
        </button>
      </div>
      <div className="price-grid">
        {plans.map((plan) => (
          <PriceCard plan={plan} key={plan[0]} navigate={navigate} />
        ))}
      </div>
    </>
  );
}
function Faq() {
  return (
    <div className="faq">
      <SectionIntro
        eyebrow="Questions, answered"
        title={
          <>
            No fine print. <em>Just clarity.</em>
          </>
        }
      />
      <div className="faq-list">
        {[
          "Can I change plans later?",
          "Do I need special hardware?",
          "Is there a free trial?",
          "What happens to my data if I cancel?",
        ].map((question) => (
          <details key={question}>
            <summary>
              {question}
              <ChevronDown size={17} />
            </summary>
            <p>
              Yes. Company is designed to stay flexible as your business
              changes. Our team can help you make the switch smoothly.
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}
function AboutPage() {
  return (
    <>
      <div className="about-story">
        <div>
          <h2>
            Software should make room for the <em>good stuff.</em>
          </h2>
          <p>
            Company started with a simple observation: small business owners
            were spending too much time working around their tools. We built a
            calmer, clearer way to run a store.
          </p>
        </div>
        <div className="stats-grid">
          <div>
            <b>2,000+</b>
            <span>businesses</span>
          </div>
          <div>
            <b>8,400+</b>
            <span>stores powered</span>
          </div>
          <div>
            <b>14</b>
            <span>countries</span>
          </div>
          <div>
            <b>99.9%</b>
            <span>uptime</span>
          </div>
        </div>
      </div>
      <div className="team-section">
        <SectionIntro
          eyebrow="The people behind Company"
          title={
            <>
              Small team. <em>Big care.</em>
            </>
          }
        />
        <div className="team-grid">
          {[
            ["AL", "Alex Lee", "Co-founder & CEO"],
            ["JM", "Jordan Miles", "Head of Product"],
            ["SO", "Sam Okafor", "Customer success"],
          ].map(([initials, name, role]) => (
            <div className="team-person" key={name}>
              <span>{initials}</span>
              <b>{name}</b>
              <small>{role}</small>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
function ContactPage() {
  return (
    <div className="contact-layout">
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-row">
          <label>
            Name
            <input placeholder="Your name" />
          </label>
          <label>
            Phone
            <input placeholder="+1 (555) 000-0000" />
          </label>
        </div>
        <label>
          Email
          <input type="email" placeholder="you@business.com" />
        </label>
        <label>
          Message
          <textarea placeholder="Tell us about your business..." rows="5" />
        </label>
        <button className="button button-primary">
          Send message <Send size={15} />
        </button>
      </form>
      <div className="contact-details">
        <ContactCard icon={Send} label="Telegram" value="@companysupport" />
        <ContactCard icon={Phone} label="Call us" value="+1 (555) 014-2222" />
        <ContactCard
          icon={CreditCard}
          label="Email"
          value="hello@company.com"
        />
        <div className="map-card">
          <strong>⌖</strong>
          <b>Company HQ</b>
          <small>24 Market Street, Austin TX</small>
        </div>
      </div>
    </div>
  );
}
function ContactCard({ icon: Icon, label, value }) {
  return (
    <div className="contact-card">
      <span className="feature-icon">
        <Icon size={18} />
      </span>
      <small>{label}</small>
      <b>{value}</b>
    </div>
  );
}
function BlogPage() {
  const articles = [
    [
      "The five-minute close",
      "Operations",
      "A practical checklist for ending your day with less admin.",
    ],
    [
      "Your menu is a product",
      "Growth",
      "Small changes that make ordering feel easier for everyone.",
    ],
    [
      "A calmer kind of busy",
      "Team",
      "How to build systems that support your busiest hours.",
    ],
    [
      "Stock that tells a story",
      "Inventory",
      "What your product movement is trying to tell you.",
    ],
  ];
  return (
    <div className="article-grid">
      {articles.map(([title, tag, text], i) => (
        <article className="article-card" key={title}>
          <div className={`article-art article-art-${i}`}>
            <span>0{i + 1}</span>
          </div>
          <small>
            {tag} <i>· 5 min read</i>
          </small>
          <h3>{title}</h3>
          <p>{text}</p>
          <a className="text-link" href="#read">
            Read article <ArrowRight size={15} />
          </a>
        </article>
      ))}
    </div>
  );
}
function LoginPage() {
  return (
    <div className="login-panel">
      <input placeholder="Work email" type="email" />
      <input placeholder="Password" type="password" />
      <button className="button button-primary">
        Log in <ArrowRight size={15} />
      </button>
    </div>
  );
}
function Footer({ navigate }) {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <a className="brand" href="/" onClick={(e) => navigate(e, "/")}>
            <span className="brand-mark">
              <Store size={18} />
            </span>
            Company<span className="brand-dot">.</span>
          </a>
          <p>Good software for good business.</p>
          <a href="mailto:hello@company.com">hello@company.com</a>
        </div>
        <div className="footer-links">
          <div>
            <b>Product</b>
            <a href="/features" onClick={(e) => navigate(e, "/features")}>
              Features
            </a>
            <a href="/pricing" onClick={(e) => navigate(e, "/pricing")}>
              Pricing
            </a>
            <a href="/integrations">Integrations</a>
          </div>
          <div>
            <b>Company</b>
            <a href="/about" onClick={(e) => navigate(e, "/about")}>
              About us
            </a>
            <a href="/contact" onClick={(e) => navigate(e, "/contact")}>
              Contact
            </a>
            <a href="/blog" onClick={(e) => navigate(e, "/blog")}>
              Resources
            </a>
          </div>
          <div>
            <b>Follow along</b>
            <a href="#instagram">
              <Camera size={15} /> Instagram
            </a>
            <a href="#telegram">
              <Send size={15} /> Telegram
            </a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2024 Company. All rights reserved.</span>
        <span>
          Privacy <i /> Terms <i /> Security
        </span>
      </div>
    </footer>
  );
}
const Utensils = () => <span className="simple-icon">✦</span>;

export default App;
