import {Container} from "react-bootstrap";
import Eulogy from "../components/Eulogy";
import Slideshow from "../components/Slideshow";

function Home() {
  return(
      <Container>
          <Slideshow />
          <Eulogy />
      </Container>
  );
}

export default Home;