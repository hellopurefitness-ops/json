const stats = [
  ['12', 'partner farms'],
  ['4 kg', 'per roast batch'],
  ['48 h', 'roast-to-shelf'],
];

const pillars = [
  {
    title: 'Direct trade',
    text: 'We visit every farm we buy from and pay well above fair-trade minimums.',
  },
  {
    title: 'Oak-fired roasting',
    text: 'A slow roast over seasoned oak brings out sweetness without bitterness.',
  },
  {
    title: 'Always fresh',
    text: 'Beans are roasted weekly and never sit on a shelf longer than two weeks.',
  },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section__head">
        <p className="eyebrow">Our story</p>
        <h2>From a garage roaster to your morning cup.</h2>
      </div>

      <div className="about__stats">
        {stats.map(([num, label]) => (
          <div key={label} className="stat">
            <span className="stat__num">{num}</span>
            <span className="stat__label">{label}</span>
          </div>
        ))}
      </div>

      <div className="pillars">
        {pillars.map((p, i) => (
          <article key={p.title} className="pillar">
            <span className="pillar__num">0{i + 1}</span>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
