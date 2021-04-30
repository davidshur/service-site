import { useEffect, useState } from 'react';
import axios from 'axios';

function ThoughtsAndPrayersDisplay() {
  const [thoughtsAndPrayers, setThoughtsAndPrayers] = useState([]);

  useEffect(() => {
    const newThoughtsAndPrayers = getThoughtsAndPrayers();
    setThoughtsAndPrayers(newThoughtsAndPrayers);
  }, []);

  async function getThoughtsAndPrayers() {
    const response = axios.get('/api/notes');
    setThoughtsAndPrayers(response);
  }

  return (
    <>
      {thoughtsAndPrayers.length > 1 ? thoughtsAndPrayers.map(item => <p>{item}</p>) : <p>nope</p>}
    </>
  );
}

export default ThoughtsAndPrayersDisplay;