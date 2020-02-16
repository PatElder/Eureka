import { createSearchElements } from "./menuitem";
import { storeSearch } from "../../localStorage/localSearch";
import { data } from "../Menu/menu";

export function createSearch() {
  const listEl = document.createElement("li");
  const searchBtn = document.createElement("button");
  searchBtn.textContent = "Search";
  const searchEl = document.createElement("input");
  searchEl.setAttribute("type", "text");

  searchBtn.addEventListener("click", async () => {
    const searchTerm = searchEl.value;
    if(searchTerm !== null){
    storeSearch(searchTerm);
    createSearchElements();
    await data(searchTerm, 4, "en");
    } else {
      alert("Search requires a value.")
    }
  });
  searchEl.addEventListener("keyup", () => {
  if (event.keyCode === 13) {
    searchBtn.click();
  }
  });
  listEl.appendChild(searchEl);
  listEl.appendChild(searchBtn);
  console.log(
    document.getElementById("GRACIA"));
}
