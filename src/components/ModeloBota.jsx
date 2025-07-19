import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

export default function ModeloBota() {
  const { scene } = useGLTF("/models/coraline_riding_boot-optimo.glb");

  return (
    <Canvas camera={{ position: [4, 1, 2], fov: 35 }}>
      <ambientLight intensity={50} />
      <directionalLight position={[50, 50, 50]} />
      <OrbitControls
       autoRotate={true}
      enableZoom />
      <primitive
        object={scene}
        scale={5.5}
        position={[0, -1, 0]}
        rotation={[0, 0.2, 0]}
      />
    </Canvas>
  );
}
