import "./index.css"
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

root.render(
  <Page/>
)

function Page(){
  return (
    <>
      <header>
        <img src="react-logo.svg" width="40px" alt="react logo"/>
      </header>
      <main>
        <h1>Fun facts about React:</h1>
        <ol>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 200K stars on GitHub</li>
          <li>Is maintained by Meta</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ol>
      </main>
      <footer>
        <small>© 2024 Aras development. All rights reserved.</small>
      </footer>
        
    </>
    
  )
}

{/* <img class="react-background"src="react-logo.svg" width="400px"/> */}