import ComingSoon from "../../../../components/ComingSoon/ComingSoon";
import Service from "./components/Service";
import image from "./components/older-person-using-video-call-feature-their-device.jpg"

export default function Services() { 
    const data = [
        {
            header: "Meetings",
            image: image,
            title: "Zoom classes with your favorite mentor",
            direction: "left",
            content: "Join interactive Zoom sessions with experienced mentors to get personalized guidance and support in your studies."
        },
        {
            header: "Resources",
            image: image,
            title: "Online tutoring sessions with your favorite tutor",          
            direction: "right",
            content: "Get access to the best resources for your university classes and lectures, including textbooks, online tutorials, and video lectures"
        },
        {
            image:image,
            header: "AwalBlog",
            title: "Awalblog to be aware of the latests in your university",
            direction: "left",
            content: "Stay updated with the latest news, events, and insights at your university through Awalblog, your go-to source for university happenings."
        }
      ];
      
    return (
        <>
            {
                data.map((service, index) => (
                    <Service key={index} title={service.title} txt={service.content} img={service.image} direction={service.direction} header={service.header} />
                ))
            }  
        </>
)}