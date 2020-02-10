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

const searchArray = [data("Trump", 4, "us"),data("Trudeau", 2, "ca"), data("López", 2, "mx")];

const createHeadings = async () => {
  searchArray.forEach(element => {
  const navList = document.getElementsByTagName("ul");
  const navEl = document.createElement("li");
  navEl.innerHTML = `<li>${arguments[0]}</li>`
  navEl.addEventListener("click", element);
  console.log(navList);
  document.body.appendChild(navEl);
  });
}



window.onload = () => {
createHeadings();

  
};
