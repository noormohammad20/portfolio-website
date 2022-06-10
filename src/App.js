import './App.css'

import { themeContext } from './Context'
import { useContext } from 'react'
import { Route, Routes } from "react-router-dom"
import Blogs from "./components/Blogs/Blogs"
import Home from './components/Home/Home'
import About from './components/About/About'
import NotFound from './components/NotFound/NotFound'
import ManufacturerDetails from './components/ManufacturerDetails/ManufacturerDetails'
import Warehouse from './components/Warehouse/Warehouse'
import Learn from './components/Learn/Learn'


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
        <Route path="/manufacturer" element={<ManufacturerDetails />} />
        <Route path='/warehouse' element={<Warehouse />} />
        <Route path='/learn' element={<Learn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  )
}

export default App
