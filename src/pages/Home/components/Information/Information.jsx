import OneInfo from "../OneInfo/OneInfo";
import "./Information.css"
import icon1 from "./edu.png"

export default function Information() { 
    const infoArray = [
        { 
            icon: icon1, 
            title: "Who are we?", 
            details: "This is a more detailed description of the first info item. It provides insight and elaborates to cover roughly twenty words.",
            bgColor: "#ff007f" // Vibrant pink
        },
        { 
            icon: icon1, 
            title: "What is Awal?", 
            details: "The second info item contains valuable details and expands to ensure a full understanding of the key points within twenty words.",
            bgColor: "#ff4500" // Orange red
        },
        { 
            icon: icon1, 
            title: "What awal means?", 
            details: "Details about this info item are given here, offering a more extensive overview that includes roughly twenty descriptive words.",
            bgColor: "#1e90ff" // Dodger blue
        },
        { 
            icon: icon1, 
            title: "Info 4", 
            details: "This is a more detailed description of the first info item. It provides insight and elaborates to cover roughly twenty words.",
            bgColor: "#32cd32" // Lime green
        },
        { 
            icon: icon1, 
            title: "Info 5", 
            details: "The second info item contains valuable details and expands to ensure a full understanding of the key points within twenty words.",
            bgColor: "#ff69b4" // Hot pink
        },
        { 
            icon: icon1, 
            title: "Info 6", 
            details: "Details about this info item are given here, offering a more extensive overview that includes roughly twenty descriptive words.",
            bgColor: "#ffd700" // Gold
        }
    ];
    
    
    return (
        <div className="about-us">
            <div className="title">
                <h1>
                    About us
                </h1>
                <h2>
                    About us
                </h2>
            </div>
        <div className="information md:container md:mx-auto">
            
            {
                infoArray.map((info, index) => (
                
                    <OneInfo key={index} icon={info.icon} title={info.title} details={info.details} color={info.bgColor}/>

                ))
            }
        </div></div>
)}