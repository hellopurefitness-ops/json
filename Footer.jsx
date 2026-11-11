import { brand } from '../data.js';

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer__brand">◐ {brand.name}</span>
      <span>© {new Date().getFullYear()} {brand.name} Coffee Roasters. Built with React.</span>
    </footer>
  );
}
