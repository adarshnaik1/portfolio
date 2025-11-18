import Navbar from "@/components/ui/Navbar";

export default function About() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
                {/* Background Effect */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/4 left-1/4 w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl opacity-30"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-[200px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full blur-3xl opacity-20"></div>
                </div>

                {/* Content */}
                <div className="text-center space-y-6">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-consolas tracking-wider">About Me</h1>
                    <div className="flex flex-col items-center space-y-4">
                        <div className="w-16 h-1 bg-white/30 rounded-full"></div>
                        <p className="text-xl sm:text-2xl md:text-3xl font-consolas text-white/80">
                            Work Under Progress
                        </p>
                        <div className="w-16 h-1 bg-white/30 rounded-full"></div>
                    </div>
                    <p className="text-sm sm:text-base text-white/60 font-consolas max-w-md">
                        This section is currently being developed. Check back soon for updates!
                    </p>
                </div>
            </div>
        </>
    );
}
