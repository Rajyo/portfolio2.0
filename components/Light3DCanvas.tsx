"use client"

import { Suspense } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const Model = () => {
    const gltf = useLoader(GLTFLoader, "/alien_planet/scene.gltf"); //light-blue
    // const gltf = useLoader(GLTFLoader, "/earth/scene.gltf");
    return (
        <primitive object={gltf.scene} scale={1} />
        // <primitive object={gltf.scene} scale={1} />
    );
};

export default function Light3DCanvas() {
    return (
        <div className="h-[125vh] w-[125vw] flex items-center justify-center place-items-center cursor-grabbing">
            <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 30 }}>
                <ambientLight intensity={7} />
                <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                <Suspense fallback={null}>
                    <Model />
                    <Environment preset="city" />
                </Suspense>
                <OrbitControls autoRotate autoRotateSpeed={2} />
            </Canvas>
        </div>
    )
}
