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
    <div className="col-12 col-md-4">
      <h3>Share Thoughts and Prayers</h3>
      <hr />
      <Card className="mb-3">
        <Card.Body>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter your name" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Enter your thoughts and prayers" rows={3} />
              <Form.Text className="text-muted">
                Note: Your name and message may be visible to other website visitors.
              </Form.Text>
            </Form.Group>
            {confirmed && <p style={{ fontSize: '12px' }} className="text-success">Your thought or prayer has been saved. You might see it on the thoughts and prayers page soon!</p>}
            <Button variant="primary" onClick={handleSubmit}>
              Share
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ThoughtsAndPrayersForm;