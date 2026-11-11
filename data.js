// All site content lives here — edit this file to make the site your own.

export const brand = {
  name: 'Ember & Oak',
  tagline: 'Small-batch coffee, roasted slow.',
  intro:
    'We source single-origin beans directly from growers, roast them in small batches over oak, and serve them in a room built for lingering.',
};

export const menu = {
  Espresso: [
    { name: 'Espresso', desc: 'Double shot of our house blend', price: 3.0 },
    { name: 'Cortado', desc: 'Equal parts espresso and warm milk', price: 3.75 },
    { name: 'Flat White', desc: 'Velvety microfoam, ristretto shots', price: 4.25 },
    { name: 'Oak-Smoked Mocha', desc: 'Dark chocolate, smoked sea salt', price: 5.0 },
  ],
  'Slow Bar': [
    { name: 'Pour Over', desc: 'Rotating single origin, brewed to order', price: 4.5 },
    { name: 'Siphon', desc: 'Theatrical, clean, and bright', price: 6.0 },
    { name: 'Cold Brew', desc: 'Steeped 18 hours, served over ice', price: 4.75 },
  ],
  Bakery: [
    { name: 'Cardamom Bun', desc: 'Swedish-style, baked every morning', price: 4.0 },
    { name: 'Brown Butter Cookie', desc: 'Flaky salt, dark chocolate chunks', price: 3.25 },
    { name: 'Olive Oil Cake', desc: 'Orange zest, crème fraîche', price: 4.5 },
  ],
};

export const beans = [
  {
    id: 'ethiopia',
    name: 'Ethiopia Guji',
    notes: ['Blueberry', 'Jasmine', 'Honey'],
    roast: 'Light',
    price: 18,
    hue: '#c98b5a',
  },
  {
    id: 'colombia',
    name: 'Colombia Huila',
    notes: ['Red apple', 'Caramel', 'Cocoa'],
    roast: 'Medium',
    price: 16,
    hue: '#9a5a36',
  },
  {
    id: 'sumatra',
    name: 'Sumatra Kerinci',
    notes: ['Cedar', 'Molasses', 'Spice'],
    roast: 'Dark',
    price: 17,
    hue: '#5b3420',
  },
];

export const hours = [
  ['Mon – Fri', '7:00 am – 6:00 pm'],
  ['Saturday', '8:00 am – 7:00 pm'],
  ['Sunday', '8:00 am – 4:00 pm'],
];

export const contact = {
  address: '214 Alder Street, Portland, OR',
  phone: '(503) 555-0142',
  email: 'hello@emberandoak.example',
};
