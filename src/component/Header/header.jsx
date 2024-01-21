import React from "react";

export default function Header() {
  return (
    <div
      style={{ position: "absolute", backgroundColor: "#242424" }}
      className="bg-white p-4 w-full top-0"
    >
      <img
        src="/healphi_logo.svg"
        alt="logo"
        style={{ height: "44px", objectFit: "contain" }}
      />
    </div>
  );
}
