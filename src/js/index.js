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
  ["Trump", 4, "us"],
  ["Trudeau", 2, "ca"],
  ["López", 2, "mx"],
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
      await data(searchArray[0][y], searchArray[0][y], searchArray[0][y]);
      console.log(
        data(searchArray[y][y], searchArray[y][y + 1], searchArray[y][y + 2])
      );
    });
    console.log(y);
    document.body.appendChild(navList);
  }
}

window.onload = () => {
  createHeadings();
};
