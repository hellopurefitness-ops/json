import { useState } from 'react';
import { contact } from './data.js';

const empty = { name: '', email: '', message: '' };

function validate(v) {
  const errors = {};
  if (!v.name.trim()) errors.name = 'Please tell us your name.';
  if (!/^\S+@\S+\.\S+$/.test(v.email)) errors.email = 'Please enter a valid email.';
  if (v.message.trim().length < 10) errors.message = 'A few more words, please (10+ characters).';
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      // Hook this up to your backend or a form service (Formspree, EmailJS, etc.)
      console.log('Form submitted:', values);
      setSent(true);
      setValues(empty);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="contact__info">
        <p className="eyebrow">Say hello</p>
        <h2>Wholesale, events, or just a question?</h2>
        <p>We usually reply within a day.</p>
        <dl>
          <dt>Phone</dt>
          <dd>{contact.phone}</dd>
          <dt>Email</dt>
          <dd>{contact.email}</dd>
        </dl>
      </div>

      {sent ? (
        <div className="contact__thanks">
          <h3>Thanks — message received!</h3>
          <p>This demo form doesn't send anywhere yet; connect it to a backend to receive messages.</p>
          <button className="btn btn--ghost" onClick={() => setSent(false)}>
            Send another
          </button>
        </div>
      ) : (
        <form className="form" onSubmit={onSubmit} noValidate>
          {[
            ['name', 'Name', 'input'],
            ['email', 'Email', 'input'],
            ['message', 'Message', 'textarea'],
          ].map(([field, label, tag]) => {
            const Tag = tag;
            return (
              <label key={field} className={`field ${errors[field] ? 'field--error' : ''}`}>
                <span>{label}</span>
                <Tag
                  name={field}
                  type={field === 'email' ? 'email' : 'text'}
                  rows={tag === 'textarea' ? 5 : undefined}
                  value={values[field]}
                  onChange={onChange}
                />
                {errors[field] && <small>{errors[field]}</small>}
              </label>
            );
          })}
          <button type="submit" className="btn btn--primary">
            Send message
          </button>
        </form>
      )}
    </section>
  );
}
