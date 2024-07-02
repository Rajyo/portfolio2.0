import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
    const { progress } = useProgress();
    return (
        <Html as='div' center className="flex flex-col" >
            <span className='canvas-loader'></span>
            <p className="font-extrabold mt-10 md:mt-0 text-sm" >
                {progress.toFixed(2)}%
            </p>
        </Html>
    );
};

export default CanvasLoader;