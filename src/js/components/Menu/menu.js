import { getNews } from "../../api/newsFetch";
import newsTemplate from "../../../hbs/news.hbs";
import homeTemplate from "../../../hbs/home.hbs";
import { searchArray, checkForReRender } from "../../localStorage/localSearch";
import { createSearch } from "../../components/Menu/searchBar";


export async function data(search, num, language) {
  const newsData = await getNews(search, num, language);
  if (document.getElementById("homeNews") !== null) {
    document.getElementById("homeNews").remove();
  }
  if(document.getElementById("content") !== null ){
    document.getElementById("content").remove();
  }
  const displayQty = newsData.articles.length
  let mainEl = document.createElement("main");
  mainEl.id = "content";
  for (let i = 0; i < displayQty; i++) {
    const newsEl = document.createElement("div"); 
    newsEl.innerHTML = newsTemplate(newsData.articles[i]);
    mainEl.appendChild(newsEl);
  }
  document.body.appendChild(mainEl);
  return newsData;
}

export async function createHeadings() {
  checkForReRender();

  const header = document.getElementsByTagName("header")[0];
  const navList = document.createElement("ul");
  navList.id="myDropdown";
  navList.classList.add("dropdown-content");
  const imgNav = document.createElement("div");
  imgNav.classList.add("logo");
  imgNav.id = "homeLogo";

  imgNav.addEventListener("click", () => {
    document.getElementById("content").innerHTML = homeTemplate();
  });
  header.appendChild(imgNav);

  const dropDown = document.createElement("div");
  dropDown.classList.add("dropDown");
  const btnDropdown = document.createElement("button");
  dropDown.appendChild(btnDropdown)
  btnDropdown.addEventListener("click", ()=>{
    document.getElementById("myDropdown").classList.toggle("show");
  })


  for (let y = 0; y < searchArray.length; ++y) {
    const navEl = document.createElement("li");
    navList.appendChild(navEl);
    navEl.innerHTML = searchArray[y][0];
    navEl.addEventListener("click", async () => {
      await data(searchArray[y][0], searchArray[y][1], searchArray[y][2]);
    });
  }

  header.appendChild(dropDown);
  dropDown.appendChild(navList);
  createSearch();
}


