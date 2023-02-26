

import { FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


export default function Footer() {
	return (
        <div className="footer">
        <a href="https://twitter.com/ragnarwolf1907"><button ><FaTwitter/></button></a>
        <a href="https://www.facebook.com/ekremkurt1907/"><button ><FaFacebook/></button></a>
        <a href="https://www.instagram.com/ekremkurt1907/"><button ><FaInstagram/></button></a>
        <a href="https://github.com/CyberWolf181"><button ><FaGithub/></button></a>        
    </div>      
	
	);
}