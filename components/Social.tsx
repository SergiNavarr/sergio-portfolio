import Link from "next/link"
import { FaGithub, FaLinkedin, FaInstagram, FaMailBulk} from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path: "https://github.com/serginavarr"},
    {icon: <FaLinkedin />, path: "https://www.linkedin.com/in/sergio-ignacio-navarro/"},
    {icon: <FaInstagram />, path: "https://www.instagram.com/sergioignaciok"},
    {icon: <FaMailBulk />, path: "mailto:nachonavarro197@gmail.com"},
]

interface SocialProps {
    containerStyles?: string; 
    iconStyles?: string;
}

export default function Social({ containerStyles = "", iconStyles = "" }: SocialProps) {
    return (
        <div className={containerStyles}>
            {socials.map((item, index)=>{
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    );
}