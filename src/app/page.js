
import Image from "next/image";
import SocialBand from "@/components/ui/social_band";
import BrandLogos from "@/components/ui/BrandLogos";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { socialsData } from "@/config/socials";

export default function Home() {
 
  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden">
        {/*This gives the background the glowy effect*/}
       <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full blur-3xl opacity-20"></div>
      </div>

    <div className="flex items-center justify-center h-full space-x-12 p-4">
      {/*Profile Section */}
      <div className="w-36 h-36 rounded-full overflow-hidden border-3 border-white hover:scale-110 transition-transform duration-300">
             <Image
        src="/profile.jpeg"
        height={150}
        width={150}
        className="object-cover"
        alt="picture of adarsh"
      />
      </div>

      {/* Profile Hero Section */}

      <div className="flex flex-col items-center space-y-4 hover:text-gray-300 hover:scale-105">
       <h1 className="text-6xl font-[Consolas] tracking-wider"> Hey There! </h1>

       <PointerHighlight >
            <h1  className="text-6xl font-[Consolas] tracking-wider"> I'm Adarsh Naik</h1>
       </PointerHighlight>
       
       <div className="mt-5">
           <SocialBand socials={socialsData}   />
       </div>

      
       
      </div>

 

    </div>

    {/* Scroll to Skills Button - Fixed at bottom */}
    <a 
      href="#skills-section"
      className="absolute bottom-8 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 group animate-bounce"
      aria-label="Scroll to skills section"
    >
      <svg 
        className="w-6 h-6 text-white group-hover:translate-y-1 transition-transform duration-300" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </a>
   
        


  </div>
  
    
    {/* Skills Section */}
          
    <section id="skills-section" className="flex flex-col items-center space-y-6 mt-8 w-full overflow-hidden">
          <h2 className="text-4xl font-[Consolas] tracking-wider">Skills</h2>
          <div className="w-full overflow-hidden">
            <BrandLogos />
          </div>
    </section>

    </>
    
  );
}
