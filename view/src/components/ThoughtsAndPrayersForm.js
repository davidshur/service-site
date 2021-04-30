import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function ThoughtsAndPrayersForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  async function handleSubmit() {
    await axios.post('/api/notes', { name, message });
    setName('');
    setMessage('');
    setConfirmed(true);
  }

  return (
    <Card bg="primary" className="text-white mb-3">
      <Card.Body>
        <Card.Title>Share your thoughts and prayers!</Card.Title>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter your name" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Enter your thoughts and prayers" rows={3} />
            <Form.Text className="text-white">
              Note: Your name and message may be visible to other website visitors.
            </Form.Text>
          </Form.Group>
          {confirmed && <p style={{ fontSize: '12px' }} className="text-white">Your thought or prayer has been saved. You might see it on the thoughts and prayers page soon!</p>}
          <Button variant="outline-light" onClick={handleSubmit}>
            Share
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default ThoughtsAndPrayersForm;