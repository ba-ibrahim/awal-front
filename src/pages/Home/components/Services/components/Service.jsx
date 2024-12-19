import "./Service.css"

export default function Service(props) { 

    const {header, img, title, txt, direction} = props;

    return (
        <div className="service-container">
            <div className="title">
                <h1>
                    {header}
                </h1>
                <h2>
                    {header}
                </h2>
            </div>
            <div className={`service ${direction}`}>
                <div className="image-preview">
                    <img src={img} alt={title} />
                </div>
                <div className="details">
                    <h1>{title}</h1>
                    <p>{txt}</p>
                </div>
            </div>
        </div>
)}