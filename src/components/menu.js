import React, { useState } from 'react'
import { Link } from 'gatsby'

const Menu = () => {
  const [displayOverlay, setDisplayOverlay] = useState(false)
  return (
    <nav>
      <ul class="normal-menu">
        <li><Link to="/">Strona główna</Link></li>
        <li><Link to="/elementary-education">Edukacja przedszkolna</Link></li>
        <li><Link to="/kindergarten-education">Edukacja wczesnoszkolna</Link></li>
        <li><Link to="/teaching-english">Nauczanie języka angielskiego</Link></li>
        <li><Link to="/pedagogics">Pedagogika</Link></li>
        <li><Link to="/psychology">Psychologia</Link></li>
        <li>O mnie</li>
      </ul>
      <div className="hamburger" onClick={() => setDisplayOverlay(true)}>&#9776;</div>
      {displayOverlay &&
        <div className="overlay">
          <div className="cross" onClick={() => setDisplayOverlay(false)}>&times;</div>
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
              <Link to="/teaching-english">
                Nauczanie języka angielskiego
              </Link>
              <Link to="/pedagogics">
                Pedagogika
              </Link>
              <Link to="/psychology">
                Psychologia
              </Link>
              <Link to="/">
                O mnie
              </Link>
          </div>
        </div>
      }
    </nav>
  )
}

export default Menu
