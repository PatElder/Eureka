export let searchArray = [
  ["United-States", 6, "en"],
  ["Canada", 4, "en"],
  ["Mexico", 4, "es"]
];

export const storeSearch = search => {
  let firstReplace = 5;
  if (searchArray.length < 9) {
    searchArray.push([search, "4", "en"]);
  } else {
    searchArray[firstReplace] = search;

    if (firstReplace === 9) {
      firstReplace = 5;
    } else {
      firstReplace++;
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
