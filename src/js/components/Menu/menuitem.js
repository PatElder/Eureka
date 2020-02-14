import { navList, data } from "./menu";
import { destroySearch, createSearch, searchTerm } from "../Menu/searchBar";

export const createSearchElements = async () => {
  const searchedEl = document.createElement("li");
  const searchedTerm = document.querySelector("input").value.trim();
  const innerText =
    searchedTerm.charAt(0).toUpperCase() + searchedTerm.substring(1);
  searchedEl.textContent = innerText;
  searchedEl.addEventListener("click", async () => {
    await data(searchedTerm, 4, "en");
  });
  destroySearch();
  navList.appendChild(searchedEl);
  createSearch();
  document.querySelector("input").value = "";
};
