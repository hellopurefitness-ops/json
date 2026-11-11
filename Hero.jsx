import { brand } from '../data.js';
import { scrollToId } from './Navbar.jsx';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__text">
        <p className="eyebrow">Roastery &amp; Café · Est. 2019</p>
        <h1>
          {brand.tagline.split(',')[0]},
          <br />
          <em>{brand.tagline.split(',')[1].trim()}</em>
        </h1>
        <p className="hero__intro">{brand.intro}</p>
        <div className="hero__cta">
          <button className="btn btn--primary" onClick={() => scrollToId('beans')}>
            Shop our beans
          </button>
          <button className="btn btn--ghost" onClick={() => scrollToId('menu')}>
            See the menu
          </button>
        </div>
      </div>

      <div className="hero__art" aria-hidden="true">
        <svg viewBox="0 0 400 400">
          <defs>
            <radialGradient id="glow" cx="50%" cy="45%" r="55%">
              <stop offset="0%" stopColor="#f2b880" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#f2b880" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="200" cy="190" r="190" fill="url(#glow)" />
          {/* steam */}
          <g className="steam" stroke="#e9d8c4" strokeWidth="6" fill="none" strokeLinecap="round">
            <path d="M165 120 q-18 -30 0 -60 q18 -30 0 -55" />
            <path d="M200 115 q-18 -30 0 -60 q18 -30 0 -55" />
            <path d="M235 120 q-18 -30 0 -60 q18 -30 0 -55" />
          </g>
          {/* cup */}
          <path d="M110 150 h180 l-18 150 a30 30 0 0 1 -30 26 h-84 a30 30 0 0 1 -30 -26 z" fill="#2b1a12" />
          <path d="M290 175 a40 40 0 0 1 0 80" stroke="#2b1a12" strokeWidth="18" fill="none" />
          <ellipse cx="200" cy="150" rx="90" ry="16" fill="#6b3d24" />
          <ellipse cx="200" cy="150" rx="70" ry="10" fill="#8a5233" />
          {/* saucer */}
          <ellipse cx="200" cy="335" rx="140" ry="18" fill="#3d261a" />
        </svg>
      </div>
    </section>
  );
}
