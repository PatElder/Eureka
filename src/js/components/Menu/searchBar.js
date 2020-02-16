import { storeSearch, searchArray } from "../../localStorage/localSearch";
import { data } from "../Menu/menu";

export function createSearch() {
  const listEl = document.createElement("li");
  const searchBtn = document.createElement("button");
  searchBtn.textContent = "Search";
  const searchEl = document.createElement("input");
  searchEl.setAttribute("type", "search");
  searchEl.id = "searchBar"
  autocomplete(searchEl, searchArray)
  searchBtn.addEventListener("click", async () => {
    const searchTerm = searchEl.value;
    if(searchTerm !== null){
    storeSearch(searchTerm);
    await data(searchTerm, 4, "en");
    } else {
      alert("Search requires a value.")
    }
  });
  searchEl.addEventListener("keyup", () => {
  if (event.keyCode === 13) {
    searchBtn.click();
  }
  });
  listEl.appendChild(searchEl);
  listEl.appendChild(searchBtn);
  document.getElementById("myDropdown").appendChild(listEl);
}

const autocomplete = inp => arr => {
  let currentFocus;
  inp.addEventListener("input", () => {
      let a, listItem, val = inp.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      a = document.createElement("div");
      a.setAttribute("id", inp.id + "autocomplete-list");
      a.classList.add("autocomplete-items");
      inp.parentNode.appendChild(a);
      arr.map(el => {
        if (el.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          listItem = document.createElement("div");
          listItem.innerHTML = `<strong> ${el.substr(0, val.length)}  </strong>`;
          listItem.innerHTML += el.substr(val.length);
          listItem.innerHTML += `<input type="hidden" value="${el}">`;
          listItem.addEventListener("click", () => {
              inp.value = document.getElementById("searchBar").value;
              closeAllLists();
          });
          a.appendChild(listItem);
        }
      })
  });
  inp.addEventListener("keydown", e => {
      let x = document.getElementById(input.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
      } else if (e.keyCode == 38) { 
        currentFocus--;
        addActive(x);
      } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
  });
  const addActive = x => {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }
  const removeActive = x => {
    x.map(el => {
      el.classList.remove("autocomplete-active");
    })
  }
  const  closeAllLists = lists => {
    const x = document.getElementsByClassName("autocomplete-items");
    x.map(el => {
      if (lists != el && lists != inp) {
      el.parentNode.removeChild(el);
    }
  })
}
document.addEventListener("click", ev => {
    closeAllLists(ev.target);
});
} 