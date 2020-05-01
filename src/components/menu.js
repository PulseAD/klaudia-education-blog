import React, { useState } from 'react'
import { Link } from 'gatsby'

const Menu = () => {
  const [displayOverlay, setDisplayOverlay] = useState(false)
  return (
    <nav>
      <ul className="normal-menu">
        <li><Link to="/">Strona główna</Link></li>
        <li><Link to="/elementary-education">Edukacja przedszkolna</Link></li>
        <li><Link to="/kindergarten-education">Edukacja wczesnoszkolna</Link></li>
        <li><Link to="/pedagogics">Pedagogika</Link></li>
        <li><Link to="/psychology">Psychologia</Link></li>
        <li><Link to="/about-me">O mnie</Link></li>
      </ul>
      <div
        className="hamburger"
        onClick={() => setDisplayOverlay(true)}
        onKeyPress={() => setDisplayOverlay(true)}
        role="none"
        >
          &#9776;
      </div>
      {displayOverlay &&
        <div className="overlay">
          <div
            className="cross"
            onClick={() => setDisplayOverlay(false)}
            onKeyPress={() => setDisplayOverlay(false)}
            role="none"
            >
              &times;
          </div>
          <div className="overlay-content">
              <Link to="/">
                Strona główna
              </Link>
              <Link to="/elementary-education">
                Edukacja przedszkolna
              </Link>
              <Link to="/kindergarten-education">
                Edukacja wczesnoszkolna
              </Link>
              <Link to="/pedagogics">
                Pedagogika
              </Link>
              <Link to="/psychology">
                Psychologia
              </Link>
              <Link to="/about-me">
                O mnie
              </Link>
          </div>
        </div>
      }
    </nav>
  )
}

export default Menu
