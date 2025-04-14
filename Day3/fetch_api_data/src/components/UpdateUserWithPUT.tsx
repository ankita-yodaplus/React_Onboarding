import React, { useState } from 'react';
import axios from 'axios';

type UpdateUserResponse = {
  name: string;
  job: string;
  updatedAt: string;
};

const UpdateUserWithPUT: React.FC = () => {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [response, setResponse] = useState<UpdateUserResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleUpdate = async () => {
    try {
      const { data } = await axios.put<UpdateUserResponse>(
        'https://reqres.in/api/users/2',
        { name, job },
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
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2>PUT Request: Update User</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br /><br />
      <input
        type="text"
        placeholder="Job"
        value={job}
        onChange={(e) => setJob(e.target.value)}
      /><br /><br />
      <button onClick={handleUpdate}>Update User</button>

      {response && (
        <div style={{ marginTop: '1rem' }}>
          <h4>✅ User Updated:</h4>
          <p><strong>Name:</strong> {response.name}</p>
          <p><strong>Job:</strong> {response.job}</p>
          <p><strong>Updated At:</strong> {response.updatedAt}</p>
        </div>
      )}

      {error && (
        <div style={{ marginTop: '1rem', color: 'red' }}>❌ {error}</div>
      )}
    </div>
  );
};

export default UpdateUserWithPUT;
