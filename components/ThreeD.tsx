"use client"

import { Suspense } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const Model = () => {
    // location of the 3D model
    const gltf = useLoader(GLTFLoader, "/Sci-fi-Skybox/scene.gltf");
    return (
        <>
            {/* Use scale to control the size of the 3D model */}
            <primitive object={gltf.scene} scale={1}/>
        </>
    );
};


export default function ThreeD() {
    return (
        <div className="h-screen w-screen flex items-center justify-center place-items-center cursor-grabbing">
            <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 40 }}>
                <ambientLight intensity={10} />
                <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                <Suspense fallback={null}>
                    <Model />
                    <Environment preset="city" />
                </Suspense>
                <OrbitControls autoRotate autoRotateSpeed={5} />
            </Canvas>


        </div>
    )
}
