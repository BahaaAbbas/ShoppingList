import React from "react";
import ButtonTech from "./ButtonTech";
import { CiShoppingCart } from "react-icons/ci";

const Card = ({ imageURL, title, description, price, onAddToCart }) => {
  return (
    <div className="  py-4">
      <div className="rounded-xl overflow-hidden shadow-xl bg-white transition-transform transform hover:scale-105 duration-300 max-w-sm mx-auto">
        <img
          className="w-full h-auto object-cover"
          src={imageURL}
          alt={title}
        />
        <div className="p-6">
          <h2 className="font-bold text-primary text-xl mb-2">{title}</h2>
          <p className="text-secondary text-sm mb-4">{description}</p>
          <p className="text-blue-500 font-bold text-2xl mb-4">${price}</p>
          <ButtonTech
            title="Add To Cart"
            icon={<CiShoppingCart />}
            onAddToCart={onAddToCart}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
