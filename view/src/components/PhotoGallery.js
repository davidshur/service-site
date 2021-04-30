import Carousel from "react-bootstrap/Carousel";

import john0 from "../images/john1.jpg";
import john1 from "../images/john2.jpg";
import john2 from "../images/john3.jpg";
import john3 from "../images/john4.jpg";
import john4 from "../images/john5.jpg";

const SLIDESHOW = [
    {
        id: 0,
        img: john0,
        alt: "john0",
        title: "title0",
        desc: "desc0"
    },
    {
        id: 1,
        img: john1,
        alt: "john1",
        title: "title1",
        desc: "desc1"
    },
    {
        id: 2,
        img: john2,
        alt: "john2",
        title: "title2",
        desc: "desc2"
    },
    {
        id: 3,
        img: john3,
        alt: "john3",
        title: "title3",
        desc: "desc3"
    },
    {
        id: 4,
        img: john4,
        alt: "john4",
        title: "title4",
        desc: "desc4"
    }];

function PhotoGallery() {
    return (
        <Carousel>
            {SLIDESHOW.map(slide=>(
                <Carousel.Item key={slide.id}>
                    <img
                        className="d-block"
                        src={slide.img}
                        alt={slide.alt}
                    />
                    <Carousel.Caption>
                        <h3>{slide.title}</h3>
                        <p>{slide.desc}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default PhotoGallery;