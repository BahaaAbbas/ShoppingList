import { useState } from "react";
import "./TechStore.css";
import Header from "./components/common/Header";
import ButtonTech from "./components/common/ButtonTech";
import Card from "./components/common/Card";
import Hero from "./components/common/Hero";
import { products } from "./data/products";

function TechStore() {
  const [itemCount, setItemCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

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

  return (
    <div className="min-h-screen">
      <Header itemCount={itemCount} />
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
    </div>
  );
}

export default TechStore;
