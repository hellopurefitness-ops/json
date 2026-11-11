import { useEffect, useState } from 'react';

// Fields we don't show as sections on a recipe card.
const HIDDEN = new Set(['id', 'name', 'slug', '_archived', '_draft']);

// "recipe-history" -> "Recipe History"
const label = (key) =>
  key.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

const isHtml = (v) => typeof v === 'string' && /<\/?[a-z][\s\S]*>/i.test(v);

function apiUrl(path) {
  // Webflow Cloud may mount the app under a path (e.g. /app), so prefix it.
  const base = (import.meta.env?.BASE_URL || '/').replace(/\/$/, '');
  return `${base}/${path}`;
}

function FieldValue({ value }) {
  if (value == null || value === '') return null;
  if (typeof value === 'object' && value.url) {
    return <img className="recipe__img" src={value.url} alt={value.alt || ''} />;
  }
  if (isHtml(value)) {
    // Rich-text fields come from your own CMS as HTML.
    return <div className="recipe__rich" dangerouslySetInnerHTML={{ __html: value }} />;
  }
  return <p>{String(value)}</p>;
}

export default function Recipes() {
  const [state, setState] = useState({ status: 'loading', items: [], error: '' });
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch(apiUrl('api/recipes'))
      .then(async (r) => {
        const body = await r.json().catch(() => ({}));
        if (!r.ok) throw new Error(body.error || `Request failed (${r.status})`);
        return body;
      })
      .then((body) => !cancelled && setState({ status: 'ready', items: body.items || [], error: '' }))
      .catch((err) => !cancelled && setState({ status: 'error', items: [], error: err.message }));
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="recipes" className="section recipes">
      <div className="section__head">
        <p className="eyebrow">From our kitchen</p>
        <h2>Recipes to brew at home.</h2>
      </div>

      {state.status === 'loading' && <p className="recipes__msg">Loading recipes…</p>}

      {state.status === 'error' && (
        <p className="recipes__msg recipes__msg--error">Couldn't load recipes: {state.error}</p>
      )}

      {state.status === 'ready' && state.items.length === 0 && (
        <p className="recipes__msg">No recipes published yet. Add some in the Webflow CMS and publish them.</p>
      )}

      {state.status === 'ready' && state.items.length > 0 && (
        <div className="recipes__grid">
          {state.items.map((r) => {
            const open = openId === r.id;
            const fields = Object.entries(r).filter(([k]) => !HIDDEN.has(k));
            const image = fields.find(([, v]) => v && typeof v === 'object' && v.url);
            const textFields = fields.filter(([, v]) => !(v && typeof v === 'object'));
            return (
              <article key={r.id} className={`recipe ${open ? 'recipe--open' : ''}`}>
                {image && <FieldValue value={image[1]} />}
                <div className="recipe__body">
                  <h3>{r.name}</h3>
                  <button
                    className="btn btn--small"
                    aria-expanded={open}
                    onClick={() => setOpenId(open ? null : r.id)}
                  >
                    {open ? 'Hide recipe' : 'View recipe'}
                  </button>
                  {open && (
                    <div className="recipe__details">
                      {textFields.map(([k, v]) => (
                        <div key={k} className="recipe__field">
                          <h4>{label(k)}</h4>
                          <FieldValue value={v} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
