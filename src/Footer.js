import './Footer.css';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';



const Footer = () => {
    return ( 
        <footer>
            <div className="footer__container">
                <div className="footer__items__container">
                    
                    <div className="footer__message__container">
                        <div className="footer__message__header">
                            
                            <img src="logo.png"></img>
                        </div>
                       
                        
                    </div>
                    <div className="footer__contact__container">
                        <div className="footer__contact__header">
                            <h1>Contact Us</h1>
                        </div>
                        <ul className="footer__contacts">
                            <li className="footer__contact">
                                <LocalPhoneIcon /> <span> 9080168896</span>
                            </li>
                            <li className="footer__contact">
                                <EmailIcon /> <span>  psktradersnkl@gmail.com</span>
                            </li>
                            <li className="footer__contact">
                                <LocationOnIcon /> <span>135/58, Thiruchengode Road, Namakkal, Tamilnadu-637001.</span>
                                
                            </li>
                        </ul>
                    </div>  
                    
                </div>
            </div>
        </footer>
    );
}

export default Footer;
