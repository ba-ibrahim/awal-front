import "./Header.css"

import book from "./book.png"
export default function Header() { 
    return (
        <header className="header">
            <div className="cta">
                <h1>
                    Awal University is better than any other university. <br/>
                    
                </h1>
                <button>
                        Get Started!
                </button>
            </div>
            <div className="three-d">


            
                <img src={book} alt="" />


            </div>
        </header>
)}