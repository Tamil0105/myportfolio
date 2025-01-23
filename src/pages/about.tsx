import { useInView } from "react-intersection-observer";
import { wholePageContent } from "../utils/pageContent";
import SlideUp from "../components/Animatecomponets/SlideUpTextAnimation/main";

export const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3, // Adjust as needed
    triggerOnce: true, // Only trigger once
  });
  return (
    <div ref={ref} id="about" className="xl:px-16 px-2 py-2 ">
      <div
        className={`min-h-screen rounded-xl  py-10   flex flex-col xl:flex-row items-center justify-center gap-16 px-5 md:px-10`}
      >
        <div className="w-full xl:w-1/2 h-full flex top-0  xl:relative  justify-center items-center xl:px-10 xl:py-10">
          <div className=" w-full xl:w-full border-primary/5  hover:animate-floating h-full z-30   bg-gradient-to-r from-primary/20 to-primary/10 rounded-[40px]  border  shadow-xl      flex flex-col justify-center items-center">
            <img
              src={"/Programmer-rafiki.svg"}
              alt={"about"}
              className={`h-auto max-h-[80vh] w-full object-cover transition duration-300 filter ${
                inView ? "animate-zoomIn" : "animate-zoomOut"
              }`}
            />
          </div>
          <div className=" hidden w-full xl:w-[96%] border  border-primary/5 xl:absolute h-64 z-10  bottom-1 left-20   bg-gradient-to-r from-primary/20 to-primary/10 rounded-[50px]  shadow-xl      xl:flex flex-col justify-center items-center">
           
          </div>
         
        </div>
        <div className="w-full xl:w-1/2 flex  border-primary/40  h-full">
          <div className="flex flex-col  justify-center items-center xl:justify-start xl:items-start  gap-10 p-6">
            <button
              className={`border font-poppins border-black rounded-full w-full xl:w-[30%] px-4 py-2 ${
                inView ? "animate-slideIn" : ""
              }`}
            >
              {wholePageContent.about.heading}
            </button>
            <SlideUp
              duration={0.09}
              delay={0.08}
              className=" text-lg md:text-xl w-[110%] lg:text-3xl text-center md:text-start font-poppins"
              text={wholePageContent.about.content}
            />
            {/* <p className={`text-lg md:text-xl lg:text-3xl font-serif ${inView ? 'animate-slideIn' : ''}`}>
            {wholePageContent.about.content}
          </p> */}
            {/* <Button2
              classNames={`${inView ? "animate-slideIn" : "w-ful"}  px-12 py-2`}
              text={wholePageContent.about.buttonText}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
