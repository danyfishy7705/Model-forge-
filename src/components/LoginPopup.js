import React from "react";

export default function LoginPopup({ onClose }) {
  // Connect to Firebase Auth later
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl border-2 border-cyan-400 w-full max-w-sm">
        <h2 className="font-display text-2xl text-cyan-400 mb-4">Sign In</h2>
        <button
          className="w-full py-3 px-4 bg-cyan-400 text-gray-950 font-bold rounded-lg hover:bg-cyan-300 mb-3 transition"
        >
          Sign in with Google
        </button>
        {/* Add more providers as needed */}
        <button
          className="w-full py-2 px-4 mt-2 text-cyan-400 hover:underline"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}