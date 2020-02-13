import "../css/style.css";
import "./components/footer";

import { createHeadings } from "./components/menu";
import { createHome } from "./components/home";
import { createFooter } from "./components/footer";
window.onload = async () => {
  await createHeadings();
  createHome();
  createFooter();
};
