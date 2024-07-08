"use client"

import React, { Suspense } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, OrbitControls, Preload } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import CanvasLoader from "./CanvasLoader";

const Model = () => {
    const gltf = useLoader(GLTFLoader, "/rainbow/scene.gltf");
    return (
        <primitive object={gltf.scene} scale={0.65} />
    );
};

const MobileCanvas = () => {
    return (
        <div className="h-screen w-screen flex items-center justify-center place-items-center">
            <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 32 }}>
                <ambientLight intensity={5} />
                <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                <Suspense fallback={<CanvasLoader />}>
                    <Model />
                    <Environment preset="city" />
                    <Preload all />
                </Suspense>
                <OrbitControls autoRotate autoRotateSpeed={5} enableRotate={false} />
            </Canvas>
        </div>
    )
}

export default React.memo(MobileCanvas)