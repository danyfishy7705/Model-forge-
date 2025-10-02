import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export function Sphere(props) {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.y += 0.005;
    ref.current.rotation.x += 0.01;
  });
  return (
    <mesh ref={ref} {...props} castShadow>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#f59e42" metalness={0.7} roughness={0.2} />
    </mesh>
  );
}