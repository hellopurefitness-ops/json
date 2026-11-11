import { useEffect, useState } from 'react';
import { brand } from './data.js';

const links = [
  ['about', 'Story'],
  ['menu', 'Menu'],
  ['beans', 'Shop Beans'],
  ['recipes', 'Recipes'],
  ['visit', 'Visit'],
  ['contact', 'Contact'],
];

export function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Navbar({ cartCount, onCartClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <button className="nav__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <span className="nav__mark">◐</span> {brand.name}
      </button>

      <nav className={`nav__links ${menuOpen ? 'is-open' : ''}`}>
        {links.map(([id, label]) => (
          <button key={id} onClick={() => go(id)}>
            {label}
          </button>
        ))}
      </nav>

      <div className="nav__actions">
        <button className="nav__cart" onClick={onCartClick} aria-label="Open cart">
          Bag <span className="nav__badge">{cartCount}</span>
        </button>
        <button
          className="nav__burger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
