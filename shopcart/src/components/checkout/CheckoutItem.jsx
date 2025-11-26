import React from "react";

const CheckoutItem = ({ title, price, quantity }) => {
  return (
    <div className="m-4   border border-gray-200 rounded-lg bg-white p-4 shadow-sm hover:shadow-md transition">
      <div className=" flex items-center justify-between  gap-2">
        <h3 className="font-semibold text-gray-800">
          {title} x {quantity}
        </h3>
        <p className="text-[#60A4F8] font-semibold text-xl">${price}</p>
      </div>
    </div>
  );
};

export default CheckoutItem;
