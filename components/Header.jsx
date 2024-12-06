export default function Header(){
    return(
      <header>
        <img className="nav-logo" src="react-logo.svg" alt="react logo"/>
        <nav className="nav-list">
          <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    )
  }