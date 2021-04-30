import Container from "react-bootstrap/Container";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";

import john0 from "../images/john1.jpg";
import john1 from "../images/john2.jpg";
import john2 from "../images/john3.jpg";
import john3 from "../images/john4.jpg";
import john4 from "../images/john5.jpg";

const PHOTOS = [
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

function Photos() {
  return (
      <Container>
          <h3>Photo Gallery</h3>
          <hr/>
          <CardColumns>
              {PHOTOS.map(photo=>(
                  <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={photo.img} />
                  </Card>
              ))}
          </CardColumns>
      </Container>
  );
}

export default Photos;