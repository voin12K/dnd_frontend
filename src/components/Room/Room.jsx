import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function Room() {
  const { roomCode } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        const response = await fetch('http://localhost:4444/auth/me', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h1>Room Code: {roomCode}</h1>
      {user ? <h2>Welcome, {user.fullName}</h2> : <p>Loading user data...</p>}
      <p>Here will be the list of players...</p>
    </div>
  );
}
