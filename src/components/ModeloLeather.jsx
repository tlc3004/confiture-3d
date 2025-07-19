import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

export default function ModeloLeather() {
  const { scene } = useGLTF("/models/leather_shoes-optimo.glb");

  return (
    <Canvas camera={{ position: [10, 0, 120], fov: 30 }}>
      <ambientLight intensity={3.5} />
      <directionalLight position={[100, 50, 50]} />
      <OrbitControls 
        autoRotate={true}
      enableZoom />
      <primitive
        object={scene}
        scale={.1}
        position={[-10, -20, 0]}
        rotation={[0, 0, 0]}
      />
    </Canvas>
  );
}
