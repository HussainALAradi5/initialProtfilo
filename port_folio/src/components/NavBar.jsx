import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  const [active, setActive] = useState(false) //track the nav is it active or not
  const opeenNav = () => {
    setActive(!active)
  }
  const closeNav = () => {
    setActive(false)
  }
  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth <= 500) {
        closeNav
      }
    }
    const listen = window.removeEventListener('resize', handleSize)
    return () => {
      listen
    }
  }, []) //so thee nav will be clossed if the width is <=500
  useEffect(() => {
    if (window.innerWidth <= 1200) closeNav
  })
  return (
    <nav className={`navBar ${active}`}>
      <div>
        <img src="" alt="logo" />
      </div>
      <a
        href=""
        className={`navBarMenu ${active ? `active` : ''}`}
        onClick={opeenNav}
      >
        <div className="navBarMenuLine"></div>
        <div className="navBarMenuLine"></div>
        <div className="navBarMenuLine"></div>
      </a>
      <div className={`navBarItems ${active ? `active` : ''}`}>
        <ul>
          <li>
            <Link onClick={closeNav} className="navBarContent">
              Experience
            </Link>
          </li>
          <li>
            <Link onClick={closeNav} className="aboutMe">
              About me
            </Link>
          </li>
          <li>
            <Link onClick={closeNav} className="skills">
              Skills
            </Link>
          </li>
          <li>
            <Link onClick={closeNav} className="contectMeButton">
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default NavBar
