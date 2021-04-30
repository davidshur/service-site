import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import background_image from '../images/banner_background.jpg';

function Hero() {
  return (
    <Jumbotron className="d-flex flex-column align-items-center"
        style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${background_image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'}}>
      <h1 className="text-white">Live Memorial Service </h1>
        <p className="text-white">We will be hosting a memorial service for John on <strong>April 30th, 2020 at 3pm.</strong> </p>
        <p className="text-white">Please join the Zoom livestream to help us commemorate the amazing life of John Huynh.</p>
      <p>
        <a
          href="https://us02web.zoom.us/j/88911364511?pwd=bEZqRzJFNVlyckdWczdqaXBFSXlJZz09"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="primary">Join the Livestream</Button>
        </a
>
      </p>
    </Jumbotron>
  );
}

export default Hero;