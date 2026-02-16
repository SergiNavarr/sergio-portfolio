import Link from "next/link"
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter} from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path: "https://github.com/serginavarr"},
    {icon: <FaLinkedin />, path: "https://linkedin.com/in/serginavarr"},
    {icon: <FaYoutube />, path: "https://youtube.com/serginavarr"},
    {icon: <FaTwitter />, path: "https://twitter.com/serginavarr"},
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