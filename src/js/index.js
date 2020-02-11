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
    navEl.innerHTML = `<li>${searchArray[y][0]}</li>`;
    navEl.addEventListener("click", async () => {
      await data(searchArray[y][0], searchArray[y][1], searchArray[y][2]);
    });
  }
  await createSearch();
  header.appendChild(navList);
  document.documentElement.appendChild(header);
}

async function createSearch() {
  const listEl = document.createElement("li");
  const searchEl = document.createElement("input");
  searchEl.setAttribute("type", "text");
  searchEl.addEventListener("input", () => {
    const searchTerm = searchEl.value;
    clearTimeout(searchHandler);
    const searchHandler = setTimeout(() => {
      data(searchTerm, 4, "en");
    }, 1000);
  });
  listEl.appendChild(searchEl);
  navList.appendChild(listEl);
}

window.onload = async () => {
  await createHeadings();
};
