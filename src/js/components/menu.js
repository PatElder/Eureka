import { createSearchElements } from "./menuitem";
import { getNews } from "../newsFetch";
import newsTemplate from "../../hbs/news.hbs";

const searchArray = [
  ["Trump", 4, "en"],
  ["Trudeau", 4, "en"],
  ["López Obrador", 2, "es"]
];
export const navList = document.createElement("ul");

async function data(search, num, language) {
  const newsData = await getNews(search, num, language);
  if (document.body.hasChildNodes()) {
    document.body.innerHTML = "";
  }
  for (let i = 0; i < num; i++) {
    const newsEl = document.createElement("div");
    newsEl.innerHTML = newsTemplate(newsData.articles[i]);
    document.body.appendChild(newsEl);
  }
  return newsData;
}

export async function createHeadings() {
  const header = document.createElement("header");

  for (let y = 0; y < searchArray.length; ++y) {
    const navEl = document.createElement("li");
    navList.appendChild(navEl);
    navEl.innerHTML = `${searchArray[y][0]}`;
    navEl.addEventListener("click", async () => {
      await data(searchArray[y][0], searchArray[y][1], searchArray[y][2]);
    });
  }
  createSearch();
  header.appendChild(navList);
  document.documentElement.appendChild(header);
}

function createSearch() {
  const listEl = document.createElement("li");
  const searchBtn = document.createElement("button");
  searchBtn.textContent = "Search";
  const searchEl = document.createElement("input");
  searchEl.setAttribute("type", "text");
  searchBtn.addEventListener("click", () => {
    const searchTerm = searchEl.value;
    data(searchTerm, 4, "en");
    createSearchElements();
  });

  listEl.appendChild(searchEl);
  listEl.appendChild(searchBtn);
  navList.appendChild(listEl);
}
