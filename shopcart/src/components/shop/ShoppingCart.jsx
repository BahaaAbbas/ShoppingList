import React from "react";
import { IoClose } from "react-icons/io5";
import ButtonTech from "../common/ButtonTech";
import ShoppingItem from "./ShoppingItem";

const ShoppingCart = ({
  cart,
  cartOpen,
  setCartOpen,
  setIsCheckoutOpen,
  totalPrice,
  onIncrease,
  onDecrease,
  onDelete,
}) => {
  if (!cartOpen) return null;

  return (
    <div className="fixed inset-0 z-1000 flex justify-end">
      <div
        className="absolute inset-0 backdrop-blur-sm"
        onClick={() => setCartOpen(false)}
      ></div>

      <div className="relative z-1000 w-[450px] bg-[#F6F6F9]  flex flex-col justify-between">
        <div className="p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Shopping Cart</h1>

          <IoClose
            className="w-8 h-8  rounded-md hover:bg-green-400 cursor-pointer transition-all "
            onClick={() => setCartOpen(false)}
          />
        </div>
        {cart.length === 0 ? (
          <div className="flex flex-1 items-center justify-center">
            <p className="text-gray-500 text-lg">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="bg-white h-full overflow-y-auto border-y border-y-gray-300 ">
              {cart.map((item, index) => {
                return (
                  <ShoppingItem
                    key={index}
                    id={item.id}
                    title={item.name}
                    price={item.price}
                    imageURL={item.image}
                    quantity={item.quantity}
                    onIncrease={() => onIncrease(item.id)}
                    onDecrease={() => onDecrease(item.id)}
                    onDelete={() => onDelete(item.id)}
                  />
                );
              })}
            </div>

            <div className=" p-4 flex flex-col justify-between gap-2">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Total: </h1>
                <p className="font-bold text-2xl text-[#60A4F8]">
                  ${totalPrice}
                </p>
              </div>

              <ButtonTech
                title={"Proceed to Checkout"}
                onClick={() => {
                  setIsCheckoutOpen(true);
                  setCartOpen(false);
                }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
