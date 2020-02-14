import { getNews } from "../../api/newsFetch";
import newsTemplate from "../../../hbs/news.hbs";
import { searchArray, checkForReRender } from "../../localStorage/localSearch";
import { createSearch } from "../../components/Menu/searchBar";

export const navList = document.createElement("ul");

export async function data(search, num, language) {
  const newsData = await getNews(search, num, language);
  const displayQty = newsData.articles.length;
  if (document.body.hasChildNodes()) {
    document.body.innerHTML = "";
  }
  for (let i = 0; i < displayQty; i++) {
    const newsEl = document.createElement("div");
    newsEl.innerHTML = newsTemplate(newsData.articles[i]);
    document.body.appendChild(newsEl);
  }
  return newsData;
}

export async function createHeadings() {
  checkForReRender();

  const header = document.createElement("header");
  const imgNav = document.createElement("div");
  imgNav.classList.add("logo");
  header.appendChild(imgNav);

  for (let y = 0; y < searchArray.length; ++y) {
    const navEl = document.createElement("li");
    navList.appendChild(navEl);
    navEl.innerHTML = searchArray[y][0];
    navEl.addEventListener("click", async () => {
      await data(searchArray[y][0], searchArray[y][1], searchArray[y][2]);
    });
  }
  createSearch();
  header.appendChild(navList);
  document.documentElement.appendChild(header);
}
