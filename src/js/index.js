import _ from "lodash";
import "../css/style.css";
import { getNews } from "../js/newsFetch";

function component() {
  const element = document.createElement("div");
  const news = getNews("Trump", 2, "us").then(data => console.log(data));
  return element;
}

document.body.appendChild(component());
