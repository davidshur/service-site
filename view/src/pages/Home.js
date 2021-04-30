import {Container} from "react-bootstrap";
import Eulogy from "../components/Eulogy";
import ThoughtsAndPrayersDisplay from '../components/ThoughtsAndPrayersDisplay'
import SlideshowVideo from "../components/SlideshowVideo";
import BaptismVideo from "../components/BaptismVideo";

function Home() {
  return(
      <Container fluid className="d-flex flex-wrap">
          <Eulogy />
          <ThoughtsAndPrayersDisplay />
      </Container>
  );
}

export default Home;