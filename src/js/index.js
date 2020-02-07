import newsTemplate from "../hbs/news.hbs";
import "../css/style.css";
import { getNews } from "../js/newsFetch";

async function data() {
  const newsData = await getNews("Trump", 5, "us");
  for (let i = 0; i < newsData.totalResults - 1; i++) {
    const newsEl = document.createElement("div");
    newsEl.innerHTML = `<div><img src=${newsData.articles[i].urlToImage} /><div class="news">${newsData.articles[i].title}</div></div>`;
    console.log(newsData.articles[i]);
    document.body.appendChild(newsEl);
  }
  return newsData;
}

window.onload = () => {
  data();
};
