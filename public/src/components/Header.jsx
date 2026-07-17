import '../styles/Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <a className="logo" href="#home" aria-label="John Christian Bautista home">
        JOHN CHRISTIAN BAUTISTA
        </a>
        <nav className="nav">
          <a href="#projects">Work</a>
          <a href="#features">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
