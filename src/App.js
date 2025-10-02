import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ModelCanvas from "./components/ModelCanvas";
import LoginPopup from "./components/LoginPopup";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-950">
      <Navbar onLoginClick={() => setShowLogin(true)} />
      <Hero onLoginClick={() => setShowLogin(true)} />
      <div className="flex-1 flex justify-center items-center">
        <ModelCanvas />
      </div>
      {showLogin && <LoginPopup onClose={() => setShowLogin(false)} />}
      {/* Future: Premium, Gallery, Footer */}
    </div>
  );
}

export default App;