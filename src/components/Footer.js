import React from 'react';
import '../styles/components/Footer.scss'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedinIcon from '@mui/icons-material/Linkedin';
// import YoutubeIcon from '@mui/icons-material/Youtube';
import EmailIcon from '@mui/icons-material/Email';
import { IntlContext } from 'react-intl';

function Footer() {
    const { formatMessage } = React.useContext(IntlContext); 

    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="about">
                        <h6>{formatMessage({ id: 'titleAboutMuseum' })}</h6>
                        <p className="text-justify">
                            {formatMessage({ id: 'aboutMuseum' })}
                        </p>
                    </div>

                    <div className="categories">
                        <h6>{formatMessage({ id: 'titleNavigation' })}</h6>
                        <ul className="footer-links">
                            <li><a href="">{formatMessage({ id: 'security'})}</a></li>
                            <li><a href="">{formatMessage({ id: 'report'})}</a></li>
                            <li><a href="">{formatMessage({ id: 'contactUs'})}</a></li>
                            <li><a href="">{formatMessage({ id: 'SAC'})}</a></li>
                            <li><a href="">{formatMessage({ id: 'contribution'})}</a></li>
                            <li><a href="">{formatMessage({ id: 'terms'})}</a></li>
                        </ul>
                    </div>
                    <div className={`$colMd4} $colSm6} $colXs12}`}>
                        <h6>{formatMessage({ id: "titleSocial"})}</h6>
                        <ul className="social-icons">
                            <li><a className="facebook" target='blank' href="https://www.facebook.com/museudoipiranga/"><FacebookIcon className="iconSocial" /></a></li>
                            <li><a className='twitter' target='blank' href="https://twitter.com/museupaulista/"><TwitterIcon className='iconSocial' /></a></li>
                            <li><a className="email" target='blank' href="mailto:mp@usp.br"><EmailIcon className="iconSocial" /></a></li>
                            <li><a className="instagram" target='blank' href="https://www.instagram.com/museudoipiranga/"><InstagramIcon className="iconSocial" /></a></li>
                            {/* <li><a className="linkedin" target='blank' href="https://www.linkedin.com/company/museu-do-ipiranga/"><LinkedIn className="iconSocial" /></a></li>   
                            <li><a className="youtube" target='blank' href="https://www.youtube.com/channel/UC98l9dLKN5cyDPo4hE-A_tA"><YouTube className="iconSocial" /></a></li>    */}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div>
                    <div className={`$colMd8} $colSm6} $colXs12}`}>
                        <p className="copyright-text">Copyright &copy; Museu do Ipiranga – USP | 2023.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
