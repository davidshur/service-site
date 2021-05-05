import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import background_image from '../images/banner_background.jpg';

function Hero() {
  return (
    <Jumbotron className="d-flex flex-column align-items-center"
        style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${background_image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'}}>
      <h1 className="text-white">Memorial Service Replay</h1>
        <p className="text-white">A memorial service was hosted on April 30th, 2021 at 3pm
            to commemorate the amazing life of John Huynh. The recording is now available to view.
        </p>
      <p>
        <a
          href="https://youtu.be/AXuSxts3CIk"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="primary">Watch the Recording</Button>
        </a
>
      </p>
    </Jumbotron>
  );
}

export default Hero;