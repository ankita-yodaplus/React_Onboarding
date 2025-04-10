// import { useState } from 'react'

import './App.css'
import ProjectPage from './projects/ProjectPage'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router'
import HomePage from './home/HomePage';
import logo from './assets/logo.jpeg'

function App() {
  // const [count, setCount] = useState(0)

  return (
    // <>
    //   <blockquote cite="Benjamin Franklin">
    //   Tell me and I forget, teach me and I may remember, involve me and I learn.

    //   </blockquote>
    // </>

    // <div className='container'>
    //   <ProjectPage />
    // </div>

    <BrowserRouter>
      <header className='sticky'>
        <span className='logo'>
          <img src={logo} alt='logo' width="49" height="99"/>
        </span>
        <NavLink to="/" className="button rounded">
          <span className='icon-home'></span>
          Home
        </NavLink>
        <NavLink to="/projects" className="button rounded">
          Projects
        </NavLink>
      </header>
      <div className='container'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects' element={<ProjectPage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App
