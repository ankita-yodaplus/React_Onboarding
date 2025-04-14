import React, { useState } from 'react';
import axios from 'axios';

type UpdateUserResponse = {
  name: string;
  job: string;
  updatedAt: string;
};

const UpdateUser: React.FC = () => {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [response, setResponse] = useState<UpdateUserResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleUpdate = async () => {
    try {
      const userId = 2; // Change as needed

      const { data } = await axios.patch<UpdateUserResponse>(
        `https://reqres.in/api/users/${userId}`,
        {
          name,
          job,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );

      setResponse(data);
      setError(null);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>Update User</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />{' '}
      <br />
      <input
        type="text"
        placeholder="Enter job"
        value={job}
        onChange={(e) => setJob(e.target.value)}
      />{' '}
      <br />
      <button onClick={handleUpdate} style={{ marginTop: '1rem' }}>
        Update
      </button>

      {response && (
        <div style={{ marginTop: '1rem' }}>
          <h4>✅ User updated:</h4>
          <p>Name: {response.name}</p>
          <p>Job: {response.job}</p>
          <p>Updated At: {response.updatedAt}</p>
        </div>
      )}

      {error && (
        <div style={{ color: 'red', marginTop: '1rem' }}>❌ {error}</div>
      )}
    </div>
  );
};

export default UpdateUser;
