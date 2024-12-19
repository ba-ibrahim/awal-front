import ComingSoon from "../../../../components/ComingSoon/ComingSoon";
import Marquee from "react-fast-marquee";
import "./Reviews.css"
import pp from "./cesar-rincon-XHVpWcr5grQ-unsplash.jpg"
export default function Reviews() { 
    const reviews = [
        {
          owner: "John Doe",
          review: "Amazing service! Highly recommend to everyone."
        },
        {
          owner: "Jane Smith",
          review: "A great experience from start to finish. Will definitely come back!"
        },
        {
          owner: "Alex Johnson",
          review: "Good value for the price, but there’s room for improvement in customer service."
        },
        {
          owner: "Chris Lee",
          review: "Fantastic products and quick delivery. I'm very satisfied!"
        },
        {
          owner: "Sam Brown",
          review: "Decent quality, but the response time could be better."
        },
        {
          owner: "Emma Wilson",
          review: "Superb attention to detail and very responsive support team!"
        },
        {
          owner: "Liam Turner",
          review: "Top-notch quality and fast delivery. Exceeded my expectations."
        },
        {
          owner: "Olivia Martin",
          review: "Customer service was helpful, but the website could use some improvements."
        },
        {
          owner: "Ethan Miller",
          review: "Great overall experience! Products arrived on time and as described."
        }
      ];
      
    return (
        <div className="reviews">
            <div className="title">
                <h1>
                    Testimonials
                </h1>
                <h2>
                    Testimonials
                </h2>
            </div>
            <Marquee>
                
            {reviews.map((review, index) => (
                <div key={index} className="review">
                    <h2>
                        <img 
                            src={`https://i.pravatar.cc/300?u=${review.owner}`} 
                            alt="" 
                            style={{ display: "inline" }} 
                        />
                        {review.owner}
                    </h2>
                    <p>
                        {review.review}
                    </p>
                </div>
            ))}


            </Marquee>
        </div>
)}