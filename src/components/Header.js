import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profile from "../images/ekrem.png";

function Header () {
    return(
        <header className="head">
            <img src={profile} className="personal"/>
            <h1>Ekrem Kurt</h1>
            <h3>Web3 Developer</h3>
            <h4>ekremkurt.com</h4>
            <div className="links">
                <button className="mail"><FaEnvelope/><span className='mail--text'/> Email</button>
                <button className="linkedin"><FaLinkedin/><span className='linkedin--text'/> Linkedin</button>
            </div>
        </header>
      
    )
}

export default Header;