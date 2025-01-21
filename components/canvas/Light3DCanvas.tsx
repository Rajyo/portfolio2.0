import { OrbitControls } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import React from 'react'
import { TextureLoader } from 'three'

const Light3DCanvas = () => {
  const [brightColor, brightNormal] = useLoader(TextureLoader, [
    '/images/Planet_baseColor.png',
    '/images/Planet_metallicRoughness.png'
  ])

  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 30 }}>
      <ambientLight intensity={5} />
      <directionalLight intensity={5} position={[1, 0, -0.25]} />
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial map={brightColor} normalMap={brightNormal} />
        <OrbitControls
          autoRotate
          autoRotateSpeed={2}
          enableRotate={false}
          enableZoom={false}
          enablePan={false}
          enableDamping={false}
        />
      </mesh>
    </Canvas>
  )
}

export default React.memo(Light3DCanvas)
