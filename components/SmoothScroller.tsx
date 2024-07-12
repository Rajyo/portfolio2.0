'use client'

import { ReactNode, useEffect } from 'react'
import Lenis from 'lenis'
const SmoothScroll = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
        const lenis = new Lenis({
            autoResize: true,
            duration: 2,
            easing: t => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            touchMultiplier: 2
        })
        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])
    return children
}

export default SmoothScroll

// "use client"

// import { useEffect, useLayoutEffect, useRef } from 'react';
// import Tempus from '@studio-freight/tempus';
// import Lenis from '@studio-freight/lenis';
// import { usePathname } from 'next/navigation';

// export default function SmoothScroller() {
//     const lenis = useRef<Lenis | null>(null);
//     const pathname = usePathname();

//     useEffect(() => {
//         if (lenis.current) lenis.current.scrollTo(0, { immediate: true });
//     }, [pathname, lenis]);

//     useLayoutEffect(() => {
//         lenis.current = new Lenis({
//             smoothWheel: true,
//             // Customize other instance settings here
//         });

//         const resize = setInterval(() => {
//             lenis.current!.resize();
//         }, 150);

//         function onFrame(time: number) {
//             lenis.current!.raf(time);
//         }

//         const unsubscribe = Tempus.add(onFrame);

//         return () => {
//             unsubscribe();
//             clearInterval(resize);
//             lenis.current!.destroy();
//             lenis.current = null;
//         };

//     }, []);

//     return null;

// }
