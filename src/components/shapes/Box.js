import React from "react";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export function Box(props) {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.y += 0.01;
    ref.current.rotation.x += 0.005;
  });
  return (
    <mesh ref={ref} {...props} castShadow>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="#06b6d4" metalness={0.6} roughness={0.2} />
    </mesh>
  );
}