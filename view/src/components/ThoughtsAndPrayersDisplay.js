import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import ThoughtsAndPrayersForm from './ThoughtsAndPrayersForm';

function ThoughtsAndPrayersDisplay() {
  const [thoughtsAndPrayers, setThoughtsAndPrayers] = useState(null);

  useEffect(() => {
    getThoughtsAndPrayers();
  }, []);

  async function getThoughtsAndPrayers() {
    const { data } = await axios.get('/api/notes');
    setThoughtsAndPrayers(data);
  }


  return (
    <div>
      <h3>Thoughts and Prayers</h3>
      <hr />
      <CardColumns>
        <ThoughtsAndPrayersForm />
        {thoughtsAndPrayers && thoughtsAndPrayers.map(item => (
          <Card key={item._id}>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.message}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardColumns>
    </div>
  );
}

export default ThoughtsAndPrayersDisplay;