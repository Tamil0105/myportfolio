// 'use client';
// import { Canvas, useLoader } from '@react-three/fiber';
// import { useRef } from 'react';
// import { useScroll } from 'framer-motion';
// import { motion } from 'framer-motion-3d';
// import {  TextureLoader } from 'three';

// const Earth: React.FC = () => {
//     const scene = useRef<HTMLCanvasElement | null>(null);
//     const { scrollYProgress } = useScroll({
//         target: scene,
//         offset: ['start end', 'end start']
//     });

//     const [color, normal, aoMap] = useLoader(TextureLoader, [
//         '/color.jpg',
//         '/normal.png',
//         '/occlusion.jpg'
//     ]);

//     return (
//         <Canvas ref={scene}>
//             <ambientLight intensity={0.1} />
//             <directionalLight intensity={3.5} position={[1, 0, -0.25]} />
//             <motion.mesh scale={2.5} rotation-y={scrollYProgress.get()}>
//                 <sphereGeometry args={[1, 64, 64]} />
//                 <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
//             </motion.mesh>
//         </Canvas>
//     );
// };

// export default Earth;