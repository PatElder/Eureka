import "../css/style.css";
import { createHeadings } from "./components/Menu/menu";

import { createFooter } from "./components/footer";
window.onload = async () => {
  await createHeadings();

  createFooter();
};
