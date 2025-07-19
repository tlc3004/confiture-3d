import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

export default function ModeloCaterpillar() {
  const { scene } = useGLTF("/models/caterpillar_work_boot-optimo.glb");

  return (
    <Canvas camera={{ position: [30, 20, 30], fov: 35 }}>
      <ambientLight intensity={10} />
      <directionalLight position={[90, 90, 50]} />
      <OrbitControls
       autoRotate={true}
      enableZoom />
      <primitive
        object={scene}
        scale={60}
        position={[0, -10, 0]}
        rotation={[0, 0.2, 0]}
      />
    </Canvas>
  );
}
