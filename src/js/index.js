import "../css/style.css";
  const imgNav = document.createElement("div");
  imgNav.classList.add("logo");
  header.appendChild(imgNav);
import { createHeadings } from "./components/menu";
window.onload = async () => {
  await createHeadings();
};
