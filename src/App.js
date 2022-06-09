import './App.css'

import { themeContext } from './Context'
import { useContext } from 'react'
import { Route, Routes } from "react-router-dom"
import Blogs from "./components/Blogs/Blogs"
import Home from './components/Home/Home'
import About from './components/About/About'
import ProjectDetails from './components/ProjectDetails/ProjectDetails'
import NotFound from './components/NotFound/NotFound'


function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/project/:projectId" element={<ProjectDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  )
}

export default App
