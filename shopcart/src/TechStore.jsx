import { useEffect, useState } from "react";
import "./TechStore.css";
import Header from "./components/common/Header";
import Card from "./components/common/Card";
import Hero from "./components/common/Hero";
import { products } from "./data/products";
import ShoppingCart from "./components/shop/ShoppingCart";
import Checkout from "./components/checkout/Checkout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TechStore() {
  const [itemCount, setItemCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleAddToCart = (product) => {
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
    toast.success(`${product.name} added successfuly to cart `, {
      position: "top-center",
      autoClose: 2000,
    });
  };

  useEffect(() => {
    setItemCount(cartItems.reduce((acc, item) => acc + item.quantity, 0));
  }, [cartItems]);

  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);
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

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen relative">
      <Header itemCount={itemCount} setCartOpen={setIsShoppingCartOpen} />
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
        </div>
      </main>

      <ShoppingCart
        cart={cartItems}
        cartOpen={isShoppingCartOpen}
        setCartOpen={setIsShoppingCartOpen}
        setIsCheckoutOpen={setIsCheckoutOpen}
        totalPrice={totalPrice}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        onDelete={handleDelete}
      />

      <Checkout
        cart={cartItems}
        totalPrice={totalPrice}
        isCheckoutOpen={isCheckoutOpen}
        setIsCheckoutOpen={setIsCheckoutOpen}
        clearCart={handleClearCart}
      />
      <ToastContainer />
    </div>
  );
}

export default TechStore;
