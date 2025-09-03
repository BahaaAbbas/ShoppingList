import { Button } from "@mui/material";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
  return (
    <header className="border-b border-b-[#F8F8FD] backdrop-blur-sm bg-white/70 sticky top-0 z-100">
      <div className=" flex justify-between items-center p-4">
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
        >
          <CiShoppingCart className="w-5 h-5 mr-2" />
          Cart
        </Button>
      </div>
      <main></main>
    </header>
  );
};

export default Header;
