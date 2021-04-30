import john1 from "../images/john1.jpg";
import john2 from "../images/john2.jpg.jpg";
import john3 from "../images/john3.jpg.jpg";
import john4 from "../images/john4.jpg.jpg";
import john5 from "../images/john5.jpg.jpg";

const SLIDESHOW = [john1, john2, john3, john4, john5];

function PhotoGallery() {
    return (
        <Carousel>
            {SLIDESHOW.map(slide=>(
                <Carousel.Item>
                    <img
                        className="d-block w-100"
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