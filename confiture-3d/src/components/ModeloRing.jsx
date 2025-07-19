import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

export default function ModeloRing() {
  const { scene } = useGLTF("/models/ring_gold_with_diamond-optimo.glb");

  return (
    <Canvas camera={{ position: [0, 0, 1], fov: 50 }}>
      <ambientLight intensity={70} />
      <directionalLight position={[50, 50, 50]} />
      <OrbitControls 
        autoRotate={true}
      enableZoom />
      <primitive
        object={scene}
        scale={.9}
        position={[0,0, 0]}
        rotation={[0, 0, 0]}
      />
    </Canvas>
  );
}
