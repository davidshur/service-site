import {Container} from "react-bootstrap";
import Eulogy from "../components/Eulogy";
import ThoughtsAndPrayersDisplay from '../components/ThoughtsAndPrayersDisplay';

function Home() {
  return(
      <Container>
          <Eulogy />
          <ThoughtsAndPrayersDisplay />
      </Container>
  );
}

export default Home;