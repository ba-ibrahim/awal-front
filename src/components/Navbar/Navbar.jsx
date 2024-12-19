import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "./logo.png"

export default function Navbar() {
    const navigate = useNavigate()

    const handleLoginClick = () => {
        navigate('/login')
    }

    return (
        <nav className="navbar container mx-auto w-[70%]">
            <div className="logo">
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            <div className="navigation">
                <ul>
                    {/* Home Profil Blog Resources Train Meetings */}

                        <>
                            {/* use Link href for About us Services Reviews FAQ */}
                            <li>
                                <Link href="#about">About us</Link>
                            </li>
                            <li>
                                what we offer
                            </li>
                            <li>
                                <Link href="#reviews">Reviews</Link>
                            </li>
                            <li>
                                <Link href="#faq">FAQ</Link>
                            </li>
                        </>

                </ul>
            </div>

            {/* {
                
                <div className="user-info">
                    <h3>
                        Hello, Ivraheem
                    </h3>
                    <div className="user-pp">
                        <img src="https://example.com/profile_picture.jpg" alt="PP" />
                    </div>
                </div>
            } */}

            {
                
                <div className="login-button">
                    <Link onClick={handleLoginClick}>Login</Link>
                </div>
            } 

        </nav>
    );
}
