import homeTemplate from "../../hbs/home.hbs";

export const createHome = () => {
  const homeNews = document.createElement("div");
  homeNews.innerHTML = homeTemplate();
  document.documentElement.appendChild(homeNews);
};
