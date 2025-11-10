
import Image from "next/image";
import SocialBand from "@/components/ui/social_band";
import BrandLogos from "@/components/ui/BrandLogos";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { socialsData } from "@/config/socials";

export default function Home() {
 
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden px-4 sm:px-6 lg:px-8">
        {/*This gives the background the glowy effect*/}
       <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[200px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full blur-3xl opacity-20"></div>
      </div>

    <div className="flex flex-col md:flex-row items-center justify-center h-full space-y-8 md:space-y-0 md:space-x-8 lg:space-x-12 p-4 w-full max-w-6xl">
      {/*Profile Section */}
      <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-3 border-white hover:scale-110 transition-transform duration-300 flex-shrink-0">
             <Image
        src="/profile_image.jpg"
        height={150}
        width={150}
        className="object-cover w-full h-full"
        alt="picture of adarsh"
      />
      </div>

      {/* Profile Hero Section */}

      <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
       <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[Consolas] tracking-wider"> Hey There! </h1>

       <PointerHighlight >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[Consolas] tracking-wider"> I'm Adarsh Naik</h1>
       </PointerHighlight>
       
       <div className="mt-3 sm:mt-5">
           <SocialBand socials={socialsData}   />
       </div>

      
       
      </div>

 

    </div>

    {/* Scroll to Skills Button - Fixed at bottom */}
    <a 
      href="#skills-section"
      className="absolute bottom-4 sm:bottom-6 md:bottom-8 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 group animate-bounce"
      aria-label="Scroll to skills section"
    >
      <svg 
        className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:translate-y-1 transition-transform duration-300" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </a>
   
        


  </div>
  
    
    {/* Skills Section */}
          
    <section id="skills-section" className="flex flex-col items-center space-y-4 sm:space-y-6 py-8 sm:py-12 md:py-16 w-full overflow-hidden px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-[Consolas] tracking-wider">Skills</h2>
          <div className="w-full overflow-hidden">
            <BrandLogos />
          </div>
    </section>

    </>
    
  );
}
