import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

export default function ModeloCorset() {
  const { scene } = useGLTF("/models/corset-optimo.glb");

  return (
    <Canvas camera={{ position: [0, 0, 0], fov: 30 }}>
      <ambientLight intensity={3.5} />
      <directionalLight position={[5, 5, 5]} />
      <OrbitControls
        enableRotate={false}
        enableZoom={true}
        enablePan={true}
      />
      <primitive
        object={scene}
        scale={10}
        position={[10, -100,100]}
        rotation={[0, 0, 0]}
      />
    </Canvas>
  );
}
