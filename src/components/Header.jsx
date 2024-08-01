import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import logo from "../logo.png"

function Header() {
  
    const [theme, setTheme] = useState(
      JSON.parse(localStorage.getItem("theme")) || "medium"
    );
  
    useEffect(() => {
      localStorage.setItem("theme", JSON.stringify(theme));
      document.documentElement.removeAttribute("class");
      document.documentElement.classList.add(theme);
    }, [theme]);
  

  return (
    <>
        <header>
            <div className='logo'>
            <img src={logo} alt="Listify" width="40" className="d-inline-block align-top mx-2" />
            <span>Listify</span>
            </div>
            
            <Link to="/DailyTaskHome">Daily Tasks</Link>
            <div className='themes'>
              <span onClick={() => setTheme("light")} className={theme === "light" ? "light activeTheme" : "light"}></span>
              <span onClick={() => setTheme("dark")}  className={theme === "dark" ? "dark activeTheme" : "dark"}></span>
              <span onClick={() => setTheme("gradient")} className={theme === "gradient" ? "gradient activeTheme" : "gradient"}></span>
              <span onClick={() => setTheme("thOne")} className={theme === "thOne" ? "thOne activeTheme" : "thOne"}></span>
              <span onClick={() => setTheme("thTwo")} className={theme === "thTwo" ? "thTwo activeTheme" : "thTwo"}></span>
            </div>
        </header>
        
    </>
  )
}

export default Header
