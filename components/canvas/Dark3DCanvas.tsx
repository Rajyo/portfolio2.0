"use client"

import React, { Suspense } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, OrbitControls, Preload } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import CanvasLoader from "./CanvasLoader";


const Model = () => {
    const gltf = useLoader(GLTFLoader, "/mars/scene.gltf");
    return (
        <primitive object={gltf.scene} scale={0.115} />
    );
};

const Dark3DCanvas = () => {
    return (
        <div className="h-screen w-screen md:h-[135vh] md:w-[135vw] lg:h-[155vh] lg:w-[155vw] xl:h-[170vh] xl:w-[170vw] flex items-center justify-center place-items-center cursor-grabbing">
            <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 30 }}>
                <ambientLight intensity={0.05} />
                <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                <Suspense fallback={<CanvasLoader />}>
                    <Model />
                    <Environment preset="city" />
                    <Preload all />
                </Suspense>
                <OrbitControls autoRotate autoRotateSpeed={2} />
            </Canvas>
        </div>
    )
}

export default React.memo(Dark3DCanvas)