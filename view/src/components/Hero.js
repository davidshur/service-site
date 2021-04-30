import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Hero() {
  return (
    <Jumbotron>
      <h1>Hello, world!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
      </p>
      <p>
        <a
          href="https://us02web.zoom.us/j/88911364511?pwd=bEZqRzJFNVlyckdWczdqaXBFSXlJZz09"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="primary">Join the Livestream</Button>
        </a>
      </p>
    </Jumbotron>
  );
}

export default Hero;