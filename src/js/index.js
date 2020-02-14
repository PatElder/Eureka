import { createHeadings } from "./components/Menu/menu";
import { createHome } from "./components/home";
import { createFooter } from "./components/footer";
import "../css/style.css";

window.onload = async () => {
  await createHeadings();
  createFooter();
};
