import Link from "next/link"
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitter } from "react-icons/fa"

export const SocialMedia = () => {
    return (
        <div className="flex gap-6 text-gray-600">
            <Link className="text-2xl" href={'https://www.instagram.com/pelicaninvests/'}><FaInstagram /></Link>
            <Link className="text-2xl" href={'https://www.facebook.com/PelicanInvests/'}><FaFacebook /></Link>
            <Link className="text-2xl" href={'https://twitter.com/pelicaninvests'}><FaTwitter /></Link>
            <Link className="text-2xl" href={'https://www.tiktok.com/@pelicaninvests'}><FaTiktok /></Link>
            <Link className="text-2xl" href={'https://www.linkedin.com/company/pelicaninvests/'}><FaLinkedin /></Link>
        </div>
    )
}