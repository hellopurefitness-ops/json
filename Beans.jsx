import { useState } from 'react';
import { beans } from '../data.js';

const filters = ['All', 'Light', 'Medium', 'Dark'];

export default function Beans({ onAdd }) {
  const [filter, setFilter] = useState('All');
  const shown = filter === 'All' ? beans : beans.filter((b) => b.roast === filter);

  return (
    <section id="beans" className="section beans">
      <div className="section__head section__head--row">
        <div>
          <p className="eyebrow">Shop beans</p>
          <h2>This week's roasts.</h2>
        </div>
        <div className="chips">
          {filters.map((f) => (
            <button
              key={f}
              className={`chip ${filter === f ? 'chip--active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="beans__grid">
        {shown.map((b) => (
          <article key={b.id} className="bean">
            <div className="bean__bag" style={{ '--hue': b.hue }}>
              <span className="bean__roast">{b.roast} roast</span>
              <span className="bean__origin">{b.name.split(' ')[0]}</span>
            </div>
            <div className="bean__body">
              <h3>{b.name}</h3>
              <ul className="bean__notes">
                {b.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
              <div className="bean__foot">
                <span className="bean__price">${b.price} / 340 g</span>
                <button className="btn btn--small" onClick={() => onAdd(b.id)}>
                  Add to bag
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
