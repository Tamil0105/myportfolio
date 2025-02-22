import { useState } from "react";

// import { useInView } from 'react-intersection-observer';
import ExpandableContent from "../components/Animatecomponets/ExpandableContent/main";
import HorizontalScroll from "../components/Animatecomponets/HorizontalScrollAnimation/main";
import ScrollGapAnimation from "../components/Animatecomponets/ScrollGapAnimation/main";
import ScrollImage from "../components/Animatecomponets/ScrollImageAnimation/main";
import Button2 from "../components/common/button2";
import { wholePageContent } from "../utils/pageContent";
import { useNavigate } from "react-router-dom";

export const Work = () => {
  const [imageDetails, setImageDetails] = useState({
    url: wholePageContent.work.projectsData[0].imageUrl,
    text: wholePageContent.work.projectsData[0].initialText,
    path:wholePageContent.work.projectsData[0].path,
    textColor:wholePageContent.work.projectsData[0].textColor
  });
  const navigate = useNavigate()
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setImageDetails({
      text: wholePageContent.work.projectsData[index].initialText,
      url: wholePageContent.work.projectsData[index].imageUrl,
      path:wholePageContent.work.projectsData[index].path,
      textColor:wholePageContent.work.projectsData[index].textColor

    });

    setOpenIndex(openIndex === index ? null : index);
  };
  // const { ref, inView } = useInView({
  //   threshold: 0.3, // Adjust as needed
  //   triggerOnce: true, // Only trigger once
  // });
  const imageData = [
    {
      description: "Platform for court building at sports facilities",
      category: ["DESIGN", "DEVELOPMENT", "MOTION", "STRATEGY"],
      imageUrl:
        "https://bbbzdlyncfcnmzxxaubm.supabase.co/storage/v1/object/gms-api/public/banner-img/3f49feb424a78b862cc3.webp",
      backgroundColor: "#1D4ED8",
      title: "Game On Solution",
      path:"game-on-solution"
    },
    {
      description: "Platform for court bookings at sports facilities",
      category: ["DESIGN", "DEVELOPMENT", "MOTION", "STRATEGY"],
      imageUrl:
        "/gozencal.png",
      backgroundColor: "#1D4ED8",
      title: "GoZen Cal",
      path: "gozen-cal",
    },
    {
      description: "Platform for court bookings at sports facilities",
      category: ["DESIGN", "DEVELOPMENT", "MOTION", "STRATEGY"],
      imageUrl:
        "/formsGozen.jpg",
      backgroundColor: "#1D4ED8",
      title: "GoZen Forms",
      path: "gozen-forms",
    },
    {
      description: "Platform for court bookings at sports facilities",
      category: ["DESIGN", "DEVELOPMENT", "MOTION", "STRATEGY"],
      imageUrl:
        "/rental1.png",
      backgroundColor: "#1D4ED8",
      title: "Selvam Rental Management",
      path:"game-on-solution"

    },
    {
      description: "Platform for court bookings at sports facilities",
      category: ["DESIGN", "DEVELOPMENT", "MOTION", "STRATEGY"],
      imageUrl:
        "https://bbbzdlyncfcnmzxxaubm.supabase.co/storage/v1/object/gms-api/public/banner-img/3f49feb424a78b862cc3.webp",
      backgroundColor: "#1D4ED8",
      title: "Assessment",
      path:"assessment"

    },
    {
      description: "Platform for court bookings at sports facilities",
      category: ["DESIGN", "DEVELOPMENT", "MOTION", "STRATEGY"],
      imageUrl:
        "/ai-componet-generator.png",
      backgroundColor: "#1D4ED8",
      title: "Ai-Components-Generator",
      path:"ai-components-generator"

    },
    {
      description: "Platform for court bookings at sports facilities",
      category: ["DESIGN", "DEVELOPMENT", "MOTION", "STRATEGY"],
      imageUrl:
        "/book-app.png",
      backgroundColor: "#1D4ED8",
      title: "Booking App",
      path:"booking-app"

    },
  ];
  return (
    <div
      id="work"
      className="h-full justify-center items-center   gap-0 flex flex-col"
    >
      <div className="hidden   xl:flex w-full h-full justify-center pl-28  relative ">
        <div className="w-1/3 h-full  flex">
          <ScrollGapAnimation
            className="h-[120vh] w-1/3 z-20  absolute  flex flex-col  justify-end items-center "
            innerClassName="h-[80%] rounded-xl bg-white shadow-lg border w-[90%]"
          >
            <div className="w-ful h-full flex flex-col gap-8 justify-start items-start p-10">
              <p className="uppercase  font-semibold">Projects</p>
              {wholePageContent.work.projectsData.map((data, index) => (
                <ExpandableContent
                  initialText={data.initialText}
                  originalContent={
                    <div className="text-start ">
                      <p className="text-lg text-gray-800 mb-6">
                        {data.originalContent.content}
                      </p>
                      <div className="flex flex-wrap justify-start gap-4">
                        {data.originalContent.keys.map((key, index) => {
                          return (
                            <button
                              key={index}
                              className="bg-white text-gray-800 font-medium py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                              {key}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  }
                  position={data.position as any}
                  key={index}
                  isOpen={openIndex === index} // Pass the open state
                  onToggle={() => handleToggle(index)} // Pass the toggle function
                />
              ))}
            </div>
          </ScrollGapAnimation>
        </div>
        <ScrollImage
          
         onClick={() => navigate(`/projects/${imageDetails.path}`)}
          text={imageDetails.text}
          src={imageDetails.url}
          textColor={imageDetails.textColor}
          alt="Custom alt text"
          className="custom-image-class"
          containerClassName="custom-container-class"
          config={{
            translateY: {
              range: ["-20%", "0%", "20%"],
              enabled: true,
            },
            scale: {
              range: [1.1, 1, 1.1],
              enabled: true,
            },
            opacity: {
              range: [0.7, 1, 0.7],
              enabled: false,
            },
            rotation: {
              range: ["-10deg", "0deg", "10deg"],
              enabled: false,
            },
            easing: (t: any) => t * t, // Custom easing function
          }}
        />
        {/* <div className="flex relative h-[130vh] rounded-xl w-full bg-slate-400">
          <img className="object-cover  rounded-xl" src="https://bbbzdlyncfcnmzxxaubm.supabase.co/storage/v1/object/gms-api/public/banner-img/3f49feb424a78b862cc3.webp"/>
        </div> */}
      </div>

      <div className=" xl:hidden lg:flex md:flex flex scroll-container overflow-x-auto w-screen p-4 space-x-4">
        {imageData.map((data, index) => {
          return (
            <HorizontalScroll key={index}>
              <div className={`relative   rounded-2xl flex shadow-lg overflow-hidden w-full h-[56vh] md:h-[45vh] lg:h-[35vh]`}>
                <img
                  src={data.imageUrl}
                  alt="Two people smiling and working on a laptop"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bg-black/30 text-white h-full flex flex-col gap-52 justify-between">
                  <span className="flex gap-4 p-7 flex-col justify-start items-start">
                    <h2 className="text-4xl text-wrap w-[60%] font-bold">{data.title}.</h2>
                    <p className=" text-wrap text-lg font-semibold w-[60%]">
                      {" "}
                      {data.description}
                    </p>
                  </span>
                  <span></span>
                </span>
                <span className="flex absolute bottom-6   w-full  left-12 ">
                  <Button2
                   onClick={() =>{navigate(`/projects/${data.path}`)}}
                    classNames="px-7 py-2 absolute"
                    text={wholePageContent.work.buttonText}
                  />
                </span>
              </div>
            </HorizontalScroll>
          );
        })}
      </div>
    </div>
  );
};

