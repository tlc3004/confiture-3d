import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

export default function ModeloNikeZoom() {
  const { scene } = useGLTF("/models/nike_air_zoom_pegasus_36-optimo.glb");

  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[50, 50, 50]} />
      <OrbitControls 
        autoRotate={true}
      enableZoom />
      <primitive
        object={scene}
        scale={1}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      />
    </Canvas>
  );
}
