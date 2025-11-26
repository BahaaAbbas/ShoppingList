import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import ButtonTech from "../common/ButtonTech";
import CheckoutItem from "./CheckoutItem";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = ({
  cart,
  totalPrice,
  setIsCheckoutOpen,
  isCheckoutOpen,
  clearCart,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (!isCheckoutOpen) return null;

  const handleCheckout = () => {
    if (!name.trim() || !email.trim()) {
      toast.error(" Please fill in your name and email before proceeding.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
      return;
    }

    toast.success(`Thanks ${name}, your order has been received!`, {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });

    setIsCheckoutOpen(false);
    clearCart();
    setName("");
    setEmail("");
  };

  return (
    <div className=" m-1  fixed inset-0 z-1000 flex justify-center">
      <div
        className="absolute inset-0 backdrop-blur-sm"
        onClick={() => setIsCheckoutOpen(false)}
      ></div>

      <div className="relative z-1000 w-[500px] bg-[#F6F6F9]  flex flex-col justify-between">
        <div className="p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Checkout</h1>

          <IoClose
            className="w-8 h-8  rounded-md hover:bg-green-400 cursor-pointer transition-all "
            onClick={() => setIsCheckoutOpen(false)}
          />
        </div>
        <div className="bg-white h-full overflow-y-auto border-y border-y-gray-300 ">
          <h1 className="m-4 font-bold">Order Summary</h1>
          {cart.map((item, index) => {
            return (
              <CheckoutItem
                title={item.name}
                price={item.price}
                quantity={item.quantity}
              />
            );
          })}
        </div>

        <div className=" p-4 ">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Total: </h1>
            <p className="font-bold text-2xl text-[#60A4F8]">${totalPrice}</p>
          </div>
        </div>

        <div className="p-4 flex flex-col ">
          <label className="text-gray-700 font-semibold">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <label className="text-gray-700 font-semibold">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <ButtonTech title={"Complete Order"} onClick={handleCheckout} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
