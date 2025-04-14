import UsHolidays from "./components/UsHolidays"
import UserList from "./components/UserList"
import CreateUserForm from "./components/CreateUserForm"
import UpdateUser from "./components/UpdateUser"
import UpdateUserWithPUT from "./components/UpdateUserWithPut"
import DeleteUser from "./components/DeleteUser"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  

  return (
    <>
      {/* <UsHolidays /> */}
      {/* <UserList /> */}
      {/* <CreateUserForm /> */}
      {/* <UpdateUser /> */}
      {/* <UpdateUserWithPUT /> */}
      {/* <DeleteUser /> */}

      <Router>
      <div style={{ padding: '1rem' }}>
        {/* Navigation Menu */}
        <nav style={{ marginBottom: '1rem' }}>
          <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
          <Link to="/holidays" style={{ marginRight: '1rem' }}>US Holidays</Link>
          <Link to="/users">User List</Link> |{" "}
          <Link to="/create">Create User</Link> |{" "}
          <Link to="/update">Update (PATCH)</Link> |{" "}
          <Link to="/put-update">Update (PUT)</Link> |{" "}
          <Link to="/delete">Delete User</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<h2>Welcome to the Dashboard</h2>} />
          <Route path="/holidays" element={<UsHolidays />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/create" element={<CreateUserForm />} />
          <Route path="/update" element={<UpdateUser />} />
          <Route path="/put-update" element={<UpdateUserWithPUT />} />
          <Route path="/delete" element={<DeleteUser />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
