import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

function MessageVerification() {
  const [thoughtsAndPrayers, setThoughtsAndPrayers] = useState(null);

  useEffect(() => {
    getThoughtsAndPrayers();
  }, []);

  async function getThoughtsAndPrayers() {
    const { data } = await axios.get('/api/verification');
    setThoughtsAndPrayers(data);
  }

  async function handleClick(id) {
    await axios.post('/api/verification', { id });
    getThoughtsAndPrayers();
  }

  return (
    <div>
      <h3>Verify Posts Here</h3>
      <hr />
      <CardColumns>
        {thoughtsAndPrayers && thoughtsAndPrayers.map(item => (
          <Card bg={item.verified === 'false' ? 'danger' : ''} className={!item.verified === 'false' ? 'text-white' : ''} key={item._id}>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.message}</Card.Text>
              <Button id={item._id} onClick={event => handleClick(event.target.id)} variant={item.verified === 'false' ? 'outline-light' : 'outline-danger'}>{item.verified === 'false' ? 'Verify' : 'Remove'}</Button>
            </Card.Body>
          </Card>
        ))}
      </CardColumns>
    </div>
  );
}

export default MessageVerification;