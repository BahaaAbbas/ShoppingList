import React from "react";
import shoplist from "../../../src/assets/shoplist.PNG";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShoppingItem = ({
  id,
  title,
  price,
  quantity,
  imageURL,
  onIncrease,
  onDecrease,
  onDelete,
}) => {
  const handleDeleteClick = () => {
    toast.info(` Removing ${title}...`, {
      position: "top-center",
      autoClose: 1000,
    });

    setTimeout(() => {
      onDelete(id);
      toast.success(`${title} removed from cart`, {
        position: "top-center",
        autoClose: 2000,
      });
    }, 1000);
  };

  return (
    <div className="m-4 flex items-center justify-between gap-4 border border-gray-200 rounded-lg bg-white p-4 shadow-sm hover:shadow-md transition">
      <img
        src={imageURL}
        alt="item"
        className="w-20 h-20 object-cover rounded-md"
      />

      <div className="flex flex-col flex-1 gap-2">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-[#60A4F8] font-semibold text-xl">${price}</p>

        <div className="flex items-center gap-3">
          <button
            className="p-1 rounded-md border border-gray-300 hover:bg-green-400 cursor-pointer"
            onClick={() => onDecrease(id)}
          >
            <FaMinus size={18} />
          </button>
          <p className="w-6 text-center font-medium text-xl">{quantity}</p>
          <button
            className="p-1 rounded-md border border-gray-300  hover:bg-green-400 cursor-pointer"
            onClick={() => onIncrease(id)}
          >
            <FaPlus size={18} />
          </button>
        </div>
      </div>

      <button className="text-red-400 hover:text-red-700 transition cursor-pointer">
        <MdDelete size={32} onClick={handleDeleteClick} />
      </button>
    </div>
  );
};

export default ShoppingItem;
