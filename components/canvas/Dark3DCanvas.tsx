import { OrbitControls } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import React from 'react'
import { TextureLoader } from 'three'

const Dark3DCanvas = () => {
  const [darkColor, darkNormal] = useLoader(TextureLoader, [
    '/images/lambert3_baseColor.jpeg',
    '/images/normal.png'
  ])

  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 30 }}>
      <ambientLight intensity={2} />
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial map={darkColor} normalMap={darkNormal} />
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

export default React.memo(Dark3DCanvas)
