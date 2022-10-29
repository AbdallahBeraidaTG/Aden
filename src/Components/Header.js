import React from 'react';
import Social from "./Social"

function Header() {

    return(
        <header>
          <div className="logo">
            <h1>A</h1>
          </div>
          <div className="navbar">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contacts</a></li>
            </ul>
          </div>
          <Social/>
        </header>
    );
    
}
export default Header;