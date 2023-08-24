
import './App.css'
import { Navbar } from "./components/Navbar.tsx";
import { Route, Routes } from "react-router-dom";
import { Blog, Contact, Home, Projects, Mushroom } from "./components/pages";

function App() {
  const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show');
      }
      else{
        entry.target.classList.add('hidden');
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el)=>observer.observe(el));
  return (
    <>
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mushroom" element={<Mushroom />} />
      </Routes>
       
      </div>
    </>
  )
}

export default App
