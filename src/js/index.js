import "../css/style.css";
import { createHeadings } from "./components/menu";
import { createFooter } from "../js/components/footer";
window.onload = async () => {
  await createHeadings();
  createFooter();
};
