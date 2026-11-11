import { useState, useEffect } from 'react';
import { beans } from './data.js';

export default function CartDrawer({ open, cart, onClose, onUpdate, onClear }) {
  const [checkedOut, setCheckedOut] = useState(false);
  const items = beans.filter((b) => cart[b.id]);
  const total = items.reduce((sum, b) => sum + b.price * cart[b.id], 0);

  useEffect(() => {
    if (!open) setCheckedOut(false);
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const checkout = () => {
    setCheckedOut(true);
    onClear();
  };

  return (
    <>
      <div className={`overlay ${open ? 'is-open' : ''}`} onClick={onClose} />
      <aside className={`drawer ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <div className="drawer__head">
          <h3>Your bag</h3>
          <button className="drawer__close" onClick={onClose} aria-label="Close cart">
            ×
          </button>
        </div>

        {checkedOut ? (
          <div className="drawer__empty">
            <p>🎉 Order placed! (Demo only — no payment was taken.)</p>
          </div>
        ) : items.length === 0 ? (
          <div className="drawer__empty">
            <p>Your bag is empty.</p>
          </div>
        ) : (
          <>
            <ul className="drawer__list">
              {items.map((b) => (
                <li key={b.id}>
                  <span className="drawer__swatch" style={{ background: b.hue }} />
                  <div className="drawer__info">
                    <strong>{b.name}</strong>
                    <span>${b.price} each</span>
                  </div>
                  <div className="qty">
                    <button onClick={() => onUpdate(b.id, -1)} aria-label="Decrease">−</button>
                    <span>{cart[b.id]}</span>
                    <button onClick={() => onUpdate(b.id, 1)} aria-label="Increase">+</button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="drawer__foot">
              <div className="drawer__total">
                <span>Subtotal</span>
                <strong>${total.toFixed(2)}</strong>
              </div>
              <button className="btn btn--primary btn--block" onClick={checkout}>
                Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
