import "./index.css"
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

root.render(
  <body>
    <main>
      <img src="react-logo.svg" width="40px"/>
      <h1>Fun facts about React:</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <Page/>
    </main>
    <img class="react-background"src="react-logo.svg" width="400px"/>
  </body>
)

function Page(){
  return (
    <ol>
      <li>React is a popular library</li>
      <li>Many job openings ask for React</li>
    </ol>
  )
}