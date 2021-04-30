import {Container} from "react-bootstrap";
import Eulogy from "../components/Eulogy";
import SlideshowVideo from "../components/SlideshowVideo";
import BaptismVideo from "../components/BaptismVideo";

function Home() {
  return(
      <Container>
          <SlideshowVideo />
          <Eulogy />
      </Container>
  );
}

export default Home;