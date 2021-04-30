import BaptismVideo from "../components/BaptismVideo";
import SlideshowVideo from "../components/SlideshowVideo";
import Container from "react-bootstrap/Container";

function Videos() {
  return (
      <Container fluid className="d-flex flex-column align-items-center">
        <div className="d-flex flex-column mb-4">
          <h3 className="mb-3">Memories of John</h3>
          <SlideshowVideo />
        </div>
        <div className="d-flex flex-column mb-4">
          <h3 className="mb-3">John's Baptism</h3>
          <BaptismVideo />
        </div>
      </Container>
  );
}

export default Videos;