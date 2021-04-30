import BaptismVideo from "../components/BaptismVideo";
import SlideshowVideo from "../components/SlideshowVideo";
import Container from "react-bootstrap/Container";

function Videos() {
  return (
      <Container>
        <h1>Memories of John</h1>
        <hr/>
        <SlideshowVideo />
        <h1>John's Baptism</h1>
        <hr/>
        <BaptismVideo />
      </Container>
  );
}

export default Videos;