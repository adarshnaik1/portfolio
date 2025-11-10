import Link from 'next/link';
import Image from 'next/image';

export default function SocialBand({ socials }) {
    return (
        <div className="flex flex-wrap gap-3 justify-center items-center">
            {socials.map((social, index) => (
                <SocialCapsule 
                    key={index}
                    href={social.url}
                    logo={social.logo}
                    label={social.label}
                />
            ))}
        </div>
    );
}

function SocialCapsule({ href, logo, label }) {
    return (
        <Link 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="
                flex items-center gap-2 
                px-4 py-2 
                rounded-full 
                bg-white/10 
                backdrop-blur-sm
                border border-green-500/55
                hover:bg-white/20 
                hover:border-white/30
                hover:scale-105
                transition-all duration-300
                group
            "
        >
            <div className="w-5 h-5 relative group-hover:scale-110 transition-transform duration-300">
                <Image 
                    src={logo}
                    alt={label || 'Social icon'}
                    fill
                    className="object-contain"
                />
            </div>
            {label && (
                <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                    {label}
                </span>
            )}
        </Link>
    );
}