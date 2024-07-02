"use client"

import React, { Suspense } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import CanvasLoader from "./CanvasLoader";

const Model = () => {
    const gltf = useLoader(GLTFLoader, "/rainbow/scene.gltf"); //good
    // const gltf = useLoader(GLTFLoader, "/deline/scene.gltf"); //average
    // const gltf = useLoader(GLTFLoader, "/new_blackhole/scene.gltf"); //good
    return (
        <primitive object={gltf.scene} scale={0.7} />
        // <primitive object={gltf.scene} scale={1} />
        // <primitive object={gltf.scene} scale={0.45} />
    );
};

const MobileCanvas = () => {
    return (
        <div className="h-screen w-screen flex items-center justify-center place-items-center cursor-grabbing">
            {/* <Canvas shadows dpr={[1, 2]} camera={{ position: [4, 4, 4], fov: 30 }}> */}
            <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 32 }}>
                <ambientLight intensity={5} />
                <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                <Suspense fallback={<CanvasLoader />}>
                    <Model />
                    <Environment preset="city" />
                </Suspense>
                <OrbitControls autoRotate autoRotateSpeed={5} />
            </Canvas>
        </div>
    )
}

export default React.memo(MobileCanvas)