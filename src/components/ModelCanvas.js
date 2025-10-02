import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Box } from "./shapes/Box"; // Simple demo shape

export default function ModelCanvas() {
  return (
    <div className="w-full max-w-2xl h-[450px] bg-gray-900 rounded-2xl shadow-2xl border-2 border-cyan-400 overflow-hidden">
      <Canvas camera={{ position: [3, 3, 3], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <Stage environment="city" intensity={0.8}>
          <Box />
        </Stage>
        <OrbitControls />
      </Canvas>
    </div>
  );
}