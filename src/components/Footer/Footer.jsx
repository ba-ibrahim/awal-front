import "./Footer.css"

export default function Footer() { 
    return (
        <footer className="footer container mx-auto w-[70%]">
            <div className="columns">
                <div className="footer-column">
                    <h3>
                        Follow us
                    </h3>
                    <div className="links">
                        <a href="">
                            facebook
                        </a>
                        <a href="">
                            twitter
                        </a>
                        <a href="">
                            instagram
                        </a>
                        <a href="">
                            linkedin
                        </a>
                    </div>
                </div>
                <div className="footer-column">
                    <h3>
                        Help & Support
                    </h3>
                    <div className="links">
                        <a href="">
                            FAQ
                        </a>
                        <a href="">
                            Contact Us
                        </a>
                        <a href="">
                            Terms & Conditions
                        </a>
                    </div>
                </div>
                <div className="footer-column">
                    <h3>
                        Company
                    </h3>
                    <div className="links">
                        <a href="">
                            About Us
                        </a>
                        <a href="">
                            Careers
                        </a>
                        <a href="">
                            Blog
                        </a>
                    </div>
                </div>
                <div className="footer-column">
                    <h3>
                        Languages
                    </h3>
                    <div className="links">
                        <a href="">
                            English
                        </a>
                        <a href="">
                            Spanish
                        </a>
                        <a href="">
                            French
                        </a>
                        <a href="">
                            Italian
                        </a>
                    </div>
                </div>
                
            </div>
            <div className="copyrights">
                    <p>
                        &copy; 2022 AwalFront. All rights reserved.
                    </p>
            </div>
        </footer>
)}