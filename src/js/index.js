import "../css/style.css";
import { createHeadings } from "./components/Menu/menu";
import { createHome } from "./components/home";
import { createFooter } from "./components/footer";

window.onload = async () => {
	await createHeadings();
	createHome();
	createFooter();
};