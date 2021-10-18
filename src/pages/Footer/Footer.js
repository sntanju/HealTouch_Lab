import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquareAlt, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import './Footer.css';

const Footer = () => {

     const cellIcon = <FontAwesomeIcon icon={faPhoneSquareAlt} />  
     const emailIcon = <FontAwesomeIcon icon={faEnvelopeOpen} />

    return (
        <div className="footer">   
            
                <div className="footer-text">
                <p>Copyright &copy; 2021 HealTouch Lab</p>
                <p>{cellIcon}  Cell: +136038984756</p>
                <p>{emailIcon}  Mail: ptc@xyz.com</p>  
                </div>

                <div>
                    <br /><br /><br /><br />
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                </div>

                <div>
                <h2>Site</h2>
                    <hr />
                    <p>About</p>
                    <p>Invests</p>
                    <p>Supportots</p>
                    <p>Become a Partner</p>
                </div>
                
        </div>
    );
};

export default Footer;