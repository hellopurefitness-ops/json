import { useState } from 'react';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import About from './About.jsx';
import Menu from './Menu.jsx';
import Beans from './Beans.jsx';
import Recipes from './Recipes.jsx';
import Visit from './Visit.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import CartDrawer from './CartDrawer.jsx';

export default function App() {
  const [cart, setCart] = useState({}); // { beanId: quantity }
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (id) => {
    setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
    setCartOpen(true);
  };

  const updateQty = (id, delta) => {
    setCart((c) => {
      const qty = (c[id] || 0) + delta;
      const next = { ...c };
      if (qty <= 0) delete next[id];
      else next[id] = qty;
      return next;
    });
  };

  const count = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <>
      <Navbar cartCount={count} onCartClick={() => setCartOpen(true)} />
      <main>
        <Hero />
        <About />
        <Menu />
        <Beans onAdd={addToCart} />
        <Recipes />
        <Visit />
        <Contact />
      </main>
      <Footer />
      <CartDrawer
        open={cartOpen}
        cart={cart}
        onClose={() => setCartOpen(false)}
        onUpdate={updateQty}
        onClear={() => setCart({})}
      />
    </>
  );
}
