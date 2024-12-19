import "./OneInfo.css"

/**
 * A simple component
 *
 * @component
 * @param {string} title - The text to be display on the button
 * @param {string} details - The click event handler.
 * @param {string} color - this color determines the color of the info card
 * @param {string} icon - The icon that shows up on top of the one info
 * @returns {JSX.Element} The rendered button component.
 *
 */

export default function OneInfo({icon, title, details, color}) { 
    
    
    return (
        <div className="one-info" style={{backgroundColor: color}}>
            <img src={icon} alt="" />
            <h3>
                {title}
            </h3>
            <p>
                {details}
            </p>
        </div>
)}