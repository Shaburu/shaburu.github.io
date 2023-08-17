import React, { useState, useEffect, useRef} from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  
  let menuRef = useRef();
  let menuRef2 = useRef();

  useEffect(() =>{
    let handler =(e)=>{
      if(!menuRef2.current.contains(e.target) && !menuRef.current.contains(e.target)){
        setMenuOpen(false);
        console.log("!menuRef.current.contains(e.target)")
        
      }
    };
    document.addEventListener('mousedown',handler)

    return() =>{
      document.removeEventListener('mousedown',handler)
      console.log("document.removeEventListener('mousedown',handler)")

    }
  });

  return (
    <nav>
      <Link to="/" className="title">
        SHABURU
      </Link>
      <div className="menu" ref={menuRef2} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""} ref={menuRef} >
        <li>
          <NavLink to="/about">BLOG</NavLink>
        </li>
        <li>
          <NavLink to="/services">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};