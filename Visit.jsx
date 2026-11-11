import { hours, contact } from '../data.js';

function isOpenNow() {
  const now = new Date();
  const day = now.getDay(); // 0 = Sun
  const h = now.getHours() + now.getMinutes() / 60;
  if (day === 0) return h >= 8 && h < 16;
  if (day === 6) return h >= 8 && h < 19;
  return h >= 7 && h < 18;
}

export default function Visit() {
  const open = isOpenNow();

  return (
    <section id="visit" className="section visit">
      <div className="visit__card">
        <div>
          <p className="eyebrow">Visit us</p>
          <h2>Come sit a while.</h2>
          <p className="visit__addr">{contact.address}</p>
          <span className={`status ${open ? 'status--open' : 'status--closed'}`}>
            <span className="status__dot" /> {open ? 'Open now' : 'Closed right now'}
          </span>
        </div>

        <table className="hours">
          <tbody>
            {hours.map(([d, t]) => (
              <tr key={d}>
                <th>{d}</th>
                <td>{t}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
