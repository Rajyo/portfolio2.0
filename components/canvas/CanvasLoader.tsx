import { Html, useProgress } from '@react-three/drei'

const CanvasLoader = () => {
  const { progress } = useProgress()
  return (
    <Html as='div' center className='flex flex-col'>
      <span className='canvas-loader'></span>
      <p className='mt-10 text-sm font-extrabold md:mt-0'>
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default CanvasLoader
