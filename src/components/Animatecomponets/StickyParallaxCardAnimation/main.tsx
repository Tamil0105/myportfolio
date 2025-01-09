import { useScroll, motion, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Card from './card';
import { SiTypescript,SiAmazonwebservices } from "react-icons/si";
import { ImSphere } from "react-icons/im";
import {  FaReact, FaNode, FaDatabase } from 'react-icons/fa';

const projects = [
    {
      icon: <FaReact className="text-indigo-500 h-28 w-28"/>,
      title: "Frontend Development",
      color: "#e2fdff", // Light Blue
      description:
        "Building responsive and interactive user interfaces using HTML, CSS, and JavaScript and, React js and Next js ",
    },

    // {
    //   icon: <FaCogs className="text-green-500 h-28 w-28" />,
    //   title: "React Development",
    //   color: "#bfd7ff", // Dark Blue
    //   description:
    //     "Creating dynamic and high-performing web applications using React.js.",
    // },

    {
      icon: <FaNode className="text-red-500 h-28 w-28" />,
      title: "Backend Development",
      color: "#9bb1ff", // Light Blue
      description:
        "Developing scalable server-side applications and RESTful APIs using Node.js.",
    },

    {
      icon: <SiTypescript className="text-yellow-500 h-28 w-28" />,
      title: "Type Script",
      color: "#788bff", // Dark Blue
      description:
        "Using TypeScript in both backend (Node.js) and frontend development ensures code consistency, ",
    },
    // {
    //   icon: <FaShieldAlt className="text-blue-500 h-28 w-28" />,
    //   title: "Enhanced Security",
    //   color: "#5465ff", // Light Blue
    //   description:
    //     "Our solutions are built with industry-leading security measures to protect your data and users.",
    // },
    {
      icon: <FaDatabase className="text-purple-500 h-28 w-28" />,
      title: "Database Management",
      color: "#3559E0", // Dark Blue
      description:
        "Designing and managing databases using SQL and NoSQL database systems.",
    },
    {
      icon: <ImSphere className="text-purple-500 h-28 w-28" />,
      title: "Web Hosting",
      color: "#3559E0", // Dark Blue
      description:
        "Deploying and managing web applications on various hosting platforms.",
    },
    {
      icon: <SiAmazonwebservices className="text-yellow-500 h-28 w-28" />,
      title: "AWS Services",
      color: "#3559E0", // Dark Blue
      description:
        "Utilizing AWS services for cloud computing, storage, and deployment.",
    },
  ];

  export default function StickyCards() {
    const container = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end end']
    });
  
    useEffect(() => {
      const lenis = new Lenis();
  
      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
  
      requestAnimationFrame(raf);
    }, []);
  
    const width = useTransform(scrollYProgress, [0, 0.2], ['100%', '30%']);
    const height = useTransform(scrollYProgress, [0, 0.2], ['100vh', '30vh']); // Adjust height from 100vh to 0vh
    const radiusTop = useTransform(scrollYProgress, [0, 0.2], ['0%', '400px']);
    const radiusBottom = useTransform(scrollYProgress, [0, 0.2], ['0%', '300px']);
  
    return (
      <div>
      <div>
          {/* Desktop View */}
      <main ref={container} className="relative w-full h-[710vh] k">
        <motion.div
          className="h-[100vh] sticky top-2 px-5 bg-primary  justify-center  hidden xl:flex  items-center"
          style={{
            width,
            borderTopRightRadius: radiusTop,
            borderBottomRightRadius: radiusBottom,
          }}
        >
          <p className="xl:text-[70px] text-2xl leading-relaxed text-white font-[900]">What I Do?</p>
        </motion.div>
        <motion.div
          className="w-full sticky   xl:hidden  top-2 px-5 bg-primary flex justify-center items-center"
          style={{
            height,
            borderBottomRightRadius: radiusBottom,
            borderBottomLeftRadius: radiusBottom,
          }}
        >
          <p className="xl:text-[70px] text-2xl leading-relaxed text-white font-[900]">What I Do?</p>
        </motion.div>
        <div className="flex flex-col h-[600vh] justify-center xl:justify-end items-center  xl:items-end">
          {projects.map((project, i) => {
            const cardX = useTransform(scrollYProgress, [i * 0.15, (i + 1) * 0.15], ['-100%', '0%']);
            const cardOpacity = useTransform(scrollYProgress, [i * 0.15, (i + 1) * 0.15], [0, 1]);
            const targetScale = 1 - ((projects.length - i) * 0.05);
            const isVisible = scrollYProgress.get() > (i * 0.20);
            return (
              <Card
                style={{ x: cardX, opacity: cardOpacity }}
                key={`p_${i}`}
                i={i}
                {...project}
                progress={scrollYProgress}
                range={[i * 0.15, 1]}
                targetScale={targetScale}
                className={`card ${isVisible ? 'visible' : ''}`} // Apply the visible class
              />
            );
          })}
        </div>
      </main>
      </div>
      <div>
      {/* <main ref={container} className="relative  w-full h-[710vh] block md:hidden">
        <motion.div
          className="h-[100vh] sticky w-full top-2 px-5 bg-primary flex justify-center items-center"
          style={{
            height,
            borderBottomRightRadius: radiusTop,
            borderBottomLeftRadius: radiusBottom,
          }}
        >
          <p className="xl:text-[70px] text-2xl leading-relaxed text-white font-[900]">Why Inventog?</p>
        </motion.div>
    
        <div className="flex w-full flex-col md:h-[600vh] xl:h-[600vh] justify-center top-28 items-center xl:items-end">
          {projects.map((project, i) => {
            const cardX = useTransform(scrollYProgress, [i * 0.15, (i + 1) * 0.15], ['-100%', '0%']);
            const cardOpacity = useTransform(scrollYProgress, [i * 0.15, (i + 1) * 0.15], [0, 1]);
            const targetScale = 1 - ((projects.length - i) * 0.05);
            const isVisible = scrollYProgress.get() > (i * 0.20);
            return (
              <Card
                style={{ x: cardX, opacity: cardOpacity }}
                key={`p_${i}`}
                i={i}
                {...project}
                progress={scrollYProgress}
                range={[i * 0.15, 1]}
                targetScale={targetScale}
                className={`card ${isVisible ? '""' : ''}`} // Apply the visible class
              />
            );
          })}
        </div>
      </main> */}
      </div>
   
    
    
     
    </div>
    );
  }