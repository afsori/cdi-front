import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.scss";
function Footer() {
    return (
        <div className="wrapper-footer">
        <div className="wrapper-footer-first">
            <div className="container">
                <ul>
                    <li>About</li>
                    <li><Link>Company</Link></li>
                    {/* <li><Link>CSR</Link></li>
                    <li><Link>Contact Us</Link></li> */}
                </ul>
                <ul>
                    <li>Product</li>
                    <li><Link>Feature</Link></li>
                    <li><Link>Security</Link></li>
                </ul>
                <ul>
                    <li>Support</li>
                    <li><Link>FAQ</Link></li>
                    <li><Link>Community</Link></li>
                    <li><Link>Term of Service</Link></li>
                </ul>
                <ul>
                    <li>Download</li>
                    {/* <div className="logo-play-app-store">
                        <li><a href="https://www.instagram.com/hiappofficial/" target="blank"><img src={playstore} alt="playstore"/></a></li>
                        <li><a href="https://www.instagram.com/hiappofficial/" target="blank"><img src={APPSTORE} alt="APPSTORE"/></a></li>
                    </div> */}
                    <li>Connect With Us</li>
                    {/* <div className="logo-social-media">
                        <li><a href="https://www.facebook.com/hiappofficial" target="blank"><img src={fb} alt="fb"/></a></li>
                        <li><a href="https://www.twitter.com/hiappofficial" target="blank"><img src={twitter} alt="twitter"/></a></li>
                        <li><a href="https://www.instagram.com/hiappofficial/" target="blank"><img src={instagram} alt="instagram"/></a></li>
                    </div> */}
                </ul>
            </div>
        </div>
        <div className="wrapper-footer-last">
            <div className="container">
                <p>© Copyrights PT. Helo Kreasi Indonesia 2020. All Right Reserved</p>
            </div>
        </div>
    </div>
    )
}

export default Footer
