import React from "react"
import { Link } from 'gatsby'

const Menu = () => {
  return (
    <nav>
      <ul>
        <Link to="/"><li>Strona główna</li></Link>
        <Link to="/elementary-education"><li>Edukacja przedszkolna</li></Link>
        <Link to="/kindergarten-education"><li>Edukacja wczesnoszkolna</li></Link>
        <Link to="/teaching-english"><li>Nauczanie języka angielskiego</li></Link>
        <Link to="/pedagogics"><li>Pedagogika</li></Link>
        <Link to="/psychology"><li>Psychologia</li></Link>
        <li>O mnie</li>
      </ul>
    </nav>
  )
}

export default Menu
