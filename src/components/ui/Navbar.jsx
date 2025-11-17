import Link from 'next/link'
export default function Navbar(){
    return(
         <nav className="fixed top-0 left-0 right-0 z-50 ">
            <div className=" w-full px-6 py-4 bg-white/3 backdrop-blur-md border-b  border-white/20 shadow-lg">
                <div className="flex items-center justify-between">
                    {/* Left Section - About Me & Projects */}
                    <div className="flex items-center space-x-8">
                        <Link 
                            href="#about" 
                            className="text-white font-consolas hover:text-white/80 transition-colors duration-300 text-sm lg:text-base"
                        >
                            About Me
                        </Link>
                        <Link 
                            href="#projects" 
                            className="text-white font-consolas hover:text-white/80 transition-colors duration-300 text-sm lg:text-base"
                        >
                            Projects
                        </Link>
                    </div>

                    {/* Right Section - Contact Me */}
                    <div className="flex items-center">
                        <Link 
                            href="#contact" 
                            className="text-white font-consolas hover:text-white/80 transition-colors duration-300 text-sm lg:text-base"
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>
            </div>
        </nav>

    )
}