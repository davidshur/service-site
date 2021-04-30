import Container from 'react-bootstrap/Container';
import ThoughtsAndPrayersDisplay from '../components/ThoughtsAndPrayersDisplay';
import ThoughtsAndPrayersForm from '../components/ThoughtsAndPrayersForm';

function ThoughtsAndPrayers() {
  return (
    <Container fluid className="d-flex flex-wrap">
      <ThoughtsAndPrayersForm />
      <ThoughtsAndPrayersDisplay />
    </Container>
  );
}

export default ThoughtsAndPrayers;