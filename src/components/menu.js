import React from "react"
import { Link } from 'gatsby'

const Menu = () => {
  return (
    <nav>
      <ul>
        <Link to="/"><li>Strona główna</li></Link>
        <li>Edukacja przedszkolna</li>
        <li>Edukacja wczesnoszkolna</li>
        <li>Nauczanie języka angielskiego</li>
        <li>Pedagogika</li>
        <li>Psychologia</li>
        <li>O mnie</li>
      </ul>
    </nav>
  )
}

export default Menu
