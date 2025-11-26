import React from "react";

const ButtonTech = ({ title, icon, onClick }) => {
  return (
    <button
      className={`
        w-full
        flex items-center justify-center
        gap-2
        px-4 py-2 m-1
        font-bold text-white
        text-md
        cursor-pointer
        rounded-lg
        bg-gradient-to-r from-green-500 to-blue-500
        hover:from-green-600 hover:to-blue-600
        transition-colors duration-300
      `}
      onClick={() => onClick?.()}
    >
      {icon && <span className="text-3xl">{icon}</span>}
      {title}
    </button>
  );
};

export default ButtonTech;
