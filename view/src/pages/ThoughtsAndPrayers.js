import Container from 'react-bootstrap/Container';
import ThoughtsAndPrayersDisplay from '../components/ThoughtsAndPrayersDisplay';

function ThoughtsAndPrayers() {
  return (
    <Container fluid className="d-flex flex-wrap">
      <ThoughtsAndPrayersDisplay />
    </Container>
  );
}

export default ThoughtsAndPrayers;