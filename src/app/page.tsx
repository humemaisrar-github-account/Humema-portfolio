import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import Skills from "./components/Skill";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
         <HeroSection />
 
        <AboutSection />
        <Skills />
         <ProjectSection />
         <EmailSection />
      </div> 
      <Footer />
    </main>
  );
}
