import { useState } from "react";
import "./TechStore.css";
import Header from "./components/common/Header";
import ButtonTech from "./components/common/ButtonTech";
import Card from "./components/common/Card";
import Hero from "./components/common/Hero";
import { products } from "./data/products";
import ShoppingCart from "./components/shop/ShoppingCart";

function TechStore() {
  const [itemCount, setItemCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    setItemCount((prev) => prev + 1);
    setCartItems((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      if (exist) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const handleIncrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleDelete = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div className="min-h-screen relative">
      <Header
        itemCount={itemCount}
        cartOpen={isShoppingCartOpen}
        setCartOpen={setIsShoppingCartOpen}
      />
      <main>
        <div className="tech ">
          <Hero />

          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] w-full gap-4 ">
            {products.map((prod, index) => {
              return (
                <Card
                  key={prod.id}
                  imageURL={prod.image}
                  title={prod.name}
                  description={prod.description}
                  price={prod.price}
                  onAddToCart={() => handleAddToCart(prod)}
                />
              );
            })}
          </div>

          <ButtonTech title="Submit" />
        </div>
      </main>

      <ShoppingCart
        cart={cartItems}
        cartOpen={isShoppingCartOpen}
        setCartOpen={setIsShoppingCartOpen}
        totalPrice={totalPrice}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default TechStore;
