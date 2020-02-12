import { navList } from "./menu";

export const createSearchElements = async () => {
  const searchedEl = document.createElement("li");
  const searchedTerm = document.querySelector("input").value;
  searchedEl.textContent = searchedTerm;
  searchedEl.addEventListener("click", async () => {
    await data(searchedTerm, 4, "en");
  });
  navList.appendChild(searchedEl);
  document.querySelector("input").value = "";
};
