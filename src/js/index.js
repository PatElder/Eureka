import newsTemplate from "../hbs/news.hbs";
import "../css/style.css";
import { getNews } from "../js/newsFetch";

async function data(search, num, country) {
  const newsData = await getNews(search, num, country);
  for (let i = 0; i < num; i++) {
    const newsEl = document.createElement("div");
    newsEl.innerHTML = newsTemplate(newsData.articles[i])
    document.body.appendChild(newsEl);
  }
  return newsData;
}

window.onload = () => {
  data("Virus", 5, "ca");
};
