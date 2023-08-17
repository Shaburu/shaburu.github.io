
import './App.css'
import { Navbar } from "./components/Navbar.tsx";
import { Route, Routes } from "react-router-dom";
import { Blog, Contact, Home, Projects } from "./components/pages";

function App() {

  return (
    <>
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
       
      </div>
    </>
  )
}

export default App
