import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

export default function ModeloNike() {
  const { scene } = useGLTF("/models/air_jordan_1-optimo.glb");

  return (
    <Canvas camera={{ position: [5, 0, 15], fov: 30 }}>
      <ambientLight intensity={3.5} />
      <directionalLight position={[50, 50, 50]} />
      <OrbitControls 
        autoRotate={true}
      enableZoom />
      <primitive
        object={scene}
        scale={.2}
        position={[0, -1, 0]}
        rotation={[0, 0, 0]}
      />
    </Canvas>
  );
}
