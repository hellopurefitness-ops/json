import { useState } from 'react';
import { menu } from '../data.js';

export default function Menu() {
  const categories = Object.keys(menu);
  const [active, setActive] = useState(categories[0]);

  return (
    <section id="menu" className="section menu">
      <div className="section__head">
        <p className="eyebrow">Café menu</p>
        <h2>Made to order, every time.</h2>
      </div>

      <div className="tabs" role="tablist">
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            className={`tab ${active === cat ? 'tab--active' : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <ul className="menu__list" key={active}>
        {menu[active].map((item) => (
          <li key={item.name} className="menu__item">
            <div>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </div>
            <span className="menu__dots" />
            <span className="menu__price">${item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
