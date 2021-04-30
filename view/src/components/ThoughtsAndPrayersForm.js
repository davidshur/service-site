import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function ThoughtsAndPrayersForm() {
  return (
    <div className="col-12 col-md-4">
      <h3>Share Thoughts and Prayers</h3>
      <hr />
      <Card className="mb-3">
        <Card.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="email" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
              <Form.Text className="text-muted">
                Note: your name and message may be visible to other website visitors.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ThoughtsAndPrayersForm;