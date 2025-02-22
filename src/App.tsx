import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/main";
import CursorFollower from "./components/CurssorFollower/main";
import LogoAnimation from "./components/Animatecomponets/LogoAnimation/main";
import AnimatedPage from "./components/Animatecomponets/AnimatePage/main";
import useCounterStore from "./store/animateScreen";
import useScrollBackgroundColor from "./hook/useScrollBgColor";
import {
  Home,
  About,
  WorkHeader,
  Work,
  ProcessAndApproach,
  GetInTouch,
  ProjectPage,
  ProcessPage,
  TeamPage,
  ContactPage,
  OurServicePage,
} from "./pages";
import StickyCards from "./components/Animatecomponets/StickyParallaxCardAnimation/main";
import GameOnSolution from "./pages/projects/gameOnSolution";
import GozenCal from "./pages/projects/gozenCal";
import GozenForm from "./pages/projects/gozenForm";
import RentalManageMent from "./pages/projects/rentalManageMent";


function App() {
  const [showContent, setShowContent] = useState(false);
  const { active, setActive, deActive } = useCounterStore((state) => state);

  const sections = [
    { id: "home", color: "bg-white" },
    { id: "about", color: "bg-white" },
    { id: "service", color: "bg-white" },
    { id: "WhyInventOGBefore", color: "bg-gray-950" },
    { id: "WhyInventOGAfter", color: "bg-gray-950" },
    { id: "work-header", color: "bg-gray-100" },
    { id: "work", color: "bg-gray-200" },
    { id: "knowledge", color: "bg-gray-950" },

  ];
  const nav1 = [
    { id: "home", color: "bg-primary" },
    { id: "about", color: "bg-primary" },
    { id: "work-header", color: "bg-primary" },
    { id: "projects", color: "bg-primary" },
    { id: "work", color: "bg-primary" },
    { id: "knowledge", color: "bg-primary" },
    { id: "WhyInventOGBefore", color: "bg-white" },
    { id: "WhyInventOGAfter", color: "bg-white" },
    { id: "getInTouch", color: "bg-white" },
    { id: "gameOnSolution", color: "bg-[#febc12]" },
    { id: "rentalmanagement", color: "bg-[#16a249]" },


  ];
  const nav2 = [
    { id: "home", color: "bg-transparent" },
    { id: "getInTouch", color: "bg-transparent" },
    

  ];
  const bgColor = useScrollBackgroundColor(sections);
  const navIconBgColor = useScrollBackgroundColor(nav1);
  const navBgColor = useScrollBackgroundColor(nav2);
  
  return (
    <Router>
      {active ? (
        <AnimatedPage colors={["#1D4ED8"]} duration={1900} />
      ) : (
        <div className="h-full bg-white">
          {showContent ? (
            <>
              <CursorFollower />
              <NavBar bgColor={navBgColor} bgColorForMenu={navIconBgColor} />

              <Routes>
                <Route
                  path="/"
                  element={
                    <div
                      className={`flex flex-col xl:gap-2 h-full ${bgColor} gap-6 transition-all duration-500`}
                    >
                      <Home />
                      <About />
                      {/* <Testimonials/> */}
                      {/* <ScrollTestimonials row1Cards={row1Cards} row2Cards={row2Cards} /> */}

                      <div className="" id="WhyInventOGBefore">
                        {/* sssss
                      </div> */}

                      <StickyCards />
                      {/* <div className="h-40 text-transparent" id="WhyInventOGAfter">
                        sssss */}
                      </div>
                      {/* <WhyInventOG /> */}
                      <div>
                        <div id="work-header">
                          <WorkHeader />
                        </div>{" "}
                        <Work />
                      </div>
                      <div id="knowledge">
                        <ProcessAndApproach />
                      </div>
                      <OurServicePage />

                    </div>
                  }
                />
                <Route
                  path="/projects"
                  element={
                    <div id="projects" className=" bg-white">
                      <ProjectPage />
                      <GetInTouch />
                    </div>
                  }
                />
                <Route
                  path="/knowledge"
                  element={
                    <div className=" bg-black">
                      <ProcessPage />
                      <GetInTouch />
                    </div>
                  }
                />
                <Route
                  path="/team"
                  element={
                    <div className="h-screen bg-white">
                      <TeamPage />
                    </div>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <div className=" bg-white">
                      <ContactPage />
                    </div>
                  }
                />  
                <Route
                  path="/projects/game-on-solution"
                  element={
                  <GameOnSolution/>
                  }
                />
                 <Route
                  path="/projects/gozen-cal"
                  element={
                  <GozenCal/>
                  }
                />
                  <Route
                  path="/projects/gozen-forms"
                  element={
                  <GozenForm/>
                  }
                />
                  <Route
                  path="/projects/rental-management"
                  element={
                  <RentalManageMent/>
                  }
                />
                
              </Routes>
            </>
          ) : (
            <LogoAnimation
              onComplete={() => {
                window.location.pathname != "/" ? setActive() : deActive();
                setShowContent(true);
              }}
            />
          )}
        </div>
      )}
    </Router>
  );
}

export default App;
