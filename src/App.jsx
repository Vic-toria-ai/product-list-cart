import { ProductCard } from "./ProductCard";
import { Cart } from "./Cart";
import data from "./data.json";
import { useState } from "react";



function App() {
  // product = {
  // id, name, price, quantity
  // }
  const [cart, setCart] = useState([]);

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };
  const clearCart = () => setCart([]);
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);

      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <main className="container my-2">
      <div className="row g-4">
        <div className="col-md-8">
          <h1>Desserts</h1>
          <div className="row g-3 mt-3">
            {data.map((item) => (
              <div key={item.name} className="col-lg-4">
                <ProductCard
                  cart={cart}
                  data={item}
                  decreaseQuantity={decreaseQuantity}
                  addToCart={addToCart}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-4">
          <Cart
            cart={cart}
            total={total}
            totalQuantity={totalQuantity}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
