export let searchArray = [
  ["Trump", 4, "en"],
  ["Trudeau", 4, "en"],
  ["López Obrador", 2, "es"]
];

export const storeSearch = search => {
  let firstReplace = 3;
  const maxTerms = 6;
  console.log(document.querySelector(`[data-id='3']`));

  if (searchArray.length < maxTerms) {
    searchArray.push([search, "4", "en"]);
  } else {
    searchArray[firstReplace][0] = search;
    if (firstReplace !== maxTerms) {
      firstReplace++;
    } else {
      firstReplace = 3;
      document.querySelector(`[data-id='3']`).remove();
    }
  }
  storeLocally(searchArray);
  updateSearchArray();
  return searchArray;
};

const storeLocally = searched =>
  localStorage.setItem("searched", JSON.stringify(searched));

const updateSearchArray = () => {
  let storageArray = JSON.parse(localStorage.getItem("searched"));
  searchArray = storageArray;
};

export const checkForReRender = () => {
  if (localStorage.getItem("searched") !== null) {
    updateSearchArray();
  }
};
