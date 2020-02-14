import { navList, data } from "./menu";
import {
  destroySearch,
  createSearch,
  formattedSearch
} from "../Menu/searchBar";

let i = 3;

export const createSearchElements = async () => {
  const searchedEl = document.createElement("li");
  if (i < 6) {
    searchedEl.setAttribute("data-id", i++);
  } else {
    i = 3;
  }
  const searchedTerm = formattedSearch(document.querySelector("input").value);
  searchedEl.textContent = searchedTerm;
  searchedEl.addEventListener("click", async () => {
    await data(searchedTerm, 4, "en");
  });
  destroySearch();
  navList.appendChild(searchedEl);
  createSearch();
  document.querySelector("input").value = "";
};
