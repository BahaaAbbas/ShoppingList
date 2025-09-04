import React from "react";
import shoplist from "../../../src/assets/shoplist.PNG";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";

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
    toast(
      ({ closeToast }) => (
        <div className="flex flex-col gap-2">
          <p>
            Are you sure you want to remove <b>{title}</b>?
          </p>
          <div className="flex gap-2 justify-end">
            <button
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              onClick={closeToast}
            >
              Cancel
            </button>
            <button
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={() => {
                onDelete(id);
                toast.dismiss();
                toast.success(`${title} removed from cart`);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ),
      { autoClose: false }
    );
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
          <button className="p-1 rounded-md border border-gray-300 hover:bg-green-400 cursor-pointer">
            <FaMinus size={18} onClick={() => onDecrease(id)} />
          </button>
          <p className="w-6 text-center font-medium text-xl">{quantity}</p>
          <button className="p-1 rounded-md border border-gray-300  hover:bg-green-400 cursor-pointer">
            <FaPlus size={18} onClick={() => onIncrease(id)} />
          </button>
        </div>
      </div>

      <button className="text-red-400 hover:text-red-700 transition cursor-pointer">
        <MdDelete size={32} onClick={handleDeleteClick} />
      </button>
      <ToastContainer />
    </div>
  );
};

export default ShoppingItem;
