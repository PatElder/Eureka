import "../css/style.css";
import { createHeadings } from "./components/Menu/menu";
import { createFooter } from "./components/footer";

window.onload = async () => {
  await createHeadings();

  createFooter();
};

window.onclick = function(event) {
  if (!event.target.matches(".dropbtn")) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
