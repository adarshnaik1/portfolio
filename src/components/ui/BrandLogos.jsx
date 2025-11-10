"use client";
import Slider from "react-infinite-logo-slider";
import Image from "next/image";
import { skillsData } from "@/config/skills";

export default function BrandLogos (){
    return(
        <Slider
            width="220px"
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
            blurBorderColor={'#fff'}
            className="overflow-hidden"
        >
            {skillsData.map((skill, index) => (
                <Slider.Slide key={index}>
                    <Image 
                        src={skill.logo} 
                        alt={skill.alt}
                        width={60}
                        height={60}
                        className="w-20 h-20 object-contain"
                    />
                </Slider.Slide>
            ))}
        </Slider>
    ) 

}