import React from "react";
import heroImage from "../assets/hero.png"; // Placeholder: add your own image later

export default function Hero({ onLoginClick }) {
  return (
    <header className="text-center py-12 px-4 md:px-0">
      <h1 className="font-display text-5xl md:text-7xl text-cyan-400 mb-4">
        Build <span className="text-white">3D Digital Models</span>
      </h1>
      <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-6">
        Create, visualize, and share stunning 3D objects.<br />
        High-quality visuals, intuitive tools, and premium features at your fingertips.
      </p>
      <button
        className="bg-cyan-400 text-gray-950 px-8 py-3 rounded-lg font-bold text-xl hover:bg-cyan-300 transition shadow-lg"
        onClick={onLoginClick}
      >
        Get Started
      </button>
      <div className="flex justify-center mt-8">
        <img
          src={heroImage}
          alt="3D Model Showcase"
          className="w-full max-w-xl rounded-2xl shadow-2xl border-4 border-cyan-400"
        />
      </div>
    </header>
  );
}