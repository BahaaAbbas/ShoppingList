import { Button } from "@mui/material";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const Header = ({ itemCount, setCartOpen }) => {
  return (
    <header className="border-b border-b-[#F8F8FD] backdrop-blur-sm bg-white/70 sticky top-0 z-100">
      <div className=" flex justify-between items-center py-4 px-8">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
          TechStore
        </h1>
        <Button
          variant="outlined"
          sx={{
            position: "relative",
            display: "flex",
            padding: "0.5rem 1rem",
            alignItems: "start",
            borderColor: "#3b82f6",
            color: "#3b82f6",
            "&:hover": {
              backgroundColor: "#3b82f6",
              color: "#ffffff",
              borderColor: "#3b82f6",
            },
          }}
          onClick={() => setCartOpen(true)}
        >
          <CiShoppingCart className="w-5 h-5 mr-2" />
          Cart
          {itemCount > 0 && (
            <span
              className="absolute top-0 right-0 
                 flex items-center justify-center 
                 w-6 h-6 text-xs text-white  -translate-y-1/2 translate-x-1/2 
                 bg-blue-500 rounded-full"
            >
              {itemCount}
            </span>
          )}
        </Button>
      </div>
    </header>
  );
};

export default Header;
