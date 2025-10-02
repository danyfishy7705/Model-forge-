import React from "react";

export default function Navbar({ onLoginClick }) {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-gray-950 bg-opacity-80 shadow-lg">
      <div className="font-display text-3xl tracking-tight text-cyan-400">Model Forge</div>
      <div>
        <button
          className="bg-cyan-400 text-gray-950 px-5 py-2 rounded-lg font-bold hover:bg-cyan-300 transition"
          onClick={onLoginClick}
        >
          Login
        </button>
      </div>
    </nav>
  );
}