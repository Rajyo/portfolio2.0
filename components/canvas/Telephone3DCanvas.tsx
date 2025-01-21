'use client'

import React, { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { Center, Environment, OrbitControls, Preload } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'
import CanvasLoader from './CanvasLoader'
import dynamic from 'next/dynamic'
const ContactGlobe = dynamic(() => import('../contactSection/ContactGlobe'), {
  ssr: false
})

const ModelTelephoneOnTable = () => {
  const gltf = useLoader(GLTFLoader, '/telephone-on-a-table/scene.gltf')
  return <primitive object={gltf.scene} scale={0.21} />
}
const ModelRetroTelephone = () => {
  const gltf = useLoader(GLTFLoader, '/retro_telephone/scene.gltf')
  return <primitive object={gltf.scene} scale={0.167} />
}

const Telephone3DCanvas = () => {
  var hasTouchScreen = false
  if ('maxTouchPoints' in navigator) {
    hasTouchScreen = navigator.maxTouchPoints > 0
  }

  return (
    <>
      <div className='hidden h-full w-full md:flex'>
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 1, 4], fov: 30 }}>
          <ambientLight intensity={7} />
          <spotLight
            intensity={0.5}
            angle={0.1}
            penumbra={1}
            position={[10, 15, 10]}
            castShadow
          />
          <Suspense fallback={<CanvasLoader />}>
            <Center>
              <ModelRetroTelephone />
            </Center>
            <Environment preset='city' />
            <Preload all />
          </Suspense>
          <OrbitControls
            autoRotate
            autoRotateSpeed={5}
            enableRotate={true}
            enableZoom={false}
            enablePan={false}
          />
        </Canvas>
      </div>
      <div className='h-full w-full md:hidden'>
        {hasTouchScreen ? (
          <div className='h-full w-full py-5'>
            <ContactGlobe />
          </div>
        ) : (
          <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ position: [0, 1, 4], fov: 30 }}
            style={{ touchAction: 'auto' }}
          >
            <ambientLight intensity={7} />
            <spotLight
              intensity={0.5}
              angle={0.1}
              penumbra={1}
              position={[10, 15, 10]}
              castShadow
            />
            <Suspense fallback={<CanvasLoader />}>
              <Center>
                <ModelTelephoneOnTable />
              </Center>
              <Environment preset='city' />
              <Preload all />
            </Suspense>
            <OrbitControls
              autoRotate
              autoRotateSpeed={5}
              enableRotate={false}
              enableZoom={false}
            />
          </Canvas>
        )}
      </div>
    </>
  )
}

export default React.memo(Telephone3DCanvas)
