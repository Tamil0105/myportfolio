import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BsArrowDown } from "react-icons/bs";
import BottomToTopScreenOpenAnimation from "../../components/Animatecomponets/BottomToTopScreenOpenAnimation/main";
import { GetInTouch } from "../getInTouch";
import useCounterStore from "../../store/animateScreen";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const GozenCal = () => {
  const { setLinkHovered,setHovered} = useCounterStore();
 const navigate = useNavigate()
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the component is in view
    triggerOnce: true, // Only trigger once
  });
  const imageData = [
    {
      description: "Platform for court bookings and scheduling facilities",
      category: ["DESIGN", "DEVELOPMENT", "MOTION", "STRATEGY"],
      imageUrl:
        "/gozencal/1.png",
      backgroundColor: "#3439e0",
      title: "Game On Solution",
      path: "game-on-solution",
    },
    {
      description: "Platform for court bookings at sports facilities",
      category: ["DESIGN", "DEVELOPMENT", "MOTION", "STRATEGY"],
      imageUrl:
        "/gozencal/2.png",
      backgroundColor: "#3439e0",
      title: "Click to Close",
      path: "game-on-solution",
    },
    {
      description: "Platform for court bookings at sports facilities",
      category: ["DESIGN", "DEVELOPMENT", "MOTION", "STRATEGY"],
      imageUrl:
        "/gozencal/3.png",
      backgroundColor: "#3439e0",
      title: "Click to Close",
      path: "game-on-solution",
    },
    {
      description: "Platform for court bookings at sports facilities",
      category: ["DESIGN", "DEVELOPMENT", "MOTION", "STRATEGY"],
      imageUrl:
        "/gozencal/4.png",
      backgroundColor: "#3439e0",
      title: "Click to Close",
      path: "game-on-solution",
    },
    {
      description: "Platform for court bookings at sports facilities",
      category: ["DESIGN", "DEVELOPMENT", "MOTION", "STRATEGY"],
      imageUrl:
        "/gozencal/5.png",
      backgroundColor: "#3439e0",
      title: "Click to Close",
      path: "game-on-solution",
    },
  ];
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
}, []); 
  return (

    <div
    onMouseEnter={() =>setLinkHovered(false)}

      id={"gozencal"}
      className="bg-gray-50 text-black border-blue-500 relative h-full"
    >
      <div
        ref={ref}
        className={`relative h-screen   shadow-lg overflow-hidden `}
      >
        <img
          src={
            "/gozencal1.jpg"
          }
          className="z-0"
          alt="Your Image"
          style={{
            position: "absolute",
            width: " 100%",
            height: "100%",
            objectFit: "cover",
            top: 0,
            left: 0,
          }}
        />

        <div
          className={`absolute  z-10 h-full w-full flex flex-col justify-center items-center

          `}
        >
          {/* <span
            className={`xl:text-[90px] text-4xl text-black 
            
            `}
          >
            {"GoZen Cal"}
          </span> */}
          <span className="xl:hidden flex text-black text-xl w-[70%] text-center">
            {"Platform for  bookings and scheduling facilities"}
          </span>
          <div
            className={`flex justify-center xl:justify-between h-44 w-full absolute bottom-0 transition-opacity duration-300 
           
            `}
          >
            <div className="h-full hidden w-[40%] xl:flex gap-2 justify-center items-center">
              {["DESIGN", "DEVELOPMENT", "MOTION", "STRATEGY"]?.map(
                (item, index) => (
                  <p
                    key={index}
                    className="bg-white text-blue-600 shadow-lg rounded-full p-2"
                  >
                    {item}
                  </p>
                )
              )}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 2 }}
              className="flex w-[20%] animate-floating  justify-center items-center"
            >
              <BsArrowDown className="h-28   font-thin w-16 text-white" />
            </motion.div>
            <div className="h-full hidden  w-[40%] text-4xl text-white text-center xl:flex justify-center items-center">
              <span className="w-[90%]">
                {"Platform for court bookings and scheduling facilities"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-full flex flex-col gap-16  py-16">
        <div className="xl:px-48 px-5  flex flex-col  ">
          <div className="xl:w-[60%] flex flex-col gap-10 w-full">
            <button className="border border-blue-500 text-blue-500 rounded-full px-4 py-2  w-full xl:w-[30%]">
              DESCRIPTION
            </button>
            <p className="text-2xl leading-relaxed">
            GameOn Solution specializes in constructing sports grounds, artificial football turf, cricket pitches, volleyball courts, basketball courts, and badminton courts, primarily serving customers in South India. GameOn Solution offers a comprehensive range of services, including building turf grounds, athletic tracks, and sports flooring solutions.
            </p>
            <div className="flex justify-end mt-4">
              <div className="w-2 h-2 bg-gold rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="xl:px-16 px-5  flex-col flex gap-10 justify-center items-center">
          {imageData.map((data, index) => (
            <motion.div
              key={index}
              className="flex xl:h-[90vh]  h-[23vh] justify-center items-center w-full xl:w-[100%]" // Center the image card
            >
              <BottomToTopScreenOpenAnimation
                className="h-full w-full shadow-xl rounded-3xl"
                backgroundColor={data.backgroundColor}
                imageUrl={data.imageUrl}
              />
            </motion.div>
          ))}
        </div>
        <BottomToTopScreenOpenAnimation
           type="video"
          className="xl:h-screen h-[50%] w-full"
          backgroundColor={"#0000"}
          imageUrl={
            "/gozencal/v1.mp4"
          }
        />


        <div className="xl:px-36 px-5  flex flex-col  ">
          <div className="xl:w-[60%] flex flex-col gap-10 w-full">
            {/* <button className="border border-[#febc12] text-[#febc12] rounded-full px-4 py-2  w-full xl:w-[30%]">
              DESCRIPTION
            </button> */}
            <p className="text-2xl leading-relaxed">
            Their services cover everything from consultancy and planning stages to the construction and execution of sports complexes and grounds. Additionally, GameOn Solution undertakes maintenance, repair, and upgrade projects for existing facilities. With an in-house engineering and project team equipped with state-of-the-art design tools and high-quality materials, they ensure efficient implementation of projects.
            </p>
            <div className="flex justify-end mt-4">
              <div className="w-2 h-2 bg-gold rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-start justify-start xl:px-36 px-5">
          <button 
           onMouseEnter={() =>setHovered(true)}
           onMouseLeave={() => setHovered(false)}
          onClick={() =>{
            navigate('/projects/gozen-form')
          }} className="border border-blue-600 text-blue-600 rounded-full px-4 py-2  w-[50%] xl:w-[15%]">
            NEXT WORK{" "}
          </button>
        </div>
        <div
          onClick={() =>{
            navigate('/projects/gozen-form')
          }}
         onMouseEnter={() =>setHovered(true)}
              onMouseLeave={() => setHovered(false)}
          className="xl:px-5 px-5 w-full  flex-col flex gap-14 justify-center items-center">
          <motion.div
            className="flex xl:h-[110vh]  h-[23vh] justify-center items-center w-full xl:w-[90%]" // Center the image card
          >
            <BottomToTopScreenOpenAnimation
              className=" h-full w-full rounded-2xl"
              backgroundColor={"#3439e0"}
              imageUrl={
                "/formsGozen.jpg"
              }
            />
          </motion.div>
        </div>
      </div>

      <GetInTouch bgColor="bg-blue-600" />
    </div>
  );
};

export default GozenCal;
