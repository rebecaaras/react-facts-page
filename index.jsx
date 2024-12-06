import "./index.css"
import { createRoot } from "react-dom/client";
import Page from "./components/Page";

const root = createRoot(document.getElementById("root"));

root.render(
  <Page/>
)