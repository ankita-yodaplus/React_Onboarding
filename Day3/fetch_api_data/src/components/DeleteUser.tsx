import React, { useState } from 'react';
import axios from 'axios';

const DeleteUser: React.FC = () => {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async () => {
    try {
      const { data, status } = await axios.delete(
        'https://reqres.in/api/users/2',
        {
          headers: {
            Accept: 'application/json',
          },
        }
      );

      console.log('Response:', data);
      console.log('Status:', status);

      setStatus(status);
      setMessage('User deleted successfully');
      setError(null);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('Error message:', error.message);
        setError(error.message);
      } else {
        console.log('Unexpected error:', error);
        setError('An unexpected error occurred');
      }
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Delete User</h2>
      <button
        onClick={handleDelete}
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        Delete User
      </button>

      {message && <p style={{ color: 'green', marginTop: '1rem' }}>{message}</p>}
      {status && <p>Status Code: {status}</p>}
      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
    </div>
  );
};

export default DeleteUser;
