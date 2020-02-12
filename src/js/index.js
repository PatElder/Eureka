import "../css/style.css";
import { createHeadings } from "./components/menu";
window.onload = async () => {
  await createHeadings();
};
