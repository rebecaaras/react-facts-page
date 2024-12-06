import "./index.css"
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

function Header(){
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

function MainContent(){
  return(
    <main>
      <h1>Fun facts about React:</h1>
      <ol className="facts-list">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ol>
    </main>
  )
}

function Footer(){
  return(
    <footer>
      <span>© 2024 Aras development. All rights reserved.</span>
    </footer>
  )
}

function Page(){
  return (
    <>
      <Header/>
      <MainContent/>
      <Footer/>        
    </>
  )
}

root.render(
  <Page/>
)

{/* <img class="react-background"src="react-logo.svg" width="400px"/> */}