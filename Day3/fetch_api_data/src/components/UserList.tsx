import React, { useEffect, useState } from "react";
import axios from "axios";

type User = {
  id: number;
  email: string;
  first_name: string;
};

type GetUserResponse = {
  data: User[];
};

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string>("");

  const getUsers = async () => {
    try {
      const { data, status } = await axios.get<GetUserResponse>(
        "https://reqres.in/api/users",
        {
          headers: {
            Accept: "application/json", // fixed typo here
          },
        }
      );
      console.log("API status:", status);
      setUsers(data.data); // Set the array inside `data`
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.message);
        console.log("error message:", error.message);
      } else {
        setError("An unexpected error occurred");
        console.log("unexpected error:", error);
      }
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>User List</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.first_name} ({user.email})
            </li>
          ))}
        </ul>
      ) : (
        !error && <p>Loading users...</p>
      )}
    </div>
  );
};

export default UserList;
