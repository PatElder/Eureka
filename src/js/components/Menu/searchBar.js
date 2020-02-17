import {
	storeSearch,
	searchArray,
	suggestRay
} from "../../localStorage/localSearch";
import { data } from "../Menu/menu";
import { autocomplete } from "./autocomplete";

export function createSearch() {
	const listEl = document.createElement("li");
	const searchBtn = document.createElement("button");
	searchBtn.textContent = "Search";
	const searchEl = document.createElement("input");
	searchEl.setAttribute("type", "search");
	searchEl.id = "searchBar";

	searchBtn.addEventListener("click", async () => {
		const searchTerm = searchEl.value;
		if (searchTerm !== null) {
			storeSearch(searchTerm);
			await data(searchTerm, 4, "en");
		} else {
			alert("Search requires a value.");
		}
	});
	searchEl.addEventListener("keyup", () => {
		if (event.keyCode === 13) {
			searchBtn.click();
		}
	});
	listEl.appendChild(searchEl);
	listEl.appendChild(searchBtn);
	document.getElementById("myDropdown").appendChild(listEl);
}
