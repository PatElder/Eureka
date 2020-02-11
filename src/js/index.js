import newsTemplate from "../hbs/news.hbs";
import "../css/style.css";
import { getNews } from "../js/newsFetch";

async function data(search, num, country) {
  const newsData = await getNews(search, num, country);
  for (let i = 0; i < num; i++) {
    const newsEl = document.createElement("div");
    newsEl.innerHTML = newsTemplate(newsData.articles[i]);
    document.body.appendChild(newsEl);
  }
  return newsData;
}

const searchArray = [
  ["Trump", 4, "en"],
  ["Trudeau", 4, "en"],
  ["López Obrador", 2, "es"],
  ["Search"]
];

async function createHeadings() {
  const navList = document.createElement("ul");
  for (let y = 0; y < searchArray.length; ++y) {
    const navEl = document.createElement("li");
    navList.appendChild(navEl);
    navEl.innerHTML = `<li>${searchArray[y][0]}</li>`;
    navEl.addEventListener("click", async () => {
      document.getElementsByTagName("div").innerHTML = "";
      await data(searchArray[y][0], searchArray[y][1], searchArray[y][2]);
    });
    document.body.appendChild(navList);
  }
}

window.onload = () => {
  createHeadings();
};
