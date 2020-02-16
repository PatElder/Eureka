import { createSearchElements } from "./menuitem";
import { navList } from "../Menu/menu";
import { storeSearch } from "../../localStorage/localSearch";
import { data } from "../Menu/menu";

export function createSearch() {
  const listEl = document.createElement("li");
  const searchBtn = document.createElement("button");
  searchBtn.textContent = "Search";
  const searchEl = document.createElement("input");
  searchEl.setAttribute("type", "text");
  searchBtn.addEventListener("click", async () => {
    const searchTerm = formattedSearch(searchEl.value);
    storeSearch(searchTerm);
    createSearchElements();
    await data(searchTerm, 4, "en");
  });

  listEl.appendChild(searchEl);
  listEl.appendChild(searchBtn);
  navList.appendChild(listEl);
}

export const destroySearch = () => {
  document.querySelector("button").remove();
  document.querySelector("input").remove();
};

export const formattedSearch = searchWord =>
  searchWord
    .trim()
    .trim()
    .charAt(0)
    .toUpperCase() + searchWord.trim().substring(1);
