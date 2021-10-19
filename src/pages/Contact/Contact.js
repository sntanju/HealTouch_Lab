import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPhoneSquareAlt, faEnvelopeOpen, faHome } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {

    const cellIcon = <FontAwesomeIcon icon={faPhoneSquareAlt} />
    const emailIcon = <FontAwesomeIcon icon={faEnvelopeOpen} />
    
    const homeIcon = <FontAwesomeIcon icon={faHome} />
    const facebookIcon = <FontAwesomeIcon icon={faFacebookF} />
    const twitterIcon = <FontAwesomeIcon icon={faTwitter} />
    const instaIcon = <FontAwesomeIcon icon={faInstagramSquare} />

    return (
        <div className="contact">
            <h3> <small>{homeIcon}</small> Our Address</h3>
            <p>BK tower23/2 street road, Texas, USA</p>
            <p>Cell: {cellIcon} +397485748</p>
            <p>Mail: {emailIcon} HTL@xyz.com</p>
            <br />
            <hr />
            <br />
            <h3>Follow Us</h3>
            <p><b>To now our latest news, visit our social network channels and follow us </b></p>
            <p>{facebookIcon} fb.com/HTLbd</p>
            <p>{twitterIcon} twitter.com/HTLbd</p>
            <p>{instaIcon} instagram.com/HTLbd</p>
        </div>
    );
};

export default Contact;