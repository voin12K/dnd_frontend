// frontend/src/App.js

import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('/api/data') // Здесь /api/data - это URL вашего API на бэкенде
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Data from Backend:</h1>
      <p>{data}</p>
    </div>
  );
}

export default App;
