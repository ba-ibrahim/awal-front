import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Information from "./components/Information/Information";
import Reviews from "./components/Reviews/Reviews";
import Services from "./components/Services/Services";
import "./Home.css"

export default function Home() { 
    return (
        <div className="home container mx-auto w-[70%]">
            <Header/>
            <Information/>
            <Services/>
            <Reviews/>
            <Contact/>

        </div>
)}