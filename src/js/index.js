import newsTemplate from "../hbs/news.hbs";
import "../css/style.css";
import { getNews } from "../js/newsFetch";

const searchArray = [
  ["Trump", 4, "en"],
  ["Trudeau", 4, "en"],
  ["López Obrador", 2, "es"]
];
const navList = document.createElement("ul");

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

async function createHeadings() {
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

const createSearchElements = async () => {
  const searchedEl = document.createElement("li");
  const searchedTerm = document.querySelector("input").value;
  searchedEl.textContent = searchedTerm;
  searchedEl.addEventListener("click", async () => {
    await data(searchedTerm, 4, "en");
  });
  navList.appendChild(searchedEl);
  document.querySelector("input").value = "";
};

window.onload = async () => {
  await createHeadings();
};
