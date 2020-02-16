import homeTemplate from "../../hbs/home.hbs";

export const createHome = () => {
  const homeNews = document.createElement("div");
  homeNews.id = "homeNews";
  homeNews.innerHTML = homeTemplate();
  document.documentElement.appendChild(homeNews);
  return homeNews;
};
