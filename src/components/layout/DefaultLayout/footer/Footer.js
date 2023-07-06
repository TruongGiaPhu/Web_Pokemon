import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import './footer.scss';

const Footer = () => {
    return (
        <footer>
            <ul>
                <li>
                    {/* <PhoneIcon className="header__icon" /> */}
                    <a href="#https://www.facebook.com/phu.truong.9615566/">
                        <FacebookIcon />
                    </a>
                </li>
                {/* <li>zalo</li> */}
                <li>
                    <a href="tel:0987976998">
                        {' '}
                        <LocalPhoneIcon />
                    </a>
                </li>
                <li>
                    <a href="mailto:phutruong456321@gmail.com">
                        <EmailIcon />
                    </a>
                </li>
                {/* <li>
                    <img
                        src="https://banner2.cleanpng.com/20180715/fwc/kisspng-computer-icons-discord-logo-smiley-emoticon-avatar-na-discord-5b4b6f179eb511.3695532315316702956501.jpg"
                        alt=""
                    />
                </li> */}
            </ul>
            <div>
                <span>Người làm Trương Gia Phú</span>
            </div>
        </footer>
    );
};

export default Footer;
