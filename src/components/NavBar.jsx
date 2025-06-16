import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-[100px] bg-[#6B006A] z-50 flex items-center">
        <img
          src="/assets/Logo_white-cropped.svg"
          alt="Logo"
          className="w-[10em] h-[6em] ml-5"
        />
      </div>
    </>
  );
};

export default NavBar;
