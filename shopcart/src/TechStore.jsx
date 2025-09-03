import { useState } from "react";
import "./TechStore.css";
import Header from "./components/common/Header";
import ButtonTech from "./components/common/ButtonTech";
import { CiShoppingCart } from "react-icons/ci";
import Card from "./components/common/Card";
import Hero from "./components/common/Hero";
import { products } from "./data/products";

function TechStore() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />
      <main>
        <div className="tech h-[1200px]">
          <Hero />

          <div className="grid grid-cols-3">
            {products.map((prod, index) => {
              return (
                <Card
                  key={prod.id}
                  imageURL={prod.image}
                  title={prod.name}
                  description={prod.description}
                  price={prod.price}
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
