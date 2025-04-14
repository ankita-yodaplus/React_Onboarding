import React, { useState } from "react";
import axios from "axios";

type CreateUserResponse = {
  name: string;
  job: string;
  id: string;
  createdAt: string;
};

const CreateUserForm: React.FC = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [response, setResponse] = useState<CreateUserResponse | null>(null);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { data, status } = await axios.post<CreateUserResponse>(
        "https://reqres.in/api/users",
        { name, job },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      console.log("✅ Created user:", data);
      console.log("Status:", status);
      setResponse(data);
      setError("");
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        console.log("❌ Axios error:", err.message);
        setError(err.message);
      } else {
        console.log("❌ Unexpected error:", err);
        setError("An unexpected error occurred");
      }
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Job"
          value={job}
          onChange={(e) => setJob(e.target.value)}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      {response && (
        <div style={{ marginTop: "1rem", color: "green" }}>
          <h3>User Created:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}

      {error && (
        <div style={{ marginTop: "1rem", color: "red" }}>
          <strong>Error:</strong> {error}
        </div>
      )}
    </div>
  );
};

export default CreateUserForm;
