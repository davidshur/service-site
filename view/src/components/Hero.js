import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Hero() {
  return (
    <Jumbotron>
      <h1>Live Memorial Service </h1>
        <p>We will be hosting a memorial service for John on April 30th, 2020 at 3pm. </p>
        <p>Please join the Zoom livestream to help us commemorate the amazing life of John Huynh.</p>
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